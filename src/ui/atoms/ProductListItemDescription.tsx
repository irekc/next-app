import { ProductItemType } from "@/ui/types";
import { formatMoney } from "@/ui/utils";

type ProdutListItemDescriptionProps = {
	product: ProductItemType;
};

export const ProductListItemDescription = ({
	product: { name, category, price },
}: ProdutListItemDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between p-2">
			<div>
				<h3 className=" text-sm font-semibold text-gray-700 dark:text-gray-200">{name}</h3>
				<p className="text-sm text-gray-500 dark:text-gray-300">
					<span className="sr-only">Kategoria:</span> {category}
				</p>
			</div>
			<p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
				<span className="sr-only">Cena:</span> {formatMoney(price)}
			</p>
		</div>
	);
};
