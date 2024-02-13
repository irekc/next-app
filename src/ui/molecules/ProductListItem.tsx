import Link from "next/link";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { ProductCoverImage } from "@/ui/atoms/ProductListItemImage";
import { type ProductItemType } from "@/ui/types";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<Link href={{pathname: `/product/${product.id}` }}>
				<article>
					<ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} />
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
