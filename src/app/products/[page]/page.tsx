import { notFound } from "next/navigation";
import { getProdutsList, getProdutsListToPagination } from "@/api/products";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPage({ params }: { params: { page: string } }) {
	// const products = await getProdutsListToPagination(productsOnList, params.page);
	const products = await getProdutsList();
	if (!products) {
		throw notFound();
	}
	const productsOnList = 5;
	const allProductsLenght = products.length;
	const totalPages = Math.ceil(allProductsLenght / Number(productsOnList));

	const paginatedProducts = await getProdutsListToPagination(products, params.page, productsOnList);

	return (
		<section className="mt-20 max-w-md p-12 sm:mx-auto sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<Pagination numberOfPages={totalPages} categories="products" />

			<ProductList products={paginatedProducts} />
			<div>page number {params.page}</div>
		</section>
	);
}
