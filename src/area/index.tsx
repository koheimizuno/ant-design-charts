import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Area as G2plotArea, AreaConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface AreaConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotArea | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const AreaChart = forwardRef((props: AreaConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2plotArea, AreaConfig>(G2plotArea, rest);
  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);
  useImperativeHandle(ref, () => ({
    getChart: () => chart.current,
  }));
  return (
    <ErrorBoundary>
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

AreaChart.defaultProps = G2plotArea.getDefaultOptions();

export default AreaChart;
