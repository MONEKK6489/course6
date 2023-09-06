import {CameraView}  from "@components/Cammera/CameraView";
import { RefineWithoutLayout } from "../../../../.storybook/RefineWithoutLayout";
import { FC } from "react";

export const BasicShow: typeof CameraView = (args) => <CameraView />;

export default {
  title: "Cammera/CameraView",
  component: CameraView,
  parameters: {
    nextjs: {
      router: {
        basePath: "/Cammera",
      },
    },
  },

  argTypes: {
    title: {
      type: "string",
    },
  },
  
  decorators: [(Story: FC) => RefineWithoutLayout(Story)],
};
