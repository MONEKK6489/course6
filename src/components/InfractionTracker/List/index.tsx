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
        <div className="">
          <div className="">ລາຍງານລົດທີ່ລ່ວງລະເມີດ</div>
          <div className="">
            <Filter onFilter={handleFilter} />
          </div>
          {/* <div className="flex flex-col"> */}
            {/* <div className="-m-1.5 overflow-x-auto"> */}
              {/* <div className="p-1.5 min-w-full inline-block align-middle"> */}
                <div className="">
                  <table className="">
                    <thead className="">
                      {getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                          {headerGroup.headers.map((header) => (
                            <th
                              key={header.id}
                              scope="col"
                              className=""
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
                    <tbody className="">
                      {getRowModel().rows.map((row) => (
                        <tr key={row.id} className="">
                          {row.getVisibleCells().map((cell) => (
                            <td
                              key={cell.id}
                              className=""
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
                  <div className="">
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
