interface TypesUnusual {
  color?: string;
  background?: string;
  disabled?: boolean;
}

export interface ISelect {
  label: string;
  value: number | string;
}

export interface SelectProps extends TypesUnusual {
  data: ISelect[];
  onChange?: any;
  value?: string;
  label: string;
  error?: string | boolean;
}

export interface TypesThisStyleComp extends TypesUnusual {
  error?: string | boolean;
  value?: string | number;
  disabled?: boolean;
}
