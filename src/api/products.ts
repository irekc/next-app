import { ProductsGetListDocument, type TypedDocumentString } from "@/gql/graphql";
import { type ProductItemType } from "@/ui/types";

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

export const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw new Error("GRAPHQL_URL is not defined");
	}
	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ query, variables }),
	});

	type GraphqlResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphqlResponse = (await res.json()) as GraphqlResponse<TResult>;

	if (graphqlResponse.errors) {
		throw new Error(`GraphQL Error`, { cause: graphqlResponse.errors });
	}

	return graphqlResponse.data;
};

export const getProdutsList = async (): Promise<ProductItemType[]> => {
	// const res = await fetch("https://naszsklep-api.vercel.app/api/products");
	// const productsResponse = (await res.json()) as ProductResponseItem[];
	// const products = productsResponse.map(ProductResponseItemToProductItemType);
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});

	return graphqlResponse.products.data.map((p) => ({
		id: p.id,
		name: p.name,
		category: p.categories[0].name,
		coverImage: p.images[0] && {
			alt: p.name,
			src: p.images[0].url,
		},
		price: p.price,
		description: p.description,
	}))
};

export const getProdutsListToPagination = async (take = 20, page: number) => {
	const offset = page ? (page - 1) * take : 0;
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`,
	);
	const productsResponse = (await res.json()) as ProductResponseItem[];
	const products = productsResponse.map(ProductResponseItemToProductItemType);
	return products;
};
export const getProductById = async (id: ProductResponseItem["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await res.json()) as ProductResponseItem;
	return ProductResponseItemToProductItemType(productResponse);
};

const ProductResponseItemToProductItemType = (product: ProductResponseItem): ProductItemType => {
	return {
		id: product.id,
		name: product.title,
		category: product.category,
		coverImage: {
			alt: product.title,
			src: product.image,
		},
		price: product.price,
		description: product.description,
	};
};
