import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../store";
import { Graphics } from ".";
import { ThemeProvider } from "styled-components";
import light from "../../../../global/styles/light";
import { BrowserRouter } from "react-router-dom";

describe("Graphics component", () => {
  it("should render link to farm registration when there are no farms", () => {
    const { getByRole } = render(
      <ThemeProvider theme={light}>
        <Provider store={store}>
          <BrowserRouter>
            <Graphics />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    );

    const registrationLink = getByRole("link", {
      name: /cadastrar primeira fazenda/i,
    });
    expect(registrationLink).toBeTruthy();
  });
});
