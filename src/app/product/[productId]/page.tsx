import { Suspense } from "react";
import {type  Metadata } from "next";
import { getProductById} from "@/api/products";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { ProductCoverImage } from "@/ui/atoms/ProductListItemImage";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";


// export const generateStaticParams = async () => {
// 	const products = await getProdutsList();
// 	return products.map((product) => ({ productId: product.id }));
// };

export const generateMetadata = async ({params} : {params: {productId: string}}) : Promise<Metadata> => {
	const product = await getProductById(params.productId)
	return {
		title: `${product.name} -Sklep internetowy`,
		description: product.description,
		openGraph: {
			title: `${product.name} -Sklep internetowy`, 
			description: product.description,
			images: [product.coverImage.src]
		}
	}
}

// export const metadata: Metadata = {
// 	title: 'Product 123'
// }

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	return (
		<>
			<article className="mx-auto max-w-md">
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


