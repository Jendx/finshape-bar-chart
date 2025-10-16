import React, { useMemo } from "react";
import type { BarChartProps } from "./editor";
import type { Element } from '@alfons-app/pdk';
import { View, Text } from "react-native";
import { BarChart } from 'react-native-gifted-charts';

const BarChartPlugin: Element<BarChartProps> = ({ axis, inputData }: BarChartProps) => {
  if (!inputData || inputData.length === 0) {
    return <View><h2>No Data</h2></View>
  }

  const maxValue = inputData.length > 0
  ? Math.max(...inputData.map((d) => Number.isFinite(d.value) ? d.value : 0))
  : 0;
  
  const formattedData = inputData.map(data => ({
    label: data.label,
    value: data.value,
    frontColor: data.style?.frontColor
  }));

  return (
    <View style={{ flexDirection: 'column', alignItems: 'baseline' }}>
      { axis.axisY && <Text>
        { axis.axisY }
      </Text>}

      <View style={{ flex: 1 }}>
        <BarChart
          width={inputData.length * 100}
          data={formattedData}
          barWidth={20}
          spacing={20}
          maxValue={maxValue + 200}
          yAxisLabelPrefix={axis.axisYPrefix}
          yAxisTextStyle={{ fontSize: 12, color: '#666', overflow: "visible", paddingRight: String(maxValue).length * 12 }}
          xAxisLabelTextStyle={{ fontSize: 12, color: '#666' }}
          initialSpacing={0}
          noOfSections={5}
          height={200}
        />

        { axis.axisX && <Text style={{ marginTop: 8, textAlign: 'right' }}>
          { axis.axisX }
        </Text>}
      </View>
    </View>
  );
}

export default BarChartPlugin;
