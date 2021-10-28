import React, { useState, useEffect, useContext } from 'react';
import { get } from 'lodash';
import AppContext from '../../../../context';
import { FormWrapper } from '../../formWrapper';
import { ColorPicker, InputNumberFiled, InputFiled, SelectField } from './fields';
import { prefix } from './constants';

import './style.less';

export type MarkerCfg = {
  width?: number;
  height?: number;
  name?: string;
};
export interface IConfig {
  label?: string;
  attrs?: {
    line?: {
      fontSize?: number;
      fontFill?: string;
      strokeWidth?: number;
      sourceMarker?: MarkerCfg;
      targetMarker?: MarkerCfg;
      strokeDasharray?: number[];
    };
  };
}

export const ArrowConfig = {
  width: 12,
  height: 8,
  name: 'block',
};

export const DisableArrowConfig = {
  width: 0,
  height: 0,
  name: '',
};

const ArrowMaps = {
  target: {
    sourceMarker: DisableArrowConfig,
    targetMarker: ArrowConfig,
  },
  source: {
    sourceMarker: ArrowConfig,
    targetMarker: DisableArrowConfig,
  },
  all: {
    sourceMarker: ArrowConfig,
    targetMarker: ArrowConfig,
  },
};

const ArrowStrokeMaps = {
  solid: [0, 0],
  dash: [5, 5],
};

const EdgeComponent = (props) => {
  const { config, plugin = {} } = props;
  const { updateEdge } = plugin;
  const {
    theme: { EdgeConfig },
  } = useContext(AppContext) as any;

  const [edgeConfig, setEdgeConfig] = useState<IConfig>({
    ...EdgeConfig.normal,
    ...config,
  });

  useEffect(() => {
    setEdgeConfig({
      ...EdgeConfig.normal,
      ...config,
    });
  }, [config]);

  const getAttrs = (key: string, type = 'line') => {
    const { attrs = {} } = edgeConfig;
    return attrs[type]?.[key];
  };

  const getArrowValue = () => {
    const { attrs = {} } = edgeConfig;
    const { line = {} } = attrs;
    if (line.sourceMarker && line.targetMarker) {
      return 'all';
    }
    if (line.sourceMarker) {
      return 'source';
    }
    return 'target';
  };

  const getSrokeDashValue = () => {
    const { attrs = {} } = edgeConfig;
    const { line = {} } = attrs;
    return line.strokeDasharray ? 'dash' : 'solid';
  };

  const onEdgeConfigChange = (key: string, value: number | string | object, type: string = 'line') => {
    /** 全量更新，简化逻辑 */
    setEdgeConfig({
      ...edgeConfig,
      [key]: value,
      attrs: {
        ...edgeConfig.attrs,
        [type]: {
          ...edgeConfig.attrs?.[type],
          [key]: value,
        },
      },
    });
    updateEdge(
      {
        [key]: value,
      },
      type,
    );
  };

  return (
    <div className={`${prefix}-panel-body`}>
      <InputFiled
        label="标签"
        value={edgeConfig.label}
        onChange={(value) => {
          onEdgeConfigChange('label', value);
        }}
      />

      <div className={`${prefix}-edge-stroke-style`}>
        <SelectField
          label="箭头"
          value={getArrowValue()}
          options={[
            {
              label: '正向',
              value: 'target',
            },
            {
              label: '逆向',
              value: 'source',
            },
            {
              label: '双向',
              value: 'all',
            },
          ]}
          onChange={(value) => {
            /** 统一形式，简化判断逻辑 */
            const { sourceMarker, targetMarker } = ArrowMaps[value];
            onEdgeConfigChange('sourceMarker', sourceMarker, 'line');
            onEdgeConfigChange('targetMarker', targetMarker, 'line');
          }}
        />
        <SelectField
          label="线形"
          value={getSrokeDashValue()}
          options={[
            {
              label: '实线',
              value: 'solid',
            },
            {
              label: '虚线',
              value: 'dash',
            },
          ]}
          onChange={(value) => {
            onEdgeConfigChange('strokeDasharray', ArrowStrokeMaps[value], 'line');
          }}
        />
      </div>
      <div className={`${prefix}-edge-text-style`}>
        <ColorPicker
          label="边框颜色"
          value={getAttrs('stroke')}
          onChange={(value: string) => {
            onEdgeConfigChange('stroke', value, 'line');
          }}
        />
        <InputNumberFiled
          label="线宽"
          value={getAttrs('strokeWidth')}
          min={1}
          onChange={(value) => {
            onEdgeConfigChange('strokeWidth', value, 'line');
          }}
        />
      </div>
      <div className={`${prefix}-edge-text-style`}>
        <ColorPicker
          label="字色"
          value={getAttrs('fill', 'text') || '#000'}
          onChange={(value: string) => {
            onEdgeConfigChange('fill', value, 'text');
          }}
        />
        <InputNumberFiled
          label="字号"
          min={10}
          value={getAttrs('fontSize', 'text') || 12}
          onChange={(value) => {
            onEdgeConfigChange('fontSize', value, 'text');
          }}
        />
      </div>
    </div>
  );
};
export const EdgeService: React.FC<any> = (props) => {
  return (
    <FormWrapper {...props} type="edge">
      {(config, plugin) => <EdgeComponent {...props} plugin={plugin} config={config} />}
    </FormWrapper>
  );
};
