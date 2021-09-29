import { mount } from "@cypress/react";
import ThemeSwitch from ".";
import ThemeProvider from "../../../context/ThemeContext";

describe("Switch", () => {
  beforeEach(() => {
    mount(
      <ThemeProvider>
        <ThemeSwitch />
      </ThemeProvider>
    );

    cy.get("[data-testid=theme-switch]").as("switch");
    cy.get("[data-testid=theme-input]").as("input");
  });

  it("should input initial checked to be false", () => {
    cy.get("@input").should("not.be.checked");
  });

  it("should input initial value to be light", () => {
    cy.get("@input").should("have.value", "light");
  });

  it("should change input checked on click switch", () => {
    cy.get("@switch").click();

    cy.get("@input").should("be.checked");

    cy.get("@switch").click();

    cy.get("@input").should("not.be.checked");
  });

  it("should change input value to opossite theme name on click switch", () => {
    cy.get("@switch").click();

    cy.get("@input").should("have.value", "dark");

    cy.get("@switch").click();

    cy.get("@input").should("have.value", "light");
  });
});
