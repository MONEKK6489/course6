
import { IVehicleData } from "@components/InfractionTracker/interface";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState, useEffect } from "react";
import { useOne } from "@refinedev/core";
import moment from "moment";

interface IInfractionTrackerShow {
  value: number | undefined;
}

export const InfractionSearchShow: React.FC<IInfractionTrackerShow> = ({
  value,
}) => {
  const { data: infraction_tracker_data } = useOne<IVehicleData>({
    resource: "infraction_tracker",
    id: value,
  });
  const showData = infraction_tracker_data?.data;

  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className=""
        >
          ເບີ່ງລາຍລະອຽດ
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="" />
          </Transition.Child>

          <div className="">
            <div className="">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className=""
                >
                  <div className="">
                    <div className="">
                      {value ? (
                        <div className="">
                          <div className="">
                            ລາຍລະອຽດ
                          </div>

                          <div className="">
                            <img
                              src={showData?.image_one}
                              alt=""
                              className=""
                            />
                            <img
                              src={showData?.image_two}
                              alt=""
                              className=""
                            />
                            <div className="">
                              <div className="p-1">
                                ປ້າຍລົດ: {showData?.vehicle_registration_number}
                              </div>
                              <div className="p-1">
                                {" "}
                                ຍີ້ຫໍ້ລົດ: {showData?.brand}
                              </div>
                              <div className="p-1">
                                ສີລົດ: {showData?.vehicle_color}
                              </div>
                              <div className="p-1">
                                ປະເພດສີປ້າຍ:{" "}
                                {showData?.vehicle_registration_color}
                              </div>
                              <div className="p-1">
                                ແຂວງ :{showData?.province}
                              </div>
                              <div className="p-1">
                                ເວລາລ່ວງລະເມີດ:
                                {moment(showData?.created_on).format("llll")}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="">
                      <button
                        type="button"
                        className=""
                        onClick={closeModal}
                      >
                        ຍົກເລີກ
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
