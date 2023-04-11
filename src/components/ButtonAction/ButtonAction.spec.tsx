import { render } from "@testing-library/react";
import { ButtonAction } from ".";
import { ThemeProvider } from "styled-components";
import light from "../../global/styles/light";

test("ButtonAction Component", () => {
  const { debug, getByText } = render(
    <ThemeProvider theme={light}>
      <ButtonAction onClick={() => {}}><>Label</></ButtonAction>
    </ThemeProvider>
  );

  expect(getByText("Label")).toBeTruthy();
});
