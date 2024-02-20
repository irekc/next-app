import { getProdutsList, getProdutsListToPagination } from "@/api/products";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPage({ params }: { params: { page: number } }) {
	const productsOnList = 20;
	const products = await getProdutsListToPagination(productsOnList, params.page);
	const allProductsLenght = (await getProdutsList()).length;
	const totalPages = Math.ceil(allProductsLenght / Number(productsOnList));

	return (
		<section className="mt-20 max-w-md p-12 sm:mx-auto sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<Pagination numberOfPages={totalPages} />
			<ProductList products={products} />
			<Pagination numberOfPages={totalPages} />
		</section>
	);
}
