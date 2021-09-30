import { mount } from "@cypress/react";
import ShowMore from ".";
import ThemeProvider from "../../../context/ThemeContext";

describe("Button", () => {
  beforeEach(() => {
    const onClick = () =>
      new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 1000);
      });

    mount(
      <ThemeProvider>
        <ShowMore onClick={onClick} />
      </ThemeProvider>
    );

    cy.get("[data-testid=show-more-button]").as("button");
  });

  it("should render a text in button", () => {
    cy.get("@button").should("have.descendants", "span");
  });

  it("should render loading in button on click in it", () => {
    cy.get("@button").click().should("have.descendants", "img");
  });
});
