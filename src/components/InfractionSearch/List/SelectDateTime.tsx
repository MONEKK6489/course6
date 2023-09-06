import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import { useForm } from "@refinedev/react-hook-form";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import Moment from "moment";

export const SelectDateTime: React.FC = () => {
  const {
    refineCore: { onFinish, formLoading },
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    refineCoreProps: {},
  });
  return (
    <>
      <form className="" onSubmit={handleSubmit(onFinish)}>
        <div className="">
        <div>ຄົນຫາຕາມວັນທີ</div>
          <Controller
            control={control}
            name="start_date"
            render={({ field }) => (
              <Datetime
                onChange={(date) => {
                  const formattedDate = Moment(date).format("YYYY-MM-DDTHH:mm");
                  field.onChange(formattedDate);
                }}
                renderInput={(props) => (
                  <input
                    {...props}
                    className=""
                  />
                )}
                initialValue={Moment(field.value)}
                dateFormat="DD-MM-YYYY"
              />
            )}
          />
        </div>
      </form>
    </>
  );
};
