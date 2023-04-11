import React from "react";
import { Controller } from "react-hook-form";
import { ContentOptions } from "./style";

interface CheckboxOption {
  label: string;
  value: string;
}

interface Props {
  options: CheckboxOption[];
  singleSelect?: boolean;
  label: string;
  name: string;
  error?: any;
  control: any;
}

export const Radio: React.FC<Props> = ({
  name,
  control,
  options,
  singleSelect = false,
  label,
  error,
  ...rest
}) => {
  const isSingleSelect = singleSelect || options.length === 1;

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <span>{label}</span>
            <ContentOptions
              role="group"
              aria-labelledby={`${name}-label`}
              {...rest}
            >
              {options.map((option) => {
                const handleChange = () => {
                  if (isSingleSelect) {
                    onChange(option.value);
                  } else {
                    const values = Array.isArray(value) ? value : [value];
                    const index = values.indexOf(option.value);
                    if (index === -1) {
                      onChange([...values, option.value]);
                    } else {
                      values.splice(index, 1);
                      onChange(values);
                    }
                  }
                };

                return (
                  <div key={option.value}>
                    <label htmlFor={`${name}-${option.value}`}>
                      <input
                        type="checkbox"
                        id={`${name}-${option.value}`}
                        name={name}
                        value={option.value}
                        checked={
                          isSingleSelect
                            ? value === option.value
                            : Array.isArray(value) &&
                              value.includes(option.value)
                        }
                        onChange={handleChange}
                        onBlur={onBlur}
                      />
                      {option.label}
                    </label>
                  </div>
                );
              })}
            </ContentOptions>
          </>
        )}
      />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </>
  );
};
