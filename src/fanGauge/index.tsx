import React, { useContext, useEffect, useImperativeHandle, forwardRef } from 'react';
import { FanGauge as G2plotFanGauge, FanGaugeConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface FanGaugeConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotFanGauge | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const FanGaugeChart = forwardRef((props: FanGaugeConfig, ref) => {
  const config = useContext(ConfigContext);
  const { chartRef, chartStyle = {}, className, ...rest } = Object.assign(config, props);

  const { chart, container } = useChart<G2plotFanGauge, FanGaugeConfig>(G2plotFanGauge, rest);

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
      <div className={className} style={chartStyle} ref={container} />
    </ErrorBoundary>
  );
});

FanGaugeChart.defaultProps = G2plotFanGauge.getDefaultOptions();

export default FanGaugeChart;
