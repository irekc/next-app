import { getProductsBySearchQuery } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export async function SearchProducts({ query }: { query: string }) {
	const take = 1;
	const products = await getProductsBySearchQuery(query, take);
	if (!products) throw new Error(`Products not found.`);

	return (
		<>
			<div>searchProducts</div>
			<ProductList products={products} />
		</>
	);
}
