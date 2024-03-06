"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function SearchBox({ placeholder }: { placeholder: string }) {
	const searchParams = useSearchParams();

	const router = useRouter();

	function handleSearch(term: string) {
		if (term.length >= 2) {
			const params = new URLSearchParams(searchParams);

			if (term) {
				params.set("query", term);
			} else {
				params.delete("query");
			}

			router.replace(`/search?${params.toString()}`);
		}
	}

	return (
		<div className="relative flex flex-1 flex-shrink-0">
			<label htmlFor="search" className="sr-only">
				Search
			</label>
			<input
				className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
				placeholder={placeholder}
				role="searchbox"
				onChange={(e) => {
					handleSearch(e.target.value);
				}}
				defaultValue={searchParams.get("query")?.toString()}
			/>
		</div>
	);
}
