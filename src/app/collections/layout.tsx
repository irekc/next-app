import type { Metadata } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { getCollectionsList } from "@/api/products";

export const metadata: Metadata = {
	title: "Collections",
	description: "Products sorted by collections",
};

export default async function CollectionsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const collections = await getCollectionsList();
	return (
		<>
			<header>
				<h1 className="m-auto text-center font-bold">Collections</h1>
				<nav>
					<ul className="flex">
						{collections.map((collection) => (
							<div key={collection.name} className="px-5">
								<ActiveLink exact={false} href={`/collections/${collection.slug}/1`}>
									{collection.name}
								</ActiveLink>
							</div>
						))}
					</ul>
				</nav>
			</header>
			<main>{children}</main>
		</>
	);
}
