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
			<main>{children}</main>
		</>
	);
}
