import React, { useState } from "react";
import { InfractionSearchList } from "../List";
export const InfractionSearchPage: React.FC<any> = ({}) => {
  return (
    <>
      <section id="InfractionSearch">
        <InfractionSearchList />
      </section>
    </>
  );
};
