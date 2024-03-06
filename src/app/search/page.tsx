import { Suspense } from "react";
import { SearchProducts } from "@/ui/molecules/SearchProducts";

export default function SearchPage({ searchParams }: { searchParams?: { query?: string } }) {
	const query = searchParams?.query || "";
    if (!query) {
        return null;
    }
	return (
		<Suspense key={query}>
			<SearchProducts query={query} />
		</Suspense>
	);
}
