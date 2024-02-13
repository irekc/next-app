import { getProductById } from "@/api/products";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { ProductCoverImage } from "@/ui/atoms/ProductListItemImage";

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	return (
		<article>
			<ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} />
			<ProductListItemDescription product={product} />
		</article>
	);
}
