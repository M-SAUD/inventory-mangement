interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  searchParams: Record<string, string>;
}
import { get } from "http";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Pagination = ({
  currentPage,
  totalPages ,
  baseUrl,
  searchParams,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const getPageUrl = (page: number) => {
    const params = new URLSearchParams({...searchParams,page:String(page)});
    params.set("page", page.toString());
    return `${baseUrl}?${params.toString()}`;
  }

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();
  console.log(visiblePages);

  return (
    <nav className="flex items-center justify-center gap-1">
      {currentPage <= 1 ? (
        <span
          className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-400 cursor-not-allowed bg-gray-100`}
          aria-disabled="true"
        >
          <ChevronLeft />
          Previous
        </span>
      ) : (
        <Link
          href={getPageUrl(currentPage - 1)}
          className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-50 border border-gray-300 hover:scale-102 transition-all`}
        >
          <ChevronLeft />
          Previous
        </Link>
      )}

      {visiblePages.map((page, key) => {
        if (page === "...") {
          return (
            <span
              key={key}
              className="px-3 py-2 text-sm font-medium text-gray-500"
            >
              ...
            </span>
          );
        }

        const pageNumber = page as number;
        const isCurrentpage = pageNumber === currentPage;

        return (
          <Link
            key={key}
            href={getPageUrl(pageNumber)}
            aria-disabled={isCurrentpage ? "true" : "false"}
            className={`px-3 py-2 text-sm font-medium rounded-lg ${
              isCurrentpage
                ? "bg-purple-600 text-white"
                : "text-gray-700 hover:bg-gray-100 bg-white border border-gray-300"
            }`}
          >
            {pageNumber}
          </Link>
        );
      })}

      {currentPage >= totalPages ? (
        <span
          className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-400 cursor-not-allowed bg-gray-100`}
          aria-disabled="true"
        >
          <ChevronRight />
          Next
        </span>
      ) : (
        <Link
          href={getPageUrl(currentPage + 1)}
          className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-50 border border-gray-300 hover:scale-102 transition-all`}
        >
          <ChevronRight />
          Next
        </Link>
      )}
    </nav>
  );
};

export default Pagination;
