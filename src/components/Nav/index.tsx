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
        <header className="">
          <nav className="">
            <div className="">
              <ul className="">
                <li>
                  <a
                    href="#home"
                    className={` ${
                      active === "home" ? "" : ""
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
                    className={`${
                      active === "InfractionTracker"
                        ? ""
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
                    className={`${
                      active === "InfractionSearch"
                        ? ""
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
        <main className=" ">
          <div className="">Video Traffic Analytic</div>
          <header className="">{children}</header>
        </main>
      </div>
    </>
  );
};
