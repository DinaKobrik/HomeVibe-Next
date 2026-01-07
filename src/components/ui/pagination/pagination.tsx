"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";
import styles from "./pagination.module.css";
import React from "react";

interface PaginationProps<T> {
  items: T[];
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  renderItems: (currentItems: T[]) => React.ReactNode;
  className?: string;
}

export function Pagination<T>({
  items,
  itemsPerPage,
  currentPage,
  onPageChange,
  renderItems,
  className,
}: PaginationProps<T>) {
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  if (totalPages <= 1) return <>{renderItems(items)}</>;

  const generatePages = (): (number | string)[] => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];

    pages.push(1);

    if (currentPage <= 2 || currentPage > totalPages - 2) {
      pages.push(2);
    }

    if (currentPage > 2) {
      pages.push("...");
    }

    if (currentPage > 2 && currentPage < totalPages - 1) {
      pages.push(currentPage);
    }

    if (currentPage < totalPages - 1) {
      pages.push("...");
    }

    if (currentPage <= 2 || currentPage > totalPages - 2) {
      pages.push(totalPages - 1);
    }

    pages.push(totalPages);

    return pages;
  };

  const pages = generatePages();

  const ellipsisElement = <span className={styles.dots}>...</span>;

  return (
    <>
      {renderItems(currentItems)}

      <div className={cn(styles.pagination, className)}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={cn(styles.pageButton, styles.left)}>
          &#11166;
        </button>

        {pages.map((page, index) =>
          page === "..." ? (
            <React.Fragment key={`dots-${index}`}>
              {ellipsisElement}
            </React.Fragment>
          ) : (
            <button
              key={page}
              onClick={() => handlePageChange(page as number)}
              className={`${styles.pageButton} ${
                currentPage === page ? styles.active : ""
              }`}>
              {page}
            </button>
          )
        )}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={styles.pageButton}>
          &#11166;
        </button>
      </div>
    </>
  );
}
