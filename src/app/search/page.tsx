import { Suspense } from "react";
import { SearchProducts } from "@/ui/molecules/SearchProducts";

export default function SearchPage({ searchParams }: { searchParams?: { query?: string } }) {
	const query = searchParams?.query || "";

	return (
		<Suspense key={query} fallback={"Loading..."}>
			<SearchProducts query={query} />
		</Suspense>
	);
}
