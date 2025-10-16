import React, { useMemo } from "react";
import type { BarChartProps } from "./editor";
import type { Element } from '@alfons-app/pdk';
import { View, Text } from "react-native";
import { BarChart } from 'react-native-gifted-charts';

const BarChartPlugin: Element<BarChartProps> = ({ axis, inputData }: BarChartProps) => {
  if (!inputData || inputData.length === 0) {
    return <View><h2>No Data</h2></View>
  }
  
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      { axis.axisY && <Text>
        { axis.axisY }
      </Text>}

      <View style={{ flex: 1 }}>
        <BarChart
          data={inputData.map(data => ({ label: data.label, value: data.value, frontColor: data.style?.frontColor}))}
          barWidth={20}
          spacing={20}
          maxValue={10000}
          yAxisLabelPrefix={axis.axisYPrefix}
          yAxisTextStyle={{ fontSize: 12, color: '#666' }}
          xAxisLabelTextStyle={{ fontSize: 12, color: '#666' }}
          showLine
          initialSpacing={0}
          noOfSections={5}
          height={200}
        />

        { axis.axisX && <Text style={{ marginTop: 8, textAlign: 'center' }}>
          { axis.axisX }
        </Text>}
      </View>
    </View>
  );
}

export default BarChartPlugin;
