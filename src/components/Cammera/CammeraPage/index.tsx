import React, { useRef, useEffect, useState } from "react";
import { CameraView } from "@components/Cammera";
import { CammeraConfig } from "@components/Cammera/CammeraConfig";
export const CammeraPage: React.FC = () => {
  const [camera, setCamera] = useState();
  const handleShowCamera = (camera: any) => {
    setCamera(camera)
  };
  return (
    <>
      <div className="w-3/4 mx-auto space-y-4">
        <CammeraConfig handleShowCamera={handleShowCamera} />
        <CameraView camera={camera}/>
      </div>
    </>
  );
};
