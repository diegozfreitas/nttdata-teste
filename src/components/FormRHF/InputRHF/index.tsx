import React from "react";
import { Control, Controller } from "react-hook-form";

import { InputText, InputTextProps } from "../../Form/Inputs/InputText";

interface InputRHFProps extends InputTextProps {
  control: Control<any>;
  name: string;
}

export const InputRHF = ({ control, name, ...rest }: InputRHFProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <InputText {...rest} {...field} />}
    />
  );
};
