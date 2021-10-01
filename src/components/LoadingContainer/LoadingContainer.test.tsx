import { mount } from "@cypress/react";
import LoadingContainer from ".";

const Loading = () => <h1>Loading...</h1>;
const Children = () => <h1>Children</h1>;

const mountLoadingContainer = (displayLoading: boolean) =>
  mount(
    <LoadingContainer displayLoading={displayLoading} loading={Loading}>
      <Children />
    </LoadingContainer>
  );

describe.only("Loading", () => {
  it("should render loading when displayLoading is true", () => {
    mountLoadingContainer(true);

    cy.get("h1").should("contain.text", "Loading...");
  });

  it("should render children when displayLoading is false", () => {
    mountLoadingContainer(false);

    cy.get("h1").should("contain.text", "Children");
  });
});
