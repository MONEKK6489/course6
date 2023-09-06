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
      <div className="hs-accordion-group w-96">
        <div className="hs-accordion" id="hs-basic-heading-two">
          <button
            className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 px-6  items-center  justify-center bg-gray-200 w-full h-10 rounded-lg flex"
            aria-controls="hs-basic-collapse-two"
          >
            ເລືອກຈໍນວນກ້ອງ
            <div className=" text-2xl mx-5">
              <GiCctvCamera />
            </div>
            <AiOutlineArrowUp className="hs-accordion-active:block hidden text-2xl mx-5 " />
            <AiOutlineArrowDown className="hs-accordion-active:hidden text-2xl mx-5 " />
          </button>
          <div
            id="hs-basic-collapse-two"
            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 bg-gray-200 mt-2 rounded-lg"
            aria-labelledby="hs-basic-heading-two"
          >
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="pb-4 px-6"
            >
              <div>
                <label
                  htmlFor="input-label"
                  className="block text-lg font-medium mb-2 dark:text-white"
                >
                </label>
                <input
                  type="number"
                  // {...register("column", { min: 1, max: 12 })}
                  {...register("column")}
                  id="input-label"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-700 dark:border-gray-700 dark:text-gray-400"
                />
              </div>
              <button className="py-3 px-4 bg-blue-500 w-full mt-3 rounded-lg text-white text-lg">
                save
              </button>
            </form>
          </div>
        </div>

     
      </div>
    </>
  );
};
