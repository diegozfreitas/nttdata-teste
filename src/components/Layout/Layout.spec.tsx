import { render, screen } from "@testing-library/react";
import { Layout } from ".";
import { ThemeProvider } from "styled-components";
import light from "../../global/styles/light";
import { BrowserRouter } from "react-router-dom";

describe("Layout render correctly", () => {
  const Component = (
    <ThemeProvider theme={light}>
      <BrowserRouter>
        <Layout title="Titulo">
          <>Children</>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
  
  it("Should render children", () => {
    render(Component);

    expect(screen.getByText("Children")).toBeTruthy();
  });

  it("Should render children", () => {
    render(Component);

    expect(screen.getByText("Titulo")).toBeTruthy();
  });
});
