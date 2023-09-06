import React from "react";
import { IResourceComponentsProps, useNavigation } from "@refinedev/core";
import { useTable } from "@refinedev/react-table";
import { ColumnDef, flexRender } from "@tanstack/react-table";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";

export const Report: React.FC<any> = ({ mockData }) => {
  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        header: "#",
        accessorKey: "",
        cell: (props) => {
          return (
            <>
              <div>{props.row.index + 1}</div>
            </>
          );
        },
      },
      {
        id: "image",
        accessorKey: "image",
        header: "ຮູບພາບ",
      },
      {
        id: "vehicle_registration_number",
        accessorKey: "vehicle_registration_number",
        header: "ປ້າຍລົດ",
      },

      {
        id: "brand",
        accessorKey: "brand",
        header: "ຍີ້ຫໍ້ລົດ",
      },
      {
        id: "vehicle_color",
        accessorKey: "vehicle_color",
        header: "ສີລົດ",
      },
      {
        id: "vehicle_registration_color",
        accessorKey: "vehicle_registration_color",
        header: "ປະເພດສີປ້າຍ",
      },
      {
        id: "province",
        accessorKey: "province",
        header: "ແຂວງ",
      },
      {
        id: "date",
        accessorKey: "date",
        header: "ເວລາລ່ວງລະເມີດ",
      },
    ],
    []
  );

  const { edit, show, create } = useNavigation();

  const {
    getHeaderGroups,
    getRowModel,
    setOptions,
    refineCore: {
      tableQueryResult: { data: tableData },
    },
    getState,
    setPageIndex,
    getCanPreviousPage,
    getPageCount,
    getCanNextPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable({
    // refineCoreProps: {
    //   resource: "",
    // },
    data: mockData,
    columns,
  });

  setOptions((prev) => ({
    ...prev,
    meta: {
      ...prev.meta,
    },
  }));
  return (
    <>
      <div className="flex flex-col mt-6  max-w-screen mx-auto">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 justify-center m-auto text-center">
          <div className="inline-block py-2 align-middle md:px-6 lg:px-8  ">
            <div className="overflow-hidden  md:rounded-lg m-2 text-1xl rounded-xl border border-gray-400">
              <table className="table-auto divide-y divide-gray-200 w-full">
                <thead className="bg-gray-50">
                  {getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          scope="col"
                          className="px-6 py-3 text-xs font-medium tracking-wider uppercase text-center"
                        >
                          {!header.isPlaceholder &&
                            flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {getRowModel().rows.map((row) => (
                    <tr key={row.id} className=" text-center">
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className="px-6 py-4 whitespace-nowrap"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="flex flex-col lg:flex-row items-center space-x-2 text-xs">
                <select
                  className="py-2 px-4 bg-white text-gray-600 font-medium rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center"
                  value={getState().pagination.pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                  }}
                >
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Showing {pageSize}
                    </option>
                  ))}
                </select>
                <span>
                  Page
                  <strong>
                    {getState().pagination.pageIndex + 1} of {getPageCount()}
                  </strong>
                </span>
                <span>
                  | Go to page:
                  <input
                    type="number"
                    className="p-2  py-1 h-8 mx-3 border focus:ring-gray-500 focus:border-base  sm:text-sm
                      border-gray-300 rounded-md focus:outline-none text-gray-600"
                    defaultValue={getState().pagination.pageIndex + 1}
                    onChange={(e) => {
                      const page = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                      setPageIndex(page);
                    }}
                  />
                </span>
              </div>
              <nav
                aria-label="Pagination"
                className="flex justify-center items-center  mt-8 lg:mt-0 text-gray-900 font-medium"
              >
                <button
                  onClick={() => {
                    setPageIndex(0);
                  }}
                  disabled={!getCanPreviousPage()}
                  className="p-2  rounded hover:bg-gray-100"
                >
                  <MdOutlineKeyboardDoubleArrowLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => {
                    previousPage();
                  }}
                  disabled={!getCanPreviousPage()}
                  className="p-2 mr-4 rounded hover:bg-gray-100"
                >
                  <MdOutlineKeyboardArrowLeft className="h-6 w-6" />
                </button>

                <button
                  onClick={() => {
                    nextPage();
                  }}
                  disabled={!getCanNextPage()}
                  className="p-2 ml-4 rounded hover:bg-gray-100"
                >
                  <MdOutlineKeyboardArrowRight className="h-6 w-6" />
                </button>
                <button
                  onClick={() => {
                    setPageIndex(getPageCount() - 1);
                  }}
                  disabled={!getCanNextPage()}
                  className="p-2 ml-1 rounded hover:bg-gray-100"
                >
                  <MdOutlineKeyboardDoubleArrowRight className="h-6 w-6" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
