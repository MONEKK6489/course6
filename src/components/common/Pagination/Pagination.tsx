import React from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

interface PaginationProps {
  getState: () => any;
  setPageSize: (size: number) => void;
  setPageIndex: (index: number) => void;
  getCanPreviousPage: () => boolean;
  getPageCount: () => number;
  getCanNextPage: () => boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  getState,
  setPageSize,
  setPageIndex,
  getCanPreviousPage,
  getPageCount,
  getCanNextPage,
}) => {
  return (
    <div className="">
      <nav className="">
        <select
          className=""
          value={getState().pagination.pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              ສະແດງ {pageSize}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            setPageIndex(0);
          }}
          disabled={!getCanPreviousPage()}
          className=""
        >
          <MdOutlineKeyboardDoubleArrowLeft className="" />
        </button>
        {Array.from({ length: getPageCount() }, (_, index) => (
          <button
            key={index}
            onClick={() => {
              setPageIndex(index);
            }}
            className={`
                    ${
                      getState().pagination.pageIndex === index
                        ? ""
                        : ""
                    }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => {
            setPageIndex(getPageCount() - 1);
          }}
          disabled={!getCanNextPage()}
          className=""
        >
          <MdOutlineKeyboardDoubleArrowRight className="" />
        </button>
      </nav>
    </div>
  );
};
