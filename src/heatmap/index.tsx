import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Heatmap as G2plotHeatmap, HeatmapConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface HeatmapConfig extends Omit<G2plotProps, 'tooltip'> {
  chartRef?: React.MutableRefObject<G2plotHeatmap | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const HeatmapChart = forwardRef((props: HeatmapConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotHeatmap, HeatmapConfig>(G2plotHeatmap, rest);

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
HeatmapChart.defaultProps = G2plotHeatmap.getDefaultOptions();

export default HeatmapChart;
