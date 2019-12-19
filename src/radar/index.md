---
title: Radar
---

# TechRadar Component

## Normal

```jsx
import React from 'react';
import TechRadar from './';

const data = [
  {
    item: 'Design',
    user: 'a',
    score: 70,
  },
  {
    item: 'Design',
    user: 'b',
    score: 30,
  },
  {
    item: 'Development',
    user: 'a',
    score: 60,
  },
  {
    item: 'Development',
    user: 'b',
    score: 70,
  },
  {
    item: 'Marketing',
    user: 'a',
    score: 60,
  },
  {
    item: 'Marketing',
    user: 'b',
    score: 50,
  },
  {
    item: 'Users',
    user: 'a',
    score: 40,
  },
  {
    item: 'Users',
    user: 'b',
    score: 50,
  },
  {
    item: 'Test',
    user: 'a',
    score: 60,
  },
  {
    item: 'Test',
    user: 'b',
    score: 70,
  },
  {
    item: 'Language',
    user: 'a',
    score: 70,
  },
  {
    item: 'Language',
    user: 'b',
    score: 50,
  },
  {
    item: 'Technology',
    user: 'a',
    score: 50,
  },
  {
    item: 'Technology',
    user: 'b',
    score: 40,
  },
  {
    item: 'Support',
    user: 'a',
    score: 30,
  },
  {
    item: 'Support',
    user: 'b',
    score: 40,
  },
  {
    item: 'Sales',
    user: 'a',
    score: 60,
  },
  {
    item: 'Sales',
    user: 'b',
    score: 40,
  },
  {
    item: 'UX',
    user: 'a',
    score: 50,
  },
  {
    item: 'UX',
    user: 'b',
    score: 60,
  },
];

const config = {
  title: {
    visible: true,
    text: '基础雷达图',
  },
  data,
  angleField: 'item',
  radiusField: 'score',
  seriesField: 'user',
  line: {
    visible: true,
  },
  onInit: chart => {
    console.log('canvas instance', chart);
  },
};
export default () => <TechRadar {...config} />;
```
