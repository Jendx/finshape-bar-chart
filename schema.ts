import { zod } from "@alfons-app/pdk";

/**
 * Returns complete inspector schema 
 * @returns 
 */
const getSchema = ($: typeof zod) => {
  const axisSchema = $.object({
    axisX: $.string().setupInspector({
        category: "axis",
        control: "Text",
        label: "titleAxisX" }),
    axisY: $.string().setupInspector({
        category: "Axis",
        control: "Text",
        label: "titleAxisX" })
  }).optional().default({ axisX: "x", axisY: "y"})

  return $.object({
    axisSchema: axisSchema,
    pepa: $.string().default("x").setupInspector({
        category: "axis",
        control: "Text",
        label: "titleAxisXxx" }),
  })
}

export default getSchema
