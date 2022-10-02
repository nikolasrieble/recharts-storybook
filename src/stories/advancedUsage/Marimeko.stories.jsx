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

const Template = ({ data, xAxisKey, dataKey, stackId }) => {
  return (
    <div style={{ width: 1000, height: 400 }}>
      <ResponsiveContainer>
        <BarChart barGap={1} barCategoryGap={1} data={data}>
          <XAxis dataKey={xAxisKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={xAxisKey} stackId={stackId} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Gender | Survived | 1st Class|	2nd Class| 	3rd Class|	Crew
// Male  	| No	     | 118      |	154      | 	422      |	670
//        | Yes	     | 62       |	25       | 	88       |	192
// Female	| No	     | 4        |	13       | 	106      |	3
//        | Yes      | 141      |	93       | 	90       |	20
const data = [
  { gender: "male", class: 1, survived: true, count: 62 },
  { gender: "male", class: 1, survived: false, count: 118 },
  { gender: "male", class: 2, survived: true, count: 25 },
  { gender: "male", class: 2, survived: false, count: 154 },
  { gender: "male", class: 3, survived: true, count: 88 },
  { gender: "male", class: 3, survived: false, count: 422 },
  { gender: "male", class: 4, survived: true, count: 192 },
  { gender: "male", class: 4, survived: false, count: 670 },
  { gender: "female", class: 1, survived: true, count: 141 },
  { gender: "female", class: 1, survived: false, count: 4 },
  { gender: "female", class: 2, survived: true, count: 93 },
  { gender: "female", class: 2, survived: false, count: 13 },
  { gender: "female", class: 3, survived: true, count: 90 },
  { gender: "female", class: 3, survived: false, count: 106 },
  { gender: "female", class: 4, survived: true, count: 20 },
  { gender: "female", class: 4, survived: false, count: 3 },
];

export const SimpleStory = Template.bind({});
SimpleStory.args = {
  data,
  xAxisKey: "class",
  dataKey: "count",
  stackId: "gender",
};
