import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Area as G2plotArea, AreaOptions as G2plotProps } from 'g2plot-v2';
import useChart from '../hooks/useChart-v2';
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

// AreaChart.defaultProps = G2plotArea.getDefaultOptions();

export default AreaChart;
