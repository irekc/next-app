import { type Metadata } from "next";
import { getCollectionNameBySlug, getProductsListBycollectionSlug, getProdutsListToPagination } from "@/api/products";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export const generateMetadata = async ({
	params,
}: {
	params: { collection: string };
}): Promise<Metadata> => {
	const collectionName = await getCollectionNameBySlug(params.collection);
	if(collectionName) {
		return {
			title: collectionName,
			openGraph: {
				title: collectionName,
			},
		};
	} else {
	return {
		title: params.collection,
		openGraph: {
			title: params.collection,
		},
	};
}
};

export default async function CollectionsProductPage({
	params,
}: {
	params: { collection: string; collectionPage: string };
}) {
	const collectionName = await getCollectionNameBySlug(params.collection);
	const products = await getProductsListBycollectionSlug(params.collection);
	if (!products) throw new Error(`Products from collection ${params.collection} not found.)`);

	const productsOnList = 10;
	const allProductsLenght = products.length;
	const totalPages = Math.ceil(allProductsLenght / Number(productsOnList));

	const paginatedProducts = await getProdutsListToPagination(
		products,
		params.collectionPage,
		productsOnList,
	);
	return (
		<>
			<h2 className="mt-20">{collectionName}</h2>
			<Pagination numberOfPages={totalPages} categories={`collections/${params.collection}`} />
			<ProductList products={paginatedProducts} />
		</>
	);
}
