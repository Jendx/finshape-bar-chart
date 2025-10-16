import React, { useState, useEffect } from 'react';

const DebouncedInput = ({
  value,
  onChange,
  debounceTime = 1000,
  ...props
}: {
  value: string | number;
  onChange: (value: any) => void;
  debounceTime?: number;
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value); // keep in sync if value changes externally
  }, [value]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (localValue !== value) {
        onChange(localValue);
      }
    }, debounceTime);

    return () => clearTimeout(handler);
  }, [localValue]);

  return (
    <input
      {...props}
      value={localValue}
      onChange={(e) => {
        const val = props.type === 'number' ? Number(e.target.value) : e.target.value;
        setLocalValue(val);
      }}
    />
  );
}

export default DebouncedInput;