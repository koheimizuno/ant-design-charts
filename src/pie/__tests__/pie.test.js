import React from 'react';
import { mount } from 'enzyme';
import Pie from '../';

// TODO: Pie-spec
describe('Pie  plot', () => {
  const data = [{"type":"分类一","value":27},{"type":"分类二","value":25},{"type":"分类三","value":18},{"type":"分类四","value":15},{"type":"分类五","value":10},{"type":"其它","value":5}];

  it('初始化以及销毁', () => {
    const config = {data,"forceFit":true,"title":{"visible":true,"text":"饼图-图形标签蜘蛛布局"},"description":{"visible":true,"text":"当把饼图label的类型设置为spider时，标签分为两组，在图表两侧拉线对齐显示。一般来说，蜘蛛布局的label更不容易相互遮挡。"},"radius":0.8,"angleField":"value","colorField":"type","label":{"visible":true,"type":"spider"}};
    const ref = React.createRef();
    mount(<Pie {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
