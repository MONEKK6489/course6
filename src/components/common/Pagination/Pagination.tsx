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
    <div className="py-1 px-4">
      <nav className="flex items-center space-x-2">
        <select
          className="py-3 px-4 text-white font-medium rounded hover:bg-slate-600 items-center bg-slate-900 ring-1 ring-inset ring-gray-300"
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
          className="py-2 px-4 text-white font-medium rounded hover:bg-slate-600 items-center bg-slate-900 ring-1  ring-gray-300"
        >
          <MdOutlineKeyboardDoubleArrowLeft className="h-6 w-6" />
        </button>
        {Array.from({ length: getPageCount() }, (_, index) => (
          <button
            key={index}
            onClick={() => {
              setPageIndex(index);
            }}
            className={`w-10 h-10 text-gray-400 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-lg
                    ${
                      getState().pagination.pageIndex === index
                        ? "bg-blue-500 text-white"
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
          className="py-2 px-4 text-white font-medium rounded hover:bg-slate-600 items-center bg-slate-900 ring-1  ring-gray-300"
        >
          <MdOutlineKeyboardDoubleArrowRight className="h-6 w-6" />
        </button>
      </nav>
    </div>
  );
};
