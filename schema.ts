import { zod } from "@alfons-app/pdk";
import { InspectorTabs } from "@alfons-app/pdk";

/**
 * Returns complete inspector schema 
 */
const getSchema = ($: typeof zod) => {
  const axisSchema = $.object({
    axisX: $.string().optional().setupInspector({
      category: "axis",
      control: "Text",
      label: "titleAxisX",
    }),
    axisY: $.string().optional().setupInspector({
      category: "axis",
      control: "Text",
      label: "titleAxisY",
    }),
    axisYPrefix: $.string().optional().setupInspector({
      category: "axis",
      control: "Text",
      label: "axisYPrefix",
    }),
  })
    .optional()
    .default({ axisX: "x", axisY: "y" });

  const barChartDataStylesSchema = $.object({
    frontColor: $.string().optional().setupInspector({
      control: "ColorPicker",
      tab: InspectorTabs.Style,
    }),
  }).optional();

  const dataSchema = $.object({
    value: $.number().finite().setupInspector({
      control: "Numeric",
      label: "value",
    }),
    label: $.string().setupInspector({
      control: "Text",
      label: "label",
    }),
    style: barChartDataStylesSchema.optional().describe(
      "Defines the style of this particular bar."
    ),
  });

  return $.object({
    axis: axisSchema,
    inputData: $.array(dataSchema)
      .default([])
      .setupInspector(
        {
          control: '@jendx/finshape-bar-chart:BarChartDataInputControl',
          tab: 'DataArea20Filled',
          category: 'Data',
          label: 'inputData'
        }
      ),
  });
};

export default getSchema;