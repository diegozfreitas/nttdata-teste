import React from "react";
import { Controller } from "react-hook-form";
import { InputM, Input as InputDefault } from "./style";

interface InputProps {
  name: string;
  label?: string;
  type?: "text" | "number" | "password";
  placeholder?: string;
  control: any;
  error?: any;
  mask?: string;
  maskType?: string;
}

const maskTypes = [
  { type: "cnpj", value: "99.999.999/9999-99" },
  { type: "cpf", value: "999.999.999-99*" },
];

export const Input: React.FC<InputProps> = ({
  name,
  label,
  type = "text",
  placeholder,
  control,
  mask,
  maskType,
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
            {mask || maskType ? (
              <InputM
                mask={
                  mask
                    ? mask
                    : maskType
                    ? maskTypes.find((item) => item.type === maskType)!.value
                    : ""
                }
                type={type ? type : "text"}
                {...field}
              />
            ) : (
              <InputDefault {...field} placeholder={placeholder} />
            )}
          </div>
        )}
      />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </>
  );
};
