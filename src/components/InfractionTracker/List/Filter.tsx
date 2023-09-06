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
      <form className="" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="">
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
                    className=""
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
            className=""
          >
            ຄົ້ນຫາ
          </button>
        </div>
      </form>
    </>
  );
};
