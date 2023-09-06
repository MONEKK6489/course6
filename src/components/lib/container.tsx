import React, { type ReactNode } from "react";

interface IContainer {
  children: ReactNode;
  isAdmin?: boolean;
}
export const Container: React.FC<IContainer> = ({ children }) => {
  return (
    <>
      <div className="space-y-5 p-5 ">{children}</div>
    </>
  );
};
