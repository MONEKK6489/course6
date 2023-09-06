import React, { useState } from "react";
import { InfractionTrackerList } from "../List";

export const InfractionTrackerPage: React.FC<any> = ({}) => {
  return (
    <>
      <section id="InfractionTracker">
        <div className="">
          <InfractionTrackerList />
        </div>
      </section>
    </>
  );
};
