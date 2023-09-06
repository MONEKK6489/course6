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
      <div className="">
        <div className="">
          <Filter onFilter={handleFilter} />
          <CardDetail tracker_data={tracker_data} />
        </div>
        <div className="">
          <div className="">
            <div className="">ຄົ້ນຫາລົດທີ່ລ່ວງລະເມີດ</div>
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
                <tbody>
                  {getRowModel().rows.map((row) => (
                    <tr
                      key={row.id}
                      className=""
                    >
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
        </div>
      </div>
    </>
  );
};
