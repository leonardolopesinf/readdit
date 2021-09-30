import { mount } from "@cypress/react";
import PostSkeleton from ".";
import ThemeProvider from "../../../context/ThemeContext";

describe("Skeleton", () => {
  beforeEach(() => {
    mount(
      <ThemeProvider>
        <PostSkeleton />
      </ThemeProvider>
    );
  });

  it("should render 10 skeletons", () => {
    cy.get("[data-testid=skeleton]").should("have.length", 10);
  });
});
