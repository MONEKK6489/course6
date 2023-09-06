

import { Landing } from "@components/Landing";
import { RefineWithoutLayout } from "../../../.storybook/RefineWithoutLayout";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Landing> = {
  title: "Landing/Landing",
  component: Landing,
  render: (args, { loaded: {} }) => (
    <Landing mockData={mockData} />
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
type Story = StoryObj<typeof Landing>;

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
