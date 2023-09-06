import React, { useState, useEffect } from "react";
import { useNavigation, useList } from "@refinedev/core";
export interface IVehicleData {
  id: number;
  image_one: string;
  image_two: string;
  vehicle_registration_number: string;
  brand: string;
  vehicle_color: string;
  vehicle_registration_color: string;
  province: string;
  created_on: string;
}

export const CardDetail: React.FC<any> = ({ tracker_data }) => {


  return (
    <>
      <div className="">
        <div className=""> ລາຍລະອຽດ</div>
        <div className="">
          <div className=" p-2 ">
            ປ້າຍລົດ:
            {tracker_data
              ? tracker_data?.data?.[0]?.vehicle_registration_number
              : ""}
          </div>
          <div className=" p-2">
            ຍີ້ຫໍ້ລົດ: {tracker_data ? tracker_data?.data?.[0]?.brand : ""}
          </div>
          <div className=" p-2">
            ສີລົດ: {tracker_data ? tracker_data?.data?.[0]?.vehicle_color : ""}
          </div>
          <div className=" p-2">
            ປະເພດສີປ້າຍ:{" "}
            {tracker_data
              ? tracker_data?.data?.[0]?.vehicle_registration_color
              : ""}
          </div>
          <div className=" p-2">
            ແຂວງ: {tracker_data ? tracker_data?.data?.[0]?.province : ""}
          </div>
          <div className=" p-2">
            ຈໍານວນລ່ວງລະເມີດ: {tracker_data ? tracker_data?.total : ""} ຄັ້ງ
          </div>
        </div>
      </div>
    </>
  );
};
