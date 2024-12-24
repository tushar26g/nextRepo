// components/common/Pagination.tsx
"use client";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  return (
    <div className="flex justify-end items-center mt-6 gap-4">
      <div className="text-sm text-gray-600 dark:text-gray-400">
        {startIndex + 1}-{endIndex} of {totalItems}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 
                   disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          First
        </button>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 
                   disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 
                   disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Next
        </button>
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 
                   disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Last
        </button>
      </div>
    </div>
  );
}
