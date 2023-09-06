import { InfractionSearchList } from "@components/InfractionSearch";
import { RefineWithoutLayout } from "../../../../.storybook/RefineWithoutLayout";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InfractionSearchList> = {
  title: "InfractionSearch/InfractionSearchList",
  component: InfractionSearchList,
  render: (args, { loaded: {} }) => (
    <InfractionSearchList mockData={mockData} />
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
type Story = StoryObj<typeof InfractionSearchList>;

export const show: Story = {
  loaders: [],
};

const mockData = [
  {
    imageOne: "/img_dev/ima1.jpg",
    imageTwo: "/img_dev/ima1.jpg",
    vehicle_registration_number: "ກກ 5951",
    brand: "BMW",
    vehicle_color: "red",
    vehicle_registration_color: "blue",
    province: "Vientiane",
    date: "2022-03-20",
  },
];
