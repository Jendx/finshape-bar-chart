import React from "react";
// import getSchema from './schema'
import { type PluginDefinition, createSchemaBuilder, zod } from "@alfons-app/pdk";
import { name } from "./package.json";
import { DataArea20Filled } from "@fluentui/react-icons";
import BarChartDataInputControl from "./BarChartDataInputValuesControl";
import getSchema from "./schema";

// It was not possible to move to new file => I did it "partially"
const $ = createSchemaBuilder(name);
export type customZod = typeof $

const Definition = {
  Icon: () => <DataArea20Filled />,
  controls: {BarChartDataInputControl},
  schema: getSchema($),
  shouldAllowChild: () => () => false,
} satisfies PluginDefinition;

export default Definition;

export type BarChartProps = zod.infer<typeof Definition.schema>;
