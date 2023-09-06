import React, { useState, type ReactNode } from "react";

interface INavbar {
  children: ReactNode;
}
export const Navbar: React.FC<INavbar> = ({ children }) => {
  const [active, setActive] = useState("home");

  const handleLinkClick = (section: string) => {
    setActive(section);
  };

  return (
    <>
      <div >
        <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full border-b text-sm py-2.5 sm:py-4  bg-gray-900 border-gray-700">
          <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0 border-b  border-gray-600">
            <div className="flex flex-wrap items-center justify-center mx-auto p-4">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white bg-gray-800 md:bg-gray-900 border-gray-700">
                <li>
                  <a
                    href="#home"
                    className={`block py-2 pl-3 pr-4 bg-slate-800 text-gray-200 rounded hover:bg-slate-700  ${
                      active === "home" ? "font-bold bg-gray-200 p-5" : ""
                    }`}
                    aria-current="page"
                    onClick={() => handleLinkClick("home")}
                  >
                    ໜ້າຫຼັກ
                  </a>
                </li>
                <li>
                  <a
                    href="#InfractionTracker"
                    className={`block py-2 pl-3 pr-4 rounded text-gray-200 hover:bg-slate-700 ${
                      active === "InfractionTracker"
                        ? "font-bold bg-slate-700 p-5"
                        : ""
                    }`}
                    onClick={() => handleLinkClick("InfractionTracker")}
                  >
                    ລາຍງຍລົດທີ່ລ່ວງລະເມີດ
                  </a>
                </li>
                <li>
                  <a
                    href="#InfractionSearch"
                    className={`block py-2 pl-3 pr-4 p-5 rounded text-gray-200 hover:bg-slate-700 ${
                      active === "InfractionSearch"
                        ? "font-bold bg-slate-700 "
                        : ""
                    }`}
                    onClick={() => handleLinkClick("InfractionSearch")}
                  >
                    ຄົ້ນຫາລົດທີ່ລ່ວງລະເມີດ
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main className="w-full  mt-5  ">
          <div className=" text-center text-4xl my-10 text-white">Video Traffic Analytic</div>
          <header className=" space-y-10 mb-10">{children}</header>
        </main>
      </div>
    </>
  );
};
