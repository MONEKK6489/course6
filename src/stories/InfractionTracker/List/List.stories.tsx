import { InfractionTrackerList } from "@components/InfractionTracker";
import { RefineWithoutLayout } from "../../../../.storybook/RefineWithoutLayout";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InfractionTrackerList> = {
  title: "InfractionTracker/InfractionTrackerList",
  component: InfractionTrackerList,
  render: (args, { loaded: {} }) => (
    <InfractionTrackerList mockData={mockData} />
  ),
  parameters: {
    nextjs: {
      router: {
        basePath: "/",
      },
    },
  },
  decorators: [(Story: React.FC) => RefineWithoutLayout(Story)],
};

export default meta;
type Story = StoryObj<typeof InfractionTrackerList>;

export const show: Story = {
  loaders: [],
};

const mockData = [
  {
    image: "",
    vehicle_registration_number: "ກກ 5951",
    brand: "BMW",
    vehicle_color: "red",
    vehicle_registration_color: "blue",
    province: "Vientiane",
    date: "2022-03-20",
  },
];
