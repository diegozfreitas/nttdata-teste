import React from "react";
import { render } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

import { Cards } from ".";
import { ThemeProvider } from "styled-components";
import light from "../../../../global/styles/light";

const mockStore = configureMockStore([]);

describe("Cards component", () => {
  it("should render cards correctly", () => {
    const store = mockStore({
      farms: {
        items: [
          { id: 1, name: "Farm 1", totalArea: 100 },
          { id: 2, name: "Farm 2", totalArea: 200 },
        ],
      },
    });

    const { getByText } = render(
      <ThemeProvider theme={light}>
        <Provider store={store}>
          <Cards />
        </Provider>
      </ThemeProvider>
    );

    expect(getByText("Total de fazendas 2")).toBeTruthy();
    expect(getByText("Total de fazendas em hectares 300")).toBeTruthy();
  });
});
