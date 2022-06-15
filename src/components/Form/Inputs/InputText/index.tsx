import React, { useState, useEffect, useRef } from "react";

import { Container, Label, LabelError, Input, InputM } from "../style";

export interface InputTextProps {
  label: string;
  type?: string;
  onChange?: any;
  placeHolder?: string;
  value?: string;
  onBlur?: any;
  maxLength?: number;
  mask?: string;
  maskType?: "cpf" | "cnpj";
  error?: string;
  disabled?: boolean;
  ref?: any;
}

export const InputText: React.FC<InputTextProps> = ({
  placeHolder,
  type,
  label,
  error,
  disabled,
  value: valueProp,
  maxLength,
  mask,
  maskType,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (value !== valueProp) {
      setValue(valueProp ? valueProp : "");
    }
  }, [valueProp]);

  const handleOnChange = (e: any) => {
    setValue(e.target.value);
  };

  const maskTypes = [
    { type: "cnpj", value: "99.999.999/9999-99" },
    { type: "cpf", value: "999.999.999-99*" },
  ];

  return (
    <Container>
      <Label>{label}</Label>

      {mask || maskType ? (
        <InputM
          {...props}
          mask={
            mask
              ? mask
              : maskType
              ? maskTypes.find((item) => item.type === maskType)!.value
              : ""
          }
          value={value}
          maxLength={maxLength}
          type={type ? type : "text"}
          disabled={disabled}
          onInput={handleOnChange}
          onChange={onChange}
        />
      ) : (
        <Input
          {...props}
          value={value}
          maxLength={maxLength}
          type={type ? type : "text"}
          disabled={disabled}
          onInput={handleOnChange}
          onChange={onChange}
        />
      )}

      {error && <LabelError>{error}</LabelError>}
    </Container>
  );
};

InputText.defaultProps = {
  onChange: () => {},
};
