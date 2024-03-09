import { type Metadata } from "next";
import { getProductsListBycollectionSlug, getProdutsListToPagination } from "@/api/products";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export const generateMetadata = async ({
	params,
}: {
	params: { collection: string };
}): Promise<Metadata> => {
	return {
		title: params.collection,
		openGraph: {
			title: params.collection,
		},
	};
};

export default async function CollectionsProductPage({
	params,
}: {
	params: { collection: string; collectionPage: string };
}) {
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
			<h2 className="mt-20">{params.collection}</h2>
			<Pagination numberOfPages={totalPages} categories={`collections/${params.collection}`} />
			<ProductList products={paginatedProducts} />
		</>
	);
}
