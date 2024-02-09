import { ProductList } from "@/ui/organisms/ProductList";
import { ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		name: "Kubek",
		category: "accesories",
		price: 23,
		coverImage: {
			src: "https://www.crazyshop.pl/zasoby/images/middle/kubek_z_nadrukiem_coffee_software_developer_58328_m.jpg",
			alt: "kubek",
		},
	},
	{
		id: "2",
		name: "Koszulka",
		category: "accesories",
		price: 55,
		coverImage: {
			src: "https://ideashirt.pl/static/img/store/product/dziwne-u-mnie-dziala.jpg",
			alt: "koszulka",
		},
	},
	{
		id: "3",
		name: "Spodnie",
		category: "accesories",
		price: 98,
		coverImage: {
			src: "https://www.uniformshop.pl/!uploads/products/b_img_8060a.jpg",
			alt: "spodnie",
		},
	},
	{
		id: "4",
		name: "Plecak",
		category: "accesories",
		price: 122,
		coverImage: {
			src: "https://workstyle.pl/img/11390/plecak-helly-hansen-work-day-27-l",
			alt: "plecak",
		},
	},
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section className="sm: mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
				<ProductList products={products} />
			</section>
		</main>
	);
}
