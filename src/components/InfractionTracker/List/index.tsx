import React from "react";
import { useNavigation } from "@refinedev/core";
import { useTable } from "@refinedev/react-table";
import { flexRender } from "@tanstack/react-table";
import { Filter } from "./Filter";
import { Pagination } from "@components/common/Pagination/Pagination";
import { Header } from "./Header";
import { useList } from "@refinedev/core";

interface IInfractionTrackerList {

}

export const InfractionTrackerList: React.FC<IInfractionTrackerList> = ({

}) => {
  const { edit, show } = useNavigation();
  const columns = React.useMemo(
    () => Header({ edit, show }),
    [edit, show]
  );

  const [date, setDate] = React.useState();
  const { data: infraction_tracker_data } = useList<any>({
    resource: "infraction_tracker",
    filters: [
      {
        field: "created_on",
        operator: "eq",
        value: date,
      },
    ],
  });

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
    // refineCoreProps: {
    //   resource: "infraction_tracker",
    //   filters: {
    //     initial: [
    //       {
    //         field: "created_on",
    //         operator: "eq",
    //         value: date,
    //       },
    //     ],
    //   },
    // },
    data: infraction_tracker_data?.data || [],
    columns,
  });

  const handleFilter = (filter: any) => {
    setDate(filter?.created_on);
    const updatedFilters = [
      {
        field: "created_on",
        operator: "eq",
        value: filter,
      },
    ];
  };

  setOptions((prev) => ({
    ...prev,
    meta: {
      ...prev.meta,
    },
  }));

  return (
    <>
      {/* <div className="bg-gray-200 rounded-lg p-5"> */}
        <div className="max-w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto h-auto bg-slate-800 rounded-lg flex flex-col">
          <div className="text-center text-2xl text-white">ລາຍງານລົດທີ່ລ່ວງລະເມີດ</div>
          <div className="flex justify-end mb-5">
            <Filter onFilter={handleFilter} />
          </div>
          {/* <div className="flex flex-col"> */}
            {/* <div className="-m-1.5 overflow-x-auto"> */}
              {/* <div className="p-1.5 min-w-full inline-block align-middle"> */}
                <div className="overflow-x-auto py-2 bg-slate-900 my-5 px-5 rounded-lg">
                  <table className="w-full table-auto my-5 ">
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
                    <tbody className="divide-y divide-gray-400 dark:divide-gray-700">
                      {getRowModel().rows.map((row) => (
                        <tr key={row.id} className="bg-slate-700 border-b transition duration-300 ease-in-out hover:bg-slate-800 text-white">
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
            {/* </div> */}
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
    </>
  );
};
