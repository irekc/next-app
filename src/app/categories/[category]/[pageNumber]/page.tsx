import type { Metadata } from "next";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsListByCategorySlug, getProdutsListToPagination } from "@/api/products";
import { Pagination } from "@/ui/organisms/Pagination";

export const generateMetadata = async ({
	params,
}: {
	params: { category: string };
}): Promise<Metadata> => {
	const products = await getProductsListByCategorySlug(params.category);

	if (!products) {
		return {
			title: params.category,
			openGraph: {
				title: params.category,
			},
		};
	}
	return {
		title: products[0].categories[0].name,
		openGraph: {
			title: products[0].categories[0].name,
		},
	};
};

export default async function CategoryProductsPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const products = await getProductsListByCategorySlug(params.category);

	if (!products) throw new Error(`Products from category ${params.category} not found.)`);
	const productsOnList = 2;
	const allProductsLenght = products.length;
	const totalPages = Math.ceil(allProductsLenght / Number(productsOnList));

	const paginatedProducts = await getProdutsListToPagination(
		products,
		params.pageNumber,
		productsOnList,
	);

	return (
		<div>
			<h1 className="mx-auto py-10 text-center text-xl font-bold">
				{products[0].categories[0].name}
			</h1>
			<Pagination numberOfPages={totalPages} categories={`categories/${params.category}`} />
			<ProductList products={paginatedProducts} />
		</div>
	);
}
