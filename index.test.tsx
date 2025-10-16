import React from 'react';
import { render } from '@testing-library/react-native';
import BarChartPlugin from './index';

describe('BarChartPlugin', () => {
  it('renders "No Data" when inputData is empty', () => {
    const { getByText } = render(
      <BarChartPlugin
        axis={{ axisX: 'X', axisY: 'Y', axisYPrefix: '$' }}
        inputData={[]}
        data-testid='dataTestId'
        testID='testId'
      />
    );

    expect(getByText('No Data')).toBeTruthy();
  });

  it('renders chart when inputData is provided', () => {
    const { queryByText, getByText } = render(
      <BarChartPlugin
        axis={{ axisX: 'X Axis', axisY: 'Y Axis', axisYPrefix: '$' }}
        inputData={[
          { label: 'Jan', value: 100 },
          { label: 'Feb', value: 200, style: { frontColor: '#ff0000' } },
        ]}
        data-testid='dataTestId'
        testID='testId'
      />
    );

    // No "No Data" message
    expect(queryByText('No Data')).toBeNull();

    // Renders axis labels and chart
    expect(getByText('Y Axis')).toBeTruthy();
    expect(getByText('X Axis')).toBeTruthy();
  });
});
