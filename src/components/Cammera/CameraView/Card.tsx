import React, { useRef, useEffect } from "react";
import { SelectCamera } from "./select";
import Webcam from "react-webcam";

import { twMerge } from "tailwind-merge";
interface ICameraView {
  camera: any;
}

export const CameraView: React.FC<ICameraView> = ({ camera }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    async function getCameraStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    }
    getCameraStream();
  }, []); 

  return (
    <>
      <section id="home">
        <div className="">
          <div className="">
            <SelectCamera />
            <Webcam />
          </div>
          <div className="">
            <SelectCamera />
            <Webcam />
          </div>

        </div>
      </section>
    </>
  );
};
