"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

export const ActiveLink = ({ href, children, exact }: { href: string; children: ReactNode, exact: boolean }) => {
	const pathname = usePathname();
	const isActive =  exact
	? pathname === href
	: pathname.startsWith(href);
	const isHome = href === "/";
	return (
		<li
			className={clsx(
				`block rounded px-3 py-4 text-gray-900 hover:bg-gray-100 md:p-0 md:py-6 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500`,
				isHome && `md:text-blue-700`,
				isActive && `underline`,
			)}
			
		>
			<Link 
			href={{pathname: href,}}
			{...(isActive && {"aria-current": "page"})}
			
			>{children}</Link>
		</li>
	);
};
