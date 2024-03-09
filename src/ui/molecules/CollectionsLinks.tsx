import { getCollectionsList } from "@/api/products";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export async function CollectionsLinks() {
	const collections = await getCollectionsList();
	if (!collections) throw new Error(`Collections not found.`);
	return (
		<>
			{collections.map((collection) => (
				<ActiveLink key={collection.name} exact={false} href={`/collections/${collection.slug}/1`}>
					{collection.name}
				</ActiveLink>
			))}
		</>
	);
}
