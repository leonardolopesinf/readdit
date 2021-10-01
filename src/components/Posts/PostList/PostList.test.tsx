import { mount } from "@cypress/react";
import PostList from ".";
import FilterProvider from "../../../context/FilterContext";
import ThemeProvider from "../../../context/ThemeContext";

const mountPostList = () =>
  mount(
    <ThemeProvider>
      <FilterProvider>
        <PostList />
      </FilterProvider>
    </ThemeProvider>
  );

describe("Post List", () => {
  beforeEach(() => {
    cy.intercept("https://www.reddit.com/r/reactjs/*").as("getPosts");

    mountPostList();

    cy.get("[data-testid=post-list]").as("posts");
    cy.get("[data-testid=post]").as("post");
  });

  it("should render 10 posts returned from reddit api", () => {
    cy.wait("@getPosts");
    cy.get("@post").should("have.length", 10);
  });

  it("should get and render more 10 posts on click show more button", () => {
    cy.wait("@getPosts");

    cy.get("@posts").find("button").click();
    cy.wait("@getPosts");

    cy.get("@post").should("have.length", 20);
  });
});

describe("Error message", () => {
  beforeEach(() => {
    cy.intercept("https://www.reddit.com/r/reactjs/*", {
      forceNetworkError: true,
    }).as("getPostsError");

    mountPostList();
  });

  it("should display error message when post list is empty", () => {
    cy.wait("@getPostsError");

    cy.get("[data-testid=post-list]").should(
      "have.descendants",
      "[data-testid=error-message]"
    );
  });
});

describe("Skeleton", () => {
  beforeEach(() => {
    cy.intercept(
      {
        url: "https://www.reddit.com/r/reactjs/*",
        middleware: true,
      },
      (request) => {
        request.on("response", (response) => {
          response.setThrottle(1000);
        });
      }
    ).as("getPostsSlow");

    mountPostList();

    cy.get("[data-testid=post-list]").as("posts");
  });

  it("should render skeleton before post list", () => {
    cy.get("@posts").should("have.descendants", "[data-testid=post-skeleton]");
  });
});
