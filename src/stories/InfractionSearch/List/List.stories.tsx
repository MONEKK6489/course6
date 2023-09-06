import { InfractionSearchShow } from "@components/InfractionSearch";
import { RefineWithoutLayout } from "../../../../.storybook/RefineWithoutLayout";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InfractionSearchShow> = {
  title: "InfractionSearch/InfractionSearchShow",
  component: InfractionSearchShow,
  render: (args, { loaded: {} }) => (
    <InfractionSearchShow mockData={mockData} />
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
type Story = StoryObj<typeof InfractionSearchShow>;

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
