import { getProductsListByCategorySlug, getProdutsListToPagination } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export const SuggestedProductsList = async ({ category }: { category: string }) => {
	const products = await getProductsListByCategorySlug(category);
	if (!products) {
		return <div>Brak sugerowanych produktów</div>;
	}
	const paginatedProducts = await getProdutsListToPagination(products, "1", 4);
	return (
		<div data-testid="related-products">
			<ProductList products={paginatedProducts} />
		</div>
	);
};
