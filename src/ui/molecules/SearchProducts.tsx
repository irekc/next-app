import { getProductsBySearchQuery } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export async function SearchProducts({ query }: { query: string }) {
	const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const take = 10;
	const products = await getProductsBySearchQuery(query, take);
  if(!products) throw new Error(`Products not found.`);
  await wait(5000);
	return (
		<>
			<div>searchProducts</div>
			<ProductList products={products} />
		</>
	);
}
