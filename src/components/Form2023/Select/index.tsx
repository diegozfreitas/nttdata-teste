import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { Input, CloseIcon, Label, ContentItems, Item } from "./style";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  name: string;
  label: string;
  options: Option[];
  placeholder?: string;
  control: any;
  error?: any;
}

export const Select: React.FC<SelectProps> = ({
  name,
  options,
  placeholder = "Selecione...",
  control,
  label,
  error,
}) => {
  const [data, setData] = useState<Option | any>([] as Option[]);
  const [selectedOption, setSelectedOption] = useState<Option | any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string | any>("");
  const [inputValue, setInputValue] = useState("");

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    setInputValue("");
    setSearchValue("");
    setIsOpen(false);
  };

  const handleClearSelection = () => {
    setSelectedOption(null);
    setSearchValue("");
    setInputValue("");
  };

  const filterOptions = (data: Option[]) => {
    if (!searchValue) {
      return data;
    }
    return data.filter((option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const filteredOptions = filterOptions(data);

  useEffect(() => {
    setData(options);
  }, [options]);

  useEffect(() => {
    const value = control?._fields[name]?._f?.value;

    if (value !== "" && data?.length !== 0) {
      setSearchValue(
        data?.find((item: any) => item.value.trim() === value.trim())?.label
      );
      setSelectedOption(
        data?.find((item: any) => item.value.trim() === value.trim())
      );
    }
  }, [control, data]);

  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={selectedOption ? selectedOption.value : ""}
        render={({ field }) => (
          <div>
            <Label>
              {label}
              {selectedOption && (
                <CloseIcon
                  style={{ cursor: "pointer" }}
                  onClick={handleClearSelection}
                >
                  limpar
                </CloseIcon>
              )}
            </Label>
            <div onClick={() => setIsOpen(true)}>
              {selectedOption ? (
                <>
                  <Input
                    onFocus={() => {
                      setIsOpen(true);
                      setSelectedOption(null);
                    }}
                    type="text"
                    value={selectedOption.label}
                  />
                </>
              ) : (
                <Input
                  onFocus={() => setIsOpen(true)}
                  type="text"
                  value={inputValue}
                  placeholder={placeholder ? placeholder : "Pesquisar..."}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                    setInputValue(e.target.value);
                  }}
                />
              )}
            </div>
            {isOpen && (
              <ContentItems className="options-container">
                {filteredOptions.map((option) => (
                  <Item
                    key={option.value}
                    onClick={() => {
                      handleSelectOption(option);
                      field.onChange(option.value);
                    }}
                  >
                    {selectedOption?.value === option.value
                      ? option.label
                      : option.label}
                  </Item>
                ))}
                {filteredOptions.length === 0 && (
                  <div className="no-results">Nenhum resultado encontrado</div>
                )}
              </ContentItems>
            )}
          </div>
        )}
      />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </>
  );
};
