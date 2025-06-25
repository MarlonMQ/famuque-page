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
      <Pagination className="gap-2">
        <PaginationPrevious
          className={`bg-famuque-light hover:bg-famuque cursor-pointer ${currentPage === 1 ? "bg-white opacity-50 pointer-events-none" : ""}`}
          isActive={currentPage > 1}
          onClick={() => handlePageChange(currentPage - 1)}
        />

        <PaginationContent>
          {currentPage > 2 && (
            <>
              <PaginationItem className="bg-famuque-light cursor-pointer hover:bg-famuque rounded-md transtion-all duration-150">
                <PaginationLink onClick={() => handlePageChange(1)}>1</PaginationLink>
              </PaginationItem>
              {currentPage > 3 && <PaginationEllipsis />}
            </>
          )}

          {currentPage > 1 && (
            <PaginationItem className="bg-famuque-light cursor-pointer hover:bg-famuque rounded-md transtion-all duration-150">
              <PaginationLink onClick={() => handlePageChange(currentPage - 1)}>
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem >
            <PaginationLink className="bg-famuque text-white pointer-events-none " isActive>
              {currentPage}
            </PaginationLink>
          </PaginationItem>

          {currentPage < totalPages && (
            <PaginationItem className="bg-famuque-light cursor-pointer hover:bg-famuque rounded-md transtion-all duration-150">
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
          className={`bg-famuque-light hover:bg-famuque shadow-none cursor-pointer ${currentPage === totalPages ? "bg-white  opacity-50 pointer-events-none" : ""}`}
          isActive={currentPage < totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        />
      </Pagination>
    </div>
  );
}
