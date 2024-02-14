import { Suspense } from "react";
import { getProductById, getProdutsList } from "@/api/products";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { ProductCoverImage } from "@/ui/atoms/ProductListItemImage";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";

export const generateStaticParams = async () => {
    const products = await getProdutsList()
	return products.map(product => ({productId: product.id}))
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	return (
		<>
			<article className="max-w-md">
				<ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} />
				<ProductListItemDescription product={product} />
			</article>
			<aside>
				<Suspense fallback={"Ładowanie..."}>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
}
