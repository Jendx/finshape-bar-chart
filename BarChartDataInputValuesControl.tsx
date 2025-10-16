import React, { ChangeEvent } from 'react';
import { type AlfonsControl } from '@alfons-app/pdk';
import type { barDataItem } from 'react-native-gifted-charts';
import { useFieldArray, Controller } from 'react-hook-form';
import { Add20Filled, Delete20Filled } from '@fluentui/react-icons';
import { defaultColors } from './constants';
import DebouncedInput from './controls/DebounceInput'
import csTranslations from './locales/cs.json'
import enTranslations from './locales/en.json'

const BarChartValuesControl: AlfonsControl<barDataItem> = ({ fieldProps }) => {
  const { control, name } = fieldProps;
  const { fields, append, remove } = useFieldArray({ control, name });

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        {fields.map((field, index) => (
          <div key={field.id} className="flex flex-col gap-2">
            <Controller
              control={control}
              name={`${name}.${index}.label`}
              render={({ field }) => (
                <DebouncedInput
                  {...field}
                  placeholder="Label"
                />
              )}
            />
            <Controller
              control={control}
              name={`${name}.${index}.value`}
              render={({ field }) => (
                <DebouncedInput
                  {...field}
                  type="number"
                  placeholder="1234"
                />
              )}
            />
            <div className="flex flex-row gap-2">
              <Controller
                control={control}
                name={`${name}.${index}.style.frontColor`}
                render={({ field }) => (
                  <DebouncedInput
                    {...field}
                    type="color"
                    className="w-10 h-8 border rounded"
                  />
                )}
              />
              <button
                className="p-2 text-red-500 hover:bg-red-50"
                type="button"
                onClick={() => remove(index)}
              >
                <Delete20Filled />
                {/* useTranslations would be better */}
                {fieldProps.label?.includes(csTranslations.inputData) ? csTranslations.removeButton : enTranslations.removeButton }
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => append({ value: 0, label: 'text', color: defaultColors.barColor })}
      >
        <Add20Filled />
        {fieldProps.label?.includes(csTranslations.inputData) ? csTranslations.addItem : enTranslations.addItem }
      </button>
    </div>
  );
};

export default BarChartValuesControl;
