import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowDownUp } from "react-icons/bs";

interface CameraType {
  id: number;
  name: string;
}

const cammer: CameraType[] = [
  { id: 1, name: "Cammer 1" },
  { id: 2, name: "Cammer 2" },
];

export const SelectCamera = (props: any) => {
  const { register, handleCameraChange } = props ?? [];
  const [selected, setSelected] = useState<CameraType>(cammer?.[0]);
  const [query, setQuery] = useState<string>("");

  const filteredCamera =
    query === ""
      ? cammer
      : cammer?.filter((cammer) =>
          cammer?.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <>
      <Combobox
        value={selected}
        onChange={(selectedItem) => {
          setSelected(selectedItem);
        }}
      >
        <h1 className="">cammer</h1>
        <div className="">
          <div className="">
            <Combobox.Input
              className="w-full    py-2 pl-3 pr-10 text-sm "
              displayValue={(cammer: CameraType) => cammer?.name}
              onChange={(event) => {
                setQuery(event.target.value);
              }}
            />
            <Combobox.Button className="">
              <div className="" aria-hidden="true">
                <BsArrowDownUp />
              </div>
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => {
              setQuery("");
            }}
          >
            <Combobox.Options className="">
              {filteredCamera?.length === 0 && query !== "" ? (
                <div className="">
                  Nothing found.
                </div>
              ) : (
                filteredCamera?.map((cammer) => (
                  <Combobox.Option
                    key={cammer?.id}
                    className={({ active }) =>
                      `${
                        active ? "" : ""
                      }`
                    }
                    value={cammer}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`${
                            selected ? "" : ""
                          }`}
                        >
                          {cammer?.name}
                        </span>
                        {selected ? (
                          <span
                            className={`${
                              active ? "" : ""
                            }`}
                          >
                            <div className="" aria-hidden="true">
                              <AiFillCheckCircle />
                            </div>
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </>
  );
};
