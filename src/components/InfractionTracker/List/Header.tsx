import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import { IVehicleData } from "@components/InfractionTracker/interface";
import { HiOutlineEye } from "react-icons/hi";
import {InfractionSearchShow} from "@components/InfractionTracker/Show"
interface TableColumnsProps {
  edit: (arg1: string, arg2: string) => void;
  show: (arg1: string, arg2: string) => void;

}

export const Header = ({

}: TableColumnsProps): ColumnDef<IVehicleData>[] => {
  return [
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
      id: "image_one",
      header: "ຮູບພາບທີ 1",
      accessorKey: "image_one",
      cell: function render({ getValue, table }) {
        const image = getValue() as string;
        return (
          <div>
            <img
              src={image}
              alt="bill"
              className=""
            />
          </div>
        );
      },
    },
    {
      id: "image_two",
      header: "ຮູບພາບທີ 2",
      accessorKey: "image_two",
      cell: function render({ getValue, table }) {
        const image = getValue() as string;
        return (
          <div>
            <img
              src={image}
              alt="bill"
              className=""
            />
          </div>
        );
      },
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
      id: "created_on",
      accessorKey: "created_on",
      header: "ເວລາລ່ວງລະເມີດ",
      cell: function render({ getValue }) {
        const date = getValue() as string;
        return (
          <div className="text-lg text-center">
            {moment(date).format("llll")}
          </div>
        );
      },
    },
    {
      id: "actions",
      accessorKey: "id",
      header: "ແກ້ໄຂ",
      cell: function render({ getValue }) {
        const value = getValue() as number | undefined;
        return (
          <div className="text-lg text-center">
          <InfractionSearchShow value={value} />
          </div>
        );
      },
    },
  ];
};
