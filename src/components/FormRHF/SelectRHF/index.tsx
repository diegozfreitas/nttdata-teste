import React from "react";
import { Control, Controller } from "react-hook-form";

import { Select } from "../../Form/Select";
import { SelectProps } from "../../Form/Select/types";

interface SelectRHFProps extends SelectProps {
  control: Control<any>;
  name: string;
}

export const SelectRHF = ({ control, name, ...rest }: SelectRHFProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <Select {...rest} {...field} />}
    />
  );
};
