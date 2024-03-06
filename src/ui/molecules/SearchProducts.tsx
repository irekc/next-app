import { getProductsBySearchQuery } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export async function SearchProducts({ query }: { query: string }) {
  const take = 10;
	const products = await getProductsBySearchQuery(query, take);

	return (
		<>
			<div>searchProducts</div>
			<ProductList products={products} />
		</>
	);
}
