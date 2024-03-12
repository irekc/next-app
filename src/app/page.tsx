import { getProductsByRating } from "@/api/products";
import { CollectionsLinks } from "@/ui/molecules/CollectionsLinks";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function HomePage() {
	const products = await getProductsByRating();
	if (!products) throw new Error(`Bestsellers not found.)`);

	return (
		<>
			<h2 className="mt-40 font-bold">Home Page</h2>
			<article>
				<h3 className="m-auto font-semibold">Collections</h3>
				<ul className="md:min-w-md flex">
					<CollectionsLinks />
				</ul>
			</article>
			<article>
				<h3 className="font-semibold">Bestsellers</h3>
				<ProductList products={products} />
			</article>
		</>
	);
}
