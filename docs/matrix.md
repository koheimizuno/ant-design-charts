---
title: Matrix
---

# Matrix Component

## Normal

```tsx
import React, { useState, useEffect } from 'react';
import { Matrix } from '@alipay/techui-charts';

const DemoMatrix: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/a719cd4e-bd40-4878-a4b4-df8a6b531dfe.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    data,
    forceFit: false,
    width: 800,
    height: 600,
    xField: 'Month of Year',
    yField: 'District',
    colorField: 'AQHI',
    shapeType: 'rect',
    color: ['#174c83', '#7eb6d4', '#efefeb', '#efa759', '#9b4d16'],
    meta: {
      'Month of Year': {
        type: 'cat',
      },
    },
  };
  return <Matrix {...config} />;
};

export default () => <DemoMatrix />;
```

## Change mode

```tsx
import React, { useRef } from 'react';
import { Matrix } from '@alipay/techui-charts';

const data = [
  { name: 'hot dog', value: 70, country: 'AD' },
  { name: 'burger', value: 54, country: 'AD' },
  { name: 'sandwich', value: 49, country: 'AD' },
  { name: 'kebab', value: 4, country: 'AD' },
  { name: 'fries', value: 11, country: 'AD' },
  { name: 'donut', value: 68, country: 'AD' },
  { name: 'junk', value: 49, country: 'AD' },
  { name: 'sushi', value: 47, country: 'AD' },
  { name: 'ramen', value: 64, country: 'AD' },
  { name: 'curry', value: 51, country: 'AD' },
  { name: 'udon', value: 6, country: 'AD' },
  { name: 'hot dog', value: 45, country: 'AE' },
  { name: 'burger', value: 97, country: 'AE' },
  { name: 'sandwich', value: 69, country: 'AE' },
  { name: 'kebab', value: 68, country: 'AE' },
  { name: 'fries', value: 14, country: 'AE' },
  { name: 'donut', value: 93, country: 'AE' },
  { name: 'junk', value: 0, country: 'AE' },
  { name: 'sushi', value: 84, country: 'AE' },
  { name: 'ramen', value: 57, country: 'AE' },
  { name: 'curry', value: 73, country: 'AE' },
  { name: 'udon', value: 73, country: 'AE' },
  { name: 'hot dog', value: 43, country: 'AF' },
  { name: 'burger', value: 61, country: 'AF' },
  { name: 'sandwich', value: 28, country: 'AF' },
  { name: 'kebab', value: 12, country: 'AF' },
  { name: 'fries', value: 22, country: 'AF' },
  { name: 'donut', value: 54, country: 'AF' },
  { name: 'junk', value: 90, country: 'AF' },
  { name: 'sushi', value: 24, country: 'AF' },
  { name: 'ramen', value: 72, country: 'AF' },
  { name: 'curry', value: 40, country: 'AF' },
  { name: 'udon', value: 78, country: 'AF' },
  { name: 'hot dog', value: 35, country: 'AG' },
  { name: 'burger', value: 6, country: 'AG' },
  { name: 'sandwich', value: 64, country: 'AG' },
  { name: 'kebab', value: 92, country: 'AG' },
  { name: 'fries', value: 45, country: 'AG' },
  { name: 'donut', value: 88, country: 'AG' },
  { name: 'junk', value: 44, country: 'AG' },
  { name: 'sushi', value: 16, country: 'AG' },
  { name: 'ramen', value: 0, country: 'AG' },
  { name: 'curry', value: 75, country: 'AG' },
  { name: 'udon', value: 57, country: 'AG' },
  { name: 'hot dog', value: 3, country: 'AI' },
  { name: 'burger', value: 6, country: 'AI' },
  { name: 'sandwich', value: 34, country: 'AI' },
  { name: 'kebab', value: 72, country: 'AI' },
  { name: 'fries', value: 21, country: 'AI' },
  { name: 'donut', value: 30, country: 'AI' },
  { name: 'junk', value: 99, country: 'AI' },
  { name: 'sushi', value: 40, country: 'AI' },
  { name: 'ramen', value: 1, country: 'AI' },
  { name: 'curry', value: 70, country: 'AI' },
  { name: 'udon', value: 58, country: 'AI' },
  { name: 'hot dog', value: 40, country: 'AL' },
  { name: 'burger', value: 90, country: 'AL' },
  { name: 'sandwich', value: 24, country: 'AL' },
  { name: 'kebab', value: 69, country: 'AL' },
  { name: 'fries', value: 97, country: 'AL' },
  { name: 'donut', value: 70, country: 'AL' },
  { name: 'junk', value: 49, country: 'AL' },
  { name: 'sushi', value: 90, country: 'AL' },
  { name: 'ramen', value: 92, country: 'AL' },
  { name: 'curry', value: 90, country: 'AL' },
  { name: 'udon', value: 65, country: 'AL' },
  { name: 'hot dog', value: 72, country: 'AM' },
  { name: 'burger', value: 47, country: 'AM' },
  { name: 'sandwich', value: 30, country: 'AM' },
  { name: 'kebab', value: 51, country: 'AM' },
  { name: 'fries', value: 23, country: 'AM' },
  { name: 'donut', value: 63, country: 'AM' },
  { name: 'junk', value: 30, country: 'AM' },
  { name: 'sushi', value: 43, country: 'AM' },
  { name: 'ramen', value: 8, country: 'AM' },
  { name: 'curry', value: 49, country: 'AM' },
  { name: 'udon', value: 61, country: 'AM' },
  { name: 'hot dog', value: 83, country: 'AO' },
  { name: 'burger', value: 6, country: 'AO' },
  { name: 'sandwich', value: 17, country: 'AO' },
  { name: 'kebab', value: 40, country: 'AO' },
  { name: 'fries', value: 61, country: 'AO' },
  { name: 'donut', value: 72, country: 'AO' },
  { name: 'junk', value: 61, country: 'AO' },
  { name: 'sushi', value: 50, country: 'AO' },
  { name: 'ramen', value: 77, country: 'AO' },
  { name: 'curry', value: 97, country: 'AO' },
  { name: 'udon', value: 17, country: 'AO' },
  { name: 'hot dog', value: 15, country: 'AQ' },
  { name: 'burger', value: 34, country: 'AQ' },
  { name: 'sandwich', value: 26, country: 'AQ' },
  { name: 'kebab', value: 80, country: 'AQ' },
  { name: 'fries', value: 100, country: 'AQ' },
  { name: 'donut', value: 97, country: 'AQ' },
  { name: 'junk', value: 34, country: 'AQ' },
  { name: 'sushi', value: 81, country: 'AQ' },
  { name: 'ramen', value: 25, country: 'AQ' },
  { name: 'curry', value: 100, country: 'AQ' },
  { name: 'udon', value: 56, country: 'AQ' },
];

// 正常业务代码不要存sessionStorage，这么用是father-doc的机制问题。
if (sessionStorage.getItem('time')) {
  clearInterval(sessionStorage.getItem('time'));
}

const chartRef = useRef(null);
const mode = ['circle', 'rect', 'value', 'circle'];
let i = 0;
const time = setInterval(() => {
  try {
    if (chartRef && chartRef.current) {
      if (mode[i] === 'value') {
        chartRef.current.mappingSize('value');
      }
      if (mode[i] === 'circle' || mode[i] === 'rect') {
        chartRef.current.changeShape(mode[i]);
      }
      if (i < mode.length - 1) {
        i += 1;
      } else {
        chartRef.current.disableMappingSize();
        i = 0;
      }
    }
  } catch (err) {
    console.error(err);
    clearInterval(time); // 正常应该是先判断并清除， demo中点击左侧导航
  }
}, 3000);

sessionStorage.setItem('time', time);

const config = {
  title: {
    visible: true,
    text: '热力图模式切换',
  },
  data,
  xField: 'name',
  yField: 'country',
  colorField: 'value',
  shapeType: 'circle',
  color: ['#0d5fbb', '#7eadfc', '#fd8b6f', '#aa3523'],
};
export default () => <Matrix chartRef={chartRef} {...config} />;
```

## Circle

```tsx
import React from 'react';
import { Matrix } from '@alipay/techui-charts';

const data = [
  { name: 'hot dog', value: 70, country: 'AD' },
  { name: 'burger', value: 54, country: 'AD' },
  { name: 'sandwich', value: 49, country: 'AD' },
  { name: 'kebab', value: 4, country: 'AD' },
  { name: 'fries', value: 11, country: 'AD' },
  { name: 'donut', value: 68, country: 'AD' },
  { name: 'junk', value: 49, country: 'AD' },
  { name: 'sushi', value: 47, country: 'AD' },
  { name: 'ramen', value: 64, country: 'AD' },
  { name: 'curry', value: 51, country: 'AD' },
  { name: 'udon', value: 6, country: 'AD' },
  { name: 'hot dog', value: 45, country: 'AE' },
  { name: 'burger', value: 97, country: 'AE' },
  { name: 'sandwich', value: 69, country: 'AE' },
  { name: 'kebab', value: 68, country: 'AE' },
  { name: 'fries', value: 14, country: 'AE' },
  { name: 'donut', value: 93, country: 'AE' },
  { name: 'junk', value: 0, country: 'AE' },
  { name: 'sushi', value: 84, country: 'AE' },
  { name: 'ramen', value: 57, country: 'AE' },
  { name: 'curry', value: 73, country: 'AE' },
  { name: 'udon', value: 73, country: 'AE' },
  { name: 'hot dog', value: 43, country: 'AF' },
  { name: 'burger', value: 61, country: 'AF' },
  { name: 'sandwich', value: 28, country: 'AF' },
  { name: 'kebab', value: 12, country: 'AF' },
  { name: 'fries', value: 22, country: 'AF' },
  { name: 'donut', value: 54, country: 'AF' },
  { name: 'junk', value: 90, country: 'AF' },
  { name: 'sushi', value: 24, country: 'AF' },
  { name: 'ramen', value: 72, country: 'AF' },
  { name: 'curry', value: 40, country: 'AF' },
  { name: 'udon', value: 78, country: 'AF' },
  { name: 'hot dog', value: 35, country: 'AG' },
  { name: 'burger', value: 6, country: 'AG' },
  { name: 'sandwich', value: 64, country: 'AG' },
  { name: 'kebab', value: 92, country: 'AG' },
  { name: 'fries', value: 45, country: 'AG' },
  { name: 'donut', value: 88, country: 'AG' },
  { name: 'junk', value: 44, country: 'AG' },
  { name: 'sushi', value: 16, country: 'AG' },
  { name: 'ramen', value: 0, country: 'AG' },
  { name: 'curry', value: 75, country: 'AG' },
  { name: 'udon', value: 57, country: 'AG' },
  { name: 'hot dog', value: 3, country: 'AI' },
  { name: 'burger', value: 6, country: 'AI' },
  { name: 'sandwich', value: 34, country: 'AI' },
  { name: 'kebab', value: 72, country: 'AI' },
  { name: 'fries', value: 21, country: 'AI' },
  { name: 'donut', value: 30, country: 'AI' },
  { name: 'junk', value: 99, country: 'AI' },
  { name: 'sushi', value: 40, country: 'AI' },
  { name: 'ramen', value: 1, country: 'AI' },
  { name: 'curry', value: 70, country: 'AI' },
  { name: 'udon', value: 58, country: 'AI' },
  { name: 'hot dog', value: 40, country: 'AL' },
  { name: 'burger', value: 90, country: 'AL' },
  { name: 'sandwich', value: 24, country: 'AL' },
  { name: 'kebab', value: 69, country: 'AL' },
  { name: 'fries', value: 97, country: 'AL' },
  { name: 'donut', value: 70, country: 'AL' },
  { name: 'junk', value: 49, country: 'AL' },
  { name: 'sushi', value: 90, country: 'AL' },
  { name: 'ramen', value: 92, country: 'AL' },
  { name: 'curry', value: 90, country: 'AL' },
  { name: 'udon', value: 65, country: 'AL' },
  { name: 'hot dog', value: 72, country: 'AM' },
  { name: 'burger', value: 47, country: 'AM' },
  { name: 'sandwich', value: 30, country: 'AM' },
  { name: 'kebab', value: 51, country: 'AM' },
  { name: 'fries', value: 23, country: 'AM' },
  { name: 'donut', value: 63, country: 'AM' },
  { name: 'junk', value: 30, country: 'AM' },
  { name: 'sushi', value: 43, country: 'AM' },
  { name: 'ramen', value: 8, country: 'AM' },
  { name: 'curry', value: 49, country: 'AM' },
  { name: 'udon', value: 61, country: 'AM' },
  { name: 'hot dog', value: 83, country: 'AO' },
  { name: 'burger', value: 6, country: 'AO' },
  { name: 'sandwich', value: 17, country: 'AO' },
  { name: 'kebab', value: 40, country: 'AO' },
  { name: 'fries', value: 61, country: 'AO' },
  { name: 'donut', value: 72, country: 'AO' },
  { name: 'junk', value: 61, country: 'AO' },
  { name: 'sushi', value: 50, country: 'AO' },
  { name: 'ramen', value: 77, country: 'AO' },
  { name: 'curry', value: 97, country: 'AO' },
  { name: 'udon', value: 17, country: 'AO' },
  { name: 'hot dog', value: 15, country: 'AQ' },
  { name: 'burger', value: 34, country: 'AQ' },
  { name: 'sandwich', value: 26, country: 'AQ' },
  { name: 'kebab', value: 80, country: 'AQ' },
  { name: 'fries', value: 100, country: 'AQ' },
  { name: 'donut', value: 97, country: 'AQ' },
  { name: 'junk', value: 34, country: 'AQ' },
  { name: 'sushi', value: 81, country: 'AQ' },
  { name: 'ramen', value: 25, country: 'AQ' },
  { name: 'curry', value: 100, country: 'AQ' },
  { name: 'udon', value: 56, country: 'AQ' },
];

const config = {
  title: {
    visible: true,
    text: '指定色块热力图形状',
  },
  description: {
    visible: true,
    text: '色块热力图支持 rect 和 circle两种形状，通过shapeType配置项指定，默认为rect。',
  },
  data,
  xField: 'name',
  yField: 'country',
  colorField: 'value',
  shapeType: 'circle', //rect
  color: ['#0d5fbb', '#7eadfc', '#fd8b6f', '#aa3523'],
};
export default () => <Matrix {...config} />;
```

## Size

```tsx
import React from 'react';
import { Matrix } from '@alipay/techui-charts';

const data = [
  { name: 'hot dog', value: 70, country: 'AD' },
  { name: 'burger', value: 54, country: 'AD' },
  { name: 'sandwich', value: 49, country: 'AD' },
  { name: 'kebab', value: 4, country: 'AD' },
  { name: 'fries', value: 11, country: 'AD' },
  { name: 'donut', value: 68, country: 'AD' },
  { name: 'junk', value: 49, country: 'AD' },
  { name: 'sushi', value: 47, country: 'AD' },
  { name: 'ramen', value: 64, country: 'AD' },
  { name: 'curry', value: 51, country: 'AD' },
  { name: 'udon', value: 6, country: 'AD' },
  { name: 'hot dog', value: 45, country: 'AE' },
  { name: 'burger', value: 97, country: 'AE' },
  { name: 'sandwich', value: 69, country: 'AE' },
  { name: 'kebab', value: 68, country: 'AE' },
  { name: 'fries', value: 14, country: 'AE' },
  { name: 'donut', value: 93, country: 'AE' },
  { name: 'junk', value: 0, country: 'AE' },
  { name: 'sushi', value: 84, country: 'AE' },
  { name: 'ramen', value: 57, country: 'AE' },
  { name: 'curry', value: 73, country: 'AE' },
  { name: 'udon', value: 73, country: 'AE' },
  { name: 'hot dog', value: 43, country: 'AF' },
  { name: 'burger', value: 61, country: 'AF' },
  { name: 'sandwich', value: 28, country: 'AF' },
  { name: 'kebab', value: 12, country: 'AF' },
  { name: 'fries', value: 22, country: 'AF' },
  { name: 'donut', value: 54, country: 'AF' },
  { name: 'junk', value: 90, country: 'AF' },
  { name: 'sushi', value: 24, country: 'AF' },
  { name: 'ramen', value: 72, country: 'AF' },
  { name: 'curry', value: 40, country: 'AF' },
  { name: 'udon', value: 78, country: 'AF' },
  { name: 'hot dog', value: 35, country: 'AG' },
  { name: 'burger', value: 6, country: 'AG' },
  { name: 'sandwich', value: 64, country: 'AG' },
  { name: 'kebab', value: 92, country: 'AG' },
  { name: 'fries', value: 45, country: 'AG' },
  { name: 'donut', value: 88, country: 'AG' },
  { name: 'junk', value: 44, country: 'AG' },
  { name: 'sushi', value: 16, country: 'AG' },
  { name: 'ramen', value: 0, country: 'AG' },
  { name: 'curry', value: 75, country: 'AG' },
  { name: 'udon', value: 57, country: 'AG' },
  { name: 'hot dog', value: 3, country: 'AI' },
  { name: 'burger', value: 6, country: 'AI' },
  { name: 'sandwich', value: 34, country: 'AI' },
  { name: 'kebab', value: 72, country: 'AI' },
  { name: 'fries', value: 21, country: 'AI' },
  { name: 'donut', value: 30, country: 'AI' },
  { name: 'junk', value: 99, country: 'AI' },
  { name: 'sushi', value: 40, country: 'AI' },
  { name: 'ramen', value: 1, country: 'AI' },
  { name: 'curry', value: 70, country: 'AI' },
  { name: 'udon', value: 58, country: 'AI' },
  { name: 'hot dog', value: 40, country: 'AL' },
  { name: 'burger', value: 90, country: 'AL' },
  { name: 'sandwich', value: 24, country: 'AL' },
  { name: 'kebab', value: 69, country: 'AL' },
  { name: 'fries', value: 97, country: 'AL' },
  { name: 'donut', value: 70, country: 'AL' },
  { name: 'junk', value: 49, country: 'AL' },
  { name: 'sushi', value: 90, country: 'AL' },
  { name: 'ramen', value: 92, country: 'AL' },
  { name: 'curry', value: 90, country: 'AL' },
  { name: 'udon', value: 65, country: 'AL' },
  { name: 'hot dog', value: 72, country: 'AM' },
  { name: 'burger', value: 47, country: 'AM' },
  { name: 'sandwich', value: 30, country: 'AM' },
  { name: 'kebab', value: 51, country: 'AM' },
  { name: 'fries', value: 23, country: 'AM' },
  { name: 'donut', value: 63, country: 'AM' },
  { name: 'junk', value: 30, country: 'AM' },
  { name: 'sushi', value: 43, country: 'AM' },
  { name: 'ramen', value: 8, country: 'AM' },
  { name: 'curry', value: 49, country: 'AM' },
  { name: 'udon', value: 61, country: 'AM' },
  { name: 'hot dog', value: 83, country: 'AO' },
  { name: 'burger', value: 6, country: 'AO' },
  { name: 'sandwich', value: 17, country: 'AO' },
  { name: 'kebab', value: 40, country: 'AO' },
  { name: 'fries', value: 61, country: 'AO' },
  { name: 'donut', value: 72, country: 'AO' },
  { name: 'junk', value: 61, country: 'AO' },
  { name: 'sushi', value: 50, country: 'AO' },
  { name: 'ramen', value: 77, country: 'AO' },
  { name: 'curry', value: 97, country: 'AO' },
  { name: 'udon', value: 17, country: 'AO' },
  { name: 'hot dog', value: 15, country: 'AQ' },
  { name: 'burger', value: 34, country: 'AQ' },
  { name: 'sandwich', value: 26, country: 'AQ' },
  { name: 'kebab', value: 80, country: 'AQ' },
  { name: 'fries', value: 100, country: 'AQ' },
  { name: 'donut', value: 97, country: 'AQ' },
  { name: 'junk', value: 34, country: 'AQ' },
  { name: 'sushi', value: 81, country: 'AQ' },
  { name: 'ramen', value: 25, country: 'AQ' },
  { name: 'curry', value: 100, country: 'AQ' },
  { name: 'udon', value: 56, country: 'AQ' },
];

const config = {
  title: {
    visible: true,
    text: '热力图形状大小映射',
  },
  data,
  xField: 'name',
  yField: 'country',
  colorField: 'value',
  sizeField: 'value',
  //size: [10,40],
  color: ['#dddddd', '#9ec8e0', '#5fa4cd', '#2e7ab6', '#114d90'],
};
export default () => <Matrix {...config} />;
```
