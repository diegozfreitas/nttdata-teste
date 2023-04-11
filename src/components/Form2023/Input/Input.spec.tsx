import { render } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { ThemeProvider } from "styled-components";

import { Input } from ".";
import light from "../../../global/styles/light";

const TestInput = () => {
  const { control } = useForm();
  return (
    <ThemeProvider theme={light}>
      <Input
        name="testInput"
        label="Label"
        placeholder="Placeholder"
        control={control}
      />
    </ThemeProvider>
  );
};

describe("TestInput component", () => {
  it("should render correctly label", () => {
    const { getByText } = render(<TestInput />);
    expect(getByText("Label")).toBeTruthy();
  });

  it("should render correctly placeholder", () => {
    const { getByPlaceholderText } = render(<TestInput />);
    expect(getByPlaceholderText("Placeholder")).toBeTruthy();
  });
});
