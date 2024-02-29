import { ActiveLink } from "@/ui/atoms/ActiveLink";


type PaginationProps = {
  numberOfPages: number;
  categories: string;
};


export const Pagination = ({ numberOfPages, categories }: PaginationProps) => {
  const pages = new Array(numberOfPages).fill(0);
    return (
      <nav>
        <ul aria-label="pagination" className="flex justify-center space-x-2">
          {pages.map((_, index) => {
            return (
              <ul key={index}>
                <ActiveLink exact href={`/${categories}/${index + 1}`}>
                  {String(index + 1)}
                </ActiveLink>
              </ul>
            );
          })}
        </ul>
      </nav>
    );
};