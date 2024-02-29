import { notFound } from "next/navigation";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsListByCategorySlug, getProdutsListToPagination } from "@/api/products";
import { Pagination } from "@/ui/organisms/Pagination";

export default async function CategoryProductsPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const products = await getProductsListByCategorySlug(params.category);

	if (!products) {
		throw notFound();
	}
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
			<h1>Produkty z kategori {params.category}</h1>
			<Pagination numberOfPages={totalPages} categories={`categories/${params.category}`} />
			<ProductList products={paginatedProducts} />
		</div>
	);
}
