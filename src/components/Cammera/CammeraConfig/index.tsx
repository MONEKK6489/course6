import React from "react";
import { useForm } from "@refinedev/react-hook-form";
import { GiCctvCamera } from "react-icons/gi";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

interface ICammeraConfig {
  handleShowCamera: (camera: number) => void;
}

export const CammeraConfig: React.FC<ICammeraConfig> = ({
  handleShowCamera,
}) => {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const handleFormSubmit = async (formData: any) => {
    handleShowCamera(formData);
  };

  return (
    <>
      <div className="">
        <div className="" id="hs-basic-heading-two">
          <button
            className=""
            aria-controls="hs-basic-collapse-two"
          >
            ເລືອກຈໍນວນກ້ອງ
            <div className="">
              <GiCctvCamera />
            </div>
            <AiOutlineArrowUp className="" />
            <AiOutlineArrowDown className="" />
          </button>
          <div
            id="hs-basic-collapse-two"
            className=""
            aria-labelledby="hs-basic-heading-two"
          >
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className=""
            >
              <div>
                <label
                  htmlFor="input-label"
                  className=""
                >
                </label>
                <input
                  type="number"
                  // {...register("column", { min: 1, max: 12 })}
                  {...register("column")}
                  id="input-label"
                  className=""
                />
              </div>
              <button className="">
                save
              </button>
            </form>
          </div>
        </div>

     
      </div>
    </>
  );
};
