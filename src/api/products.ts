import { executeGraphql } from "@/api/graphqlApi";
import { type  ProductListItemFragment, ProductsGetByCategorySlugDocument, ProductsGetListDocument, ProductGetByIdDocument } from "@/gql/graphql";

// type ProductResponseItem = {
// 	id: string;
// 	title: string;
// 	price: number;
// 	description: string;
// 	category: string;
// 	rating: {
// 		rate: number;
// 		count: number;
// 	};
// 	image: string;
// 	longDescription: string;
// };

export const getProdutsList = async () => {
	// const res = await fetch("https://naszsklep-api.vercel.app/api/products");
	// const productsResponse = (await res.json()) as ProductResponseItem[];
	// const products = productsResponse.map(ProductResponseItemToProductItemType);
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});

	return graphqlResponse.products.data
};

export const getProductsListByCategorySlug = async (categorySlug: string) => {
	const data = await executeGraphql(ProductsGetByCategorySlugDocument, {
		slug: categorySlug,
	});
	return data.category?.products
};

// export const getProdutsListToPagination = async (take = 20, page: number) => {
// 	const offset = page ? (page - 1) * take : 0;
// 	const res = await fetch(
// 		`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`,
// 	);
// 	const productsResponse = (await res.json()) as ProductResponseItem[];
// 	const products = productsResponse.map(ProductResponseItemToProductItemType);
// 	return products;
// };

export const getProductById = async (_id: ProductListItemFragment["id"]) => {
	const data = await executeGraphql(ProductGetByIdDocument, {
		id: _id,
	});
	return data?.product
};

// const ProductResponseItemToProductItemType = (product: ProductResponseItem): ProductItemType => {
// 	return {
// 		id: product.id,
// 		name: product.title,
// 		category: product.category,
// 		coverImage: {
// 			alt: product.title,
// 			src: product.image,
// 		},
// 		price: product.price,
// 		description: product.description,
// 	};
// };
