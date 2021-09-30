import { mount } from "@cypress/react";
import PostFilter from ".";
import FilterProvider from "../../../context/FilterContext";
import ThemeProvider from "../../../context/ThemeContext";

const activeColorRegExp = /rgb\(99, 36, 198\)/;
const inactiveColorRegExp = /rgb\(167, 176, 190\)/;

describe("Filter Buttons", () => {
  beforeEach(() => {
    mount(
      <ThemeProvider>
        <FilterProvider>
          <PostFilter />
        </FilterProvider>
      </ThemeProvider>
    );

    cy.get("[data-testid=filter-buttons]").as("buttons");
  });

  it("should have the first button as the active on render", () => {
    cy.get("@buttons")
      .children()
      .each(($button, index) => {
        const backgroundColor = $button.css("background-color");

        const colorToMatch =
          index === 0 ? activeColorRegExp : inactiveColorRegExp;

        expect(backgroundColor).match(colorToMatch);
      });
  });

  it("should set button as the active on click inactive button", () => {
    cy.get("@buttons")
      .children()
      .last()
      .click()
      .each(($button, index, $buttonList) => {
        const backgroundColor = $button.css("background-color");

        const colorToMatch =
          index === $buttonList.length - 1
            ? activeColorRegExp
            : inactiveColorRegExp;

        expect(backgroundColor).match(colorToMatch);
      });
  });
});
