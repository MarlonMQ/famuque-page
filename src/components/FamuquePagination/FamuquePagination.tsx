import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";


type FamuquePaginationProps = {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  className?: string;
};

export function FamuquePagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  className = "",
}: FamuquePaginationProps) {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <div className={className}>
      <Pagination>
        <PaginationPrevious
          className={`hover:text-gray cursor-pointer ${currentPage === 1 ? "opacity-50 pointer-events-none" : ""}`}
          isActive={currentPage > 1}
          onClick={() => handlePageChange(currentPage - 1)}
        />

        <PaginationContent>
          {currentPage > 2 && (
            <>
              <PaginationItem className="cursor-pointer hover:bg-gray-light rounded-md transtion-all duration-150">
                <PaginationLink onClick={() => handlePageChange(1)}>1</PaginationLink>
              </PaginationItem>
              {currentPage > 3 && <PaginationEllipsis />}
            </>
          )}

          {currentPage > 1 && (
            <PaginationItem className="cursor-pointer hover:bg-gray-light rounded-md transtion-all duration-150">
              <PaginationLink onClick={() => handlePageChange(currentPage - 1)}>
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem className="cursor-pointer">
            <PaginationLink className="bg-gray-light hover:bg-gray border-0" isActive>
              {currentPage}
            </PaginationLink>
          </PaginationItem>

          {currentPage < totalPages && (
            <PaginationItem className="cursor-pointer hover:bg-gray-light rounded-md transtion-all duration-150">
              <PaginationLink onClick={() => handlePageChange(currentPage + 1)}>
                {currentPage + 1}
              </PaginationLink>
            </PaginationItem>
          )}

          {currentPage < totalPages - 1 && (
            <>
              {currentPage < totalPages - 2 && <PaginationEllipsis />}
              <PaginationItem className="cursor-pointer hover:bg-gray-light rounded-md transtion-all duration-150">
                <PaginationLink onClick={() => handlePageChange(totalPages)}>
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            </>
          )}
        </PaginationContent>

        <PaginationNext
          className={`hover:text-gray cursor-pointer ${currentPage === totalPages ? "opacity-50 pointer-events-none" : ""}`}
          isActive={currentPage < totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        />
      </Pagination>
    </div>
  );
}
