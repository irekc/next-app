import { getCollectionsList } from "@/api/products";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export async function CollectionsLinks() {
	const collections = await getCollectionsList();
    if(!collections) throw new Error(`Collections not found.`);
	return (
		<>
			<nav>
				<h1 className="m-auto text-center font-bold">Collections</h1>
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
		</>
	);
}
