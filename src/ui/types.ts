export type ProductItemType = {
	id: string;
	title: string;
	category: string;
	price: number;
	coverImage: {
		src: string;
		alt: string;
	};
	description: string;
};
