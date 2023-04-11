import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "./style";

interface InputProps {
  name: string;
  label?: string;
  type?: "text" | "number" | "password";
  placeholder?: string;
  control: any;
  error?: any;
}

export const InputNumber: React.FC<InputProps> = ({
  name,
  label,
  type = "text",
  placeholder,
  control,
  error,
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div>
            {label && <label htmlFor={name}>{label}</label>}
            <Input
              {...field}
              id={name}
              type={type}
              pattern="\d*"
              onInput={(e: any) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
              placeholder={placeholder}
            />
          </div>
        )}
      />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </>
  );
};
