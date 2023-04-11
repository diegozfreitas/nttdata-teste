import { render } from "@testing-library/react";
import { Button } from ".";
import { ThemeProvider } from "styled-components";
import light from "../../global/styles/light";

test("Button Component", () => {
  const { debug, getByText } = render(
    <ThemeProvider theme={light}>
      <Button label="Label" onClick={() => {}}></Button>
    </ThemeProvider>
  );

  expect(getByText("Label")).toBeTruthy();
});
