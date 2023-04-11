import { render } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { ThemeProvider } from "styled-components";

import { InputNumber } from ".";
import light from "../../../global/styles/light";

const TestInputNumber = () => {
  const { control } = useForm();
  return (
    <ThemeProvider theme={light}>
      <InputNumber
        name="testInput"
        label="Label Input Number"
        placeholder="Placeholder for Number"
        control={control}
      />
    </ThemeProvider>
  );
};

describe("InputNumber component", () => {
  it("should render correctly label", () => {
    const { getByText } = render(<TestInputNumber />);
    expect(getByText("Label Input Number")).toBeTruthy();
  });

  it("should render correctly placeholder", () => {
    const { getByPlaceholderText } = render(<TestInputNumber />);
    expect(getByPlaceholderText("Placeholder for Number")).toBeTruthy();
  });
});
