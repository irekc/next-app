import type { ProductListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/ui/utils";

type ProdutListItemDescriptionProps = {
	product: ProductListItemFragment;
};

export const ProductListItemDescription = ({
	product: { name, categories, price },
}: ProdutListItemDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between p-2">
			<div>
				<h3 className=" text-sm font-semibold text-gray-700 dark:text-gray-200">{name}</h3>
				{categories[0] && (<p className="text-sm text-gray-500 dark:text-gray-300">
					<span className="sr-only">Kategoria:</span> {categories[0].name}
				</p>)}
			</div>
			<p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
				<span className="sr-only">Cena:</span> {formatMoney(price)}
			</p>
		</div>
	);
};
