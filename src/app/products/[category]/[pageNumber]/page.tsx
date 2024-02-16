export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	if (params.category === "t-shirts") {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	} else {
		return [{ pageNumber: "1" }];
	}
};

export default function PageCategory({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	return (
		<div>
			nazwa {params.category} strona{params.pageNumber}
		</div>
	);
}
