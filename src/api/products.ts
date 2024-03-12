import { executeGraphql } from "@/api/graphqlApi";
import {
	type ProductListItemFragment,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
	ProductGetByIdDocument,
	GetCollectionsListDocument,
	GetProductsByCollectionsSlugDocument,
	ProductsGetsBySearchDocument,
	CollectionNameGetBySlugDocument,
	CategoryNameGetBySlugDocument,
	ProductsGetByRatingDocument,
} from "@/gql/graphql";

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

	return graphqlResponse.products.data;
};
export const getCollectionsList = async () => {
	const data = await executeGraphql(GetCollectionsListDocument, {});

	return data.collections?.data;
};

export const getProductsListBycollectionSlug = async (collectionSlug: string) => {
	const data = await executeGraphql(GetProductsByCollectionsSlugDocument, { slug: collectionSlug });
	return data.collection?.products;
};

export const getProductsListByCategorySlug = async (categorySlug: string) => {
	const data = await executeGraphql(ProductsGetByCategorySlugDocument, {
		slug: categorySlug,
	});
	return data.category?.products;
};

export const getProdutsListToPagination = async (
	allProducts: Array<ProductListItemFragment>,
	page: string = "1",
	take = 10,
) => {
	const pageNumber = Number(page);
	const paginatedProducts = allProducts.slice((pageNumber - 1) * take, pageNumber * take);
	return paginatedProducts;
};

export const getProductById = async (_id: ProductListItemFragment["id"]) => {
	const data = await executeGraphql(ProductGetByIdDocument, {
		id: _id,
	});
	return data?.product;
};

export const getProductsBySearchQuery = async (query: string, take: number) => {
	const data = await executeGraphql(ProductsGetsBySearchDocument, {
		search: query,
		take: take,
	});
	return data.products.data;
};

export const getCollectionNameBySlug = async (slug: string) => {
	const data = await executeGraphql(CollectionNameGetBySlugDocument, {
		slug: slug,
	});

	return data?.collection?.name;
};

export const getCategoryNameBySlug = async (slug: string) => {
	const data = await executeGraphql(CategoryNameGetBySlugDocument, { slug: slug });
	return data?.category?.name;
};

export const getProductsByRating = async () => {
	const data = await executeGraphql(ProductsGetByRatingDocument, {});
	return data.products.data;
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
