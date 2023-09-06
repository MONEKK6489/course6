import React from "react";
import { useNavigation, useList } from "@refinedev/core";
import { useTable } from "@refinedev/react-table";
import { Filter } from "./Filter";
import { flexRender } from "@tanstack/react-table";
import { Pagination } from "@components/common/Pagination/Pagination";
import { Header } from "./Header";

import { CardDetail } from "@components/InfractionSearch/List/cardDetail";
export const InfractionSearchList: React.FC = ({}) => {
  const [platNumber, setPlatNumber] = React.useState("0");
  const { data: tracker_data } = useList<any>({
    resource: "infraction_tracker",
    filters: [
      {
        field: "vehicle_registration_number",
        operator: "eq",
        value: platNumber,
      },
    ],
  });

  const handleFilter = (filter: any) => {
    setPlatNumber(filter);
  };

  const { edit, show } = useNavigation();
  const columns = React.useMemo(() => Header({ edit, show }), [edit, show]);

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
    setPageSize,
  } = useTable({
    data: tracker_data?.data || [],
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
      <div className="pb-5 flex  justify-center  w-3/4  gap-x-1 mx-auto bg-slate-800">
        <div className=" space-y-2">
          <Filter onFilter={handleFilter} />
          <CardDetail tracker_data={tracker_data} />
        </div>
        <div className=" rounded-lg p-5 w-full ">
          <div className="max-w-full  px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto h-auto rounded-lg flex flex-col">
            <div className="text-center text-2xl text-white">ຄົ້ນຫາລົດທີ່ລ່ວງລະເມີດ</div>
            <div className="overflow-x-auto h-full z-10 px-2 border border-gray-200 rounded-xl shadow-sm overflow-hidden bg-slate-900 border-gray-700">
              <table className=" w-full table-auto my-5">
                <thead className="bg-slate-800 border-b table-auto text-white">
                  {getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          scope="col"
                          className="text-sm font-medium px-6 py-4 text-left"
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
                <tbody>
                  {getRowModel().rows.map((row) => (
                    <tr
                      key={row.id}
                      className="bg-slate-700 border-b transition duration-300 ease-in-out hover:bg-slate-800 text-white"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className="text-sm font-light px-6 py-4 whitespace-nowrap"
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
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                <Pagination
                  getState={getState}
                  setPageSize={setPageSize}
                  setPageIndex={setPageIndex}
                  getCanPreviousPage={getCanPreviousPage}
                  getPageCount={getPageCount}
                  getCanNextPage={getCanNextPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
