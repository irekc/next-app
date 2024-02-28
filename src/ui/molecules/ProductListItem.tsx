import Link from "next/link";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { ProductCoverImage } from "@/ui/atoms/ProductListItemImage";

import type { ProductListItemFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductListItemFragment;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<Link href={{pathname: `/product/${product.id}` }}>
				<article>
					{product.images &&(<ProductCoverImage src={product.images[0].url} alt={product.name} />)}
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
