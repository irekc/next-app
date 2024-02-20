import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Navbar = () => {
	return (
		<ul className="mt-4 flex flex-col items-center rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:justify-center md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
			<ActiveLink href="/">Home</ActiveLink>
			<ActiveLink href="/products">All</ActiveLink>
		</ul>
	);
};
