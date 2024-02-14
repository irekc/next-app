import { getProdutsList } from "@/api/products"
import { ProductList } from "@/ui/organisms/ProductList"

export const SuggestedProductsList = async () => {
    const products = await getProdutsList()
    return (
        <ProductList products={products}/>
    )
}