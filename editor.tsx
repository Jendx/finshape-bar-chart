import React from "react";
import getSchema from './schema'
import { type PluginDefinition, createSchemaBuilder, zod } from "@alfons-app/pdk";
import { name } from "./package.json";
import { ChartMultipleColor } from "@fluentui/react-icons";

// It was not possible to move to new file => I did it "partially"
const $ = createSchemaBuilder(name);

const Definition = {
  Icon: () => <ChartMultipleColor />,
  schema: getSchema($),
  shouldAllowChild: () => () => false,
} satisfies PluginDefinition;

export default Definition;

export type BarChartProps = zod.infer<typeof Definition.schema>;
