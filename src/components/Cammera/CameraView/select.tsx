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
        <h1 className="text-white">cammer</h1>
        <div className="relative mb-5 z-20">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg text-left focus:border-base sm:text-sm border-gray-900 border">
            <Combobox.Input
              className="w-full    py-2 pl-3 pr-10 text-sm "
              displayValue={(cammer: CameraType) => cammer?.name}
              onChange={(event) => {
                setQuery(event.target.value);
              }}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <div className="h-5 w-5 text-gray-400" aria-hidden="true">
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
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredCamera?.length === 0 && query !== "" ? (
                <div className=" relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredCamera?.map((cammer) => (
                  <Combobox.Option
                    key={cammer?.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "text-blue-500" : "text-gray-900"
                      }`
                    }
                    value={cammer}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {cammer?.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-blue-500"
                            }`}
                          >
                            <div className="h-5 w-5" aria-hidden="true">
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
