import React from "react";
import { CameraView } from "@components/Cammera";
import {
  InfractionTrackerList,
  InfractionTrackerShow,
} from "@components/InfractionTracker";

import {
  InfractionSearchList,
  InfractionSearchShow,
} from "@components/InfractionSearch";

export const Landing: React.FC<any> = ({ mockData }) => {
  return (
    <>
      <div className="bg-gray-200/[.5] p-5">
        <CameraView />
        <div className="h-32"></div>
        <InfractionTrackerList mockData={mockData} />
        <InfractionTrackerShow mockData={mockData} />
        <InfractionSearchList  mockData={mockData} />
        <InfractionSearchShow mockData={mockData} />
      </div>
    </>
  );
};
