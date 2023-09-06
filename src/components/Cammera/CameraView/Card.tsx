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
        <div className="grid grid-cols-1 sm:grid-cols-2 shadow-md  px-8 pt-6 pb-8 mb-4 my-2 bg-slate-800 rounded-xl">
          <div className="justify-center mx-auto rounded-lg p-2">
            <SelectCamera />
            <Webcam />
          </div>
          <div className="justify-center mx-auto rounded-lg p-2">
            <SelectCamera />
            <Webcam />
          </div>
          {/* <div className="justify-center  mx-auto ">
            <SelectCamera />
            <Webcam />
          </div>
          <div className="justify-center  mx-auto ">
            <SelectCamera />
            <Webcam />
          </div>
          <div>
            <h1> Camera Stream</h1>
            <video ref={videoRef} autoPlay playsInline />
          </div> */}
        </div>
      </section>
    </>
  );
};
