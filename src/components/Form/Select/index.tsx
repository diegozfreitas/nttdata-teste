import { useEffect, useState } from "react";
import {
  Container,
  Content,
  Input,
  Label,
  LabelError,
  Selected,
  ContentIcon,
  Icon,
  ContentOption,
  Option,
} from "./style";

import { SelectProps, ISelect } from "./types";

export const Select = (props: SelectProps) => {
  const { data, value, label, error, background, onChange, disabled } = props;

  const [selected, setSelected] = useState<ISelect>({
    label: "",
    value: "",
  } as ISelect);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    if (!value) return;

    const findData = data.find((item) => item.value === value);

    if (findData !== undefined) {
      setSelected(findData);
      return;
    }
  }, [value, data]); //eslint-disable-line

  const handleSelect = (item: ISelect) => {
    setSelected(item);
    onChange(item);
    setShowOptions(false);
  };

  return (
    <Container background={background}>
      <Label error={error}>{label}</Label>

      <Content
        onClick={() => (disabled ? false : setShowOptions(!showOptions))}
        error={error}
        disabled={disabled}
      >
        <Selected>
          <Input
            type="text"
            value={selected.value !== "" ? selected.label : "Selecione"}
            onFocus={() => (disabled ? false : setShowOptions(!showOptions))}
            onClick={() => (disabled ? false : setShowOptions(!showOptions))}
            disabled={disabled}
          />
        </Selected>

        <ContentIcon error={error} disabled={disabled}>
          <Icon error={error} disabled={disabled} />
        </ContentIcon>
      </Content>

      {error && !showOptions && <LabelError>{error}</LabelError>}

      {showOptions && (
        <ContentOption>
          {data?.map((item, key) => (
            <Option
              key={key}
              value={item.value}
              onClick={() => handleSelect(item)}
            >
              {item.label}
            </Option>
          ))}
        </ContentOption>
      )}
    </Container>
  );
};
