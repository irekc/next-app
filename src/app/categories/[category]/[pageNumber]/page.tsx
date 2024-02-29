import { notFound } from "next/navigation";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsListByCategorySlug } from "@/api/products";

export default async function CategoryProductsPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const products = await getProductsListByCategorySlug(params.category);

  if(!products) {
    throw notFound()
  }
 
  return (
		<div>
			<h1>Produkty z kategori {params.category}</h1>
			<ProductList products={products} />
		</div>
	);
}
