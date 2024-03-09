"use client";

import { useRouter, useSearchParams } from "next/navigation";

export const SearchBox = () => {
	const searchParams = useSearchParams();

	const router = useRouter();

	function handleSearch(term: string) {
		const params = new URLSearchParams(searchParams);

		if (term) {
			params.set("query", term);
		} else {
			params.delete("query");
		}

		router.replace(`/search?${params.toString()}`);
	}

	return (
		<div className="relative mx-16 flex max-w-md flex-1 flex-shrink-0 items-center justify-center">
			<label htmlFor="search" className="sr-only">
				Search
			</label>

			<input
				className="peer block max-h-10 w-full  rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
				placeholder="Search..."
				role="searchbox"
				onChange={(e) => {
					handleSearch(e.target.value);
				}}
				defaultValue={searchParams.get("query")?.toString()}
			/>
		</div>
	);
};
