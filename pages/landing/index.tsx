import { CameraView } from "@components/Cammera/CameraView";
import { Navbar } from "@components/Nav";
import { Container } from "@src/components/lib/container";
import { InfractionTrackerPage } from "@components/InfractionTracker/InfractionTrackerPage";
import { InfractionSearchPage } from "@components/InfractionSearch/InfractionSearchPage";
import React from "react";
import { type GetServerSideProps } from "next";
import { CammeraPage } from "@components/Cammera/CammeraPage";
interface LandingPageProps {}

const Landing: React.FC<LandingPageProps> = ({}) => {
  return (
    <div className="">
      <Navbar>
        <CammeraPage />
        <InfractionTrackerPage />
        <InfractionSearchPage />
      </Navbar>
    </div>
  );
};

export default Landing;
export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  try {
    return {
      props: {},
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};
