import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Collections",
	description: "Products sorted by collections",
};

export default async function CollectionsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<header className="mt-20">
				<h2>Collections</h2>
			</header>
			<main>{children}</main>
		</>
	);
}
