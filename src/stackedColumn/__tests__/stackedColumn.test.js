import React from 'react';
import { mount } from 'enzyme';
import StackedColumn from '../';

// TODO: StackedColumn-spec
describe('StackedColumn  plot', () => {
  const data = [
    { year: '2006', type: 'redDeliciou', value: 10 },
    { year: '2006', type: 'mcintosh', value: 15 },
    { year: '2006', type: 'oranges', value: 9 },
    { year: '2006', type: 'pears', value: 6 },
    { year: '2007', type: 'redDeliciou', value: 12 },
    { year: '2007', type: 'mcintosh', value: 18 },
    { year: '2007', type: 'oranges', value: 9 },
    { year: '2007', type: 'pears', value: 4 },
    { year: '2008', type: 'redDeliciou', value: 5 },
    { year: '2008', type: 'mcintosh', value: 20 },
    { year: '2008', type: 'oranges', value: 8 },
    { year: '2008', type: 'pears', value: 2 },
    { year: '2009', type: 'redDeliciou', value: 1 },
    { year: '2009', type: 'mcintosh', value: 15 },
    { year: '2009', type: 'oranges', value: 5 },
    { year: '2009', type: 'pears', value: 4 },
    { year: '2010', type: 'redDeliciou', value: 2 },
    { year: '2010', type: 'mcintosh', value: 10 },
    { year: '2010', type: 'oranges', value: 4 },
    { year: '2010', type: 'pears', value: 2 },
    { year: '2011', type: 'redDeliciou', value: 3 },
    { year: '2011', type: 'mcintosh', value: 12 },
    { year: '2011', type: 'oranges', value: 6 },
    { year: '2011', type: 'pears', value: 3 },
    { year: '2012', type: 'redDeliciou', value: 4 },
    { year: '2012', type: 'mcintosh', value: 15 },
    { year: '2012', type: 'oranges', value: 8 },
    { year: '2012', type: 'pears', value: 1 },
    { year: '2013', type: 'redDeliciou', value: 6 },
    { year: '2013', type: 'mcintosh', value: 11 },
    { year: '2013', type: 'oranges', value: 9 },
    { year: '2013', type: 'pears', value: 4 },
    { year: '2014', type: 'redDeliciou', value: 10 },
    { year: '2014', type: 'mcintosh', value: 13 },
    { year: '2014', type: 'oranges', value: 9 },
    { year: '2014', type: 'pears', value: 5 },
  ];

  it('初始化以及销毁', () => {
    const config = {
      forceFit: true,
      title: { visible: true, text: '联通区域组件交互' },
      description: {
        visible: true,
        text:
          '联通区域组件可以经由交互触发。通过triggerOn配置项设置联通区域组件的触发事件。一次只显示一个堆叠字段的联通区域。',
      },
      padding: 'auto',
      data,
      xField: 'year',
      yField: 'value',
      yAxis: { min: 0 },
      label: { visible: false },
      stackField: 'type',
      color: ['#ae331b', '#f27957', '#dadada', '#609db7', '#1a6179'],
      connectedArea: { visible: true, triggerOn: 'mouseenter' },
    };
    const ref = React.createRef();
    mount(<StackedColumn {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
