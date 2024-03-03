import { Suspense } from "react";
import type { Metadata } from "next";
import { getProductById, getProdutsList } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductListItemImage";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";
import { SingleProductDescription } from "@/ui/atoms/SingleProductDescription";

export const generateStaticParams = async () => {
	const products = await getProdutsList();
	return products.map((product) => ({ productId: product.id }));
};

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	if (!product) throw new Error(`Product with id ${params.productId} not found.)`);

	return {
		title: product.name,
		description: product.description,
		openGraph: {
			title: product.name,
			description: product.description,
			images: [product.images[0].url],
		},
	};
};

// export const metadata: Metadata = {
// 	title: 'Product 123'
// }

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	if (!product) throw new Error(`Product with id ${params.productId} not found.)`);
	return (
		<>
			<article className="mx-auto mt-5 flex max-w-2xl px-5">
				<ProductCoverImage src={product.images[0].url} alt={product.name} />
				<SingleProductDescription product={product} />
			</article>
			<aside className="px-5">
				<h2 className="mx-auto py-10 text-lg font-semibold">Suggested Products</h2>
				<Suspense aria-busy={true} fallback={"Ładowanie..."}>
					<SuggestedProductsList category={product.categories[0].slug} />
				</Suspense>
			</aside>
		</>
	);
}
