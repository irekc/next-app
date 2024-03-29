
import type { ProductListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/ui/utils";

type ProdutListItemDescriptionProps = {
	product: ProductListItemFragment;
};

export const SingleProductDescription = ({
	product: { name, categories, price, description },
}: ProdutListItemDescriptionProps) => {
	return (
		<div className="flex=column max-w-15 mt-2 justify-between p-2">
			<div>
				<h1 className=" text-xl font-semibold text-gray-700 dark:text-gray-200">{name}</h1>
				<p className="text-sm text-gray-500 dark:text-gray-300">
					<span className="sr-only">Kategoria:</span> {categories[0].name}
				</p>
			</div>
			<p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
				<span className="sr-only">Cena:</span> {formatMoney(price)}
			</p>
			<p>{description}</p>
		</div>
	);
};
