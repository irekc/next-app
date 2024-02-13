import { type ProductItemType } from "@/ui/types";

type ProductResponseItem = {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    rating: {
        rate: number;
        count: number;
    };
    image: string;
    longDescription: string;
};

export const getProdutsList = async () => {
    const res = await fetch("https://naszsklep-api.vercel.app/api/products");
	const productsResponse = (await res.json()) as ProductResponseItem[];
	const products = productsResponse.map(
		(product): ProductItemType => ({
			id: product.id,
			name: product.title,
			category: product.category,
			coverImage: {
				alt: product.title,
				src: product.image
			},
			price: product.price
		}),
	);
    return products
}