import React from "react";

import {
  Bar,
  BarChart,
  Tooltip,
  YAxis,
  Legend,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import docs from "./Marimeko.docs.mdx";

export default {
  title: "Advanced Usage/Marimeko",
  component: BarChart,
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const Template = ({ data, xAxisKey }) => {
  return (
    <div style={{ width: 1000, height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey={xAxisKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={xAxisKey} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const SimpleStory = Template.bind({});
SimpleStory.args = {
  data: [
    { a: 1, b: 2 },
    { a: 1, b: 2 },
    { a: 3, b: 2 },
  ],
  xAxisKey: "a",
};
