import { Suspense } from "react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { SearchBox } from "@/ui/atoms/SearchBox";
import { CollectionsLinks } from "@/ui/molecules/CollectionsLinks";

export const Navbar = () => {
	return (
		<nav>
			<Suspense>
				<SearchBox placeholder="search..." />
			</Suspense>
			<ul className="mt-4 flex flex-col items-center rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:justify-center md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
				<ActiveLink exact href="/">
					Home
				</ActiveLink>
				<ActiveLink exact={false} href="/products">
					All
				</ActiveLink>
				<CollectionsLinks />
				<ActiveLink exact={false} href="/categories/t-shirts">
					T-Shirts
				</ActiveLink>
			</ul>
		</nav>
	);
};
