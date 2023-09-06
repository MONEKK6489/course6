import React from "react";
import Datetime from "react-datetime";
import moment from "moment";
import { useForm } from "@refinedev/react-hook-form";
import "react-datetime/css/react-datetime.css";
import { Controller } from "react-hook-form";

interface IFilter {
  onFilter: (startDate: string) => void;
}

export const Filter: React.FC<IFilter> = ({ onFilter }) => {
  const { handleSubmit, control } = useForm({});

  const handleFormSubmit = async (formData: any) => {
    onFilter(formData);
  };

  return (
    <>
      <form className=" w-72  z-10" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className=" w-full relative flex rounded-md shadow-sm border">
          <Controller
            control={control}
            name="created_on"
            render={({ field }) => (
              <Datetime
                onChange={(date) => {
                  const formattedDate = moment(date).format("YYYY-MM-DD");
                  field.onChange(formattedDate);
                }}
                renderInput={(props) => (
                  <input
                    {...props}
                    className="py-3 px-4 pl-11 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 bg-slate-900 text-gray-400"
                  />
                )}
                initialValue={moment(field.value)}
                dateFormat="DD-MM-YYYY"
                timeFormat=""
              />
            )}
          />
          <button
            type="submit"
            className="py-3  px-5 inline-flex flex-shrink-0 justify-center items-center rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
          >
            ຄົ້ນຫາ
          </button>
        </div>
      </form>
    </>
  );
};
