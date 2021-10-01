const interceptGetHotPosts = () =>
  cy.intercept("https://www.reddit.com/r/reactjs/hot*").as("getHotPosts");

const interceptGetNewsPosts = () =>
  cy.intercept("https://www.reddit.com/r/reactjs/new*").as("getNewsPosts");

const interceptGetRisingPosts = () =>
  cy.intercept("https://www.reddit.com/r/reactjs/top*").as("getRisingPosts");

before(() => {
  interceptGetHotPosts();

  cy.visit("/");
});

describe("Default posts", () => {
  it("should initially render 10 hot posts from reddit api", () => {
    cy.wait("@getHotPosts");

    cy.get("[data-testid=post]").as("post");
    cy.get("@post").should("have.length", 10);
  });
});

describe("Posts by filter", () => {
  beforeEach(() => {
    cy.get("[data-testid=post]").as("post");
    cy.get("[data-testid=filter-buttons]").as("filterButtons");
  });

  it("should render 10 news posts from reddit api on click News button", () => {
    interceptGetNewsPosts();

    cy.get("@filterButtons").contains("News").click();
    cy.wait("@getNewsPosts");

    cy.get("@post").should("have.length", 10);
  });

  it("should render 10 rising posts from reddit api on click Rising button", () => {
    interceptGetRisingPosts();

    cy.get("@filterButtons").contains("Rising").click();
    cy.wait("@getRisingPosts");

    cy.get("@post").should("have.length", 10);
  });

  it("should render 10 hot posts from reddit api on click Hot button", () => {
    interceptGetHotPosts();

    cy.get("@filterButtons").contains("Hot").click();
    cy.wait("@getHotPosts");

    cy.get("@post").should("have.length", 10);
  });
});

describe("Show more button", () => {
  beforeEach(() => {
    cy.get("[data-testid=post]").as("post");
    cy.get("[data-testid=filter-buttons]").as("filterButtons");
    cy.get("[data-testid=show-more-button]").as("showMoreButton");
  });

  it("show more 10 hot posts on click show more button with hot filter", () => {
    interceptGetHotPosts();

    cy.get("@showMoreButton").click();
    cy.wait("@getHotPosts");

    cy.get("@post").should("have.length", 20);
  });

  it("should render 10 news posts from reddit api on click News button", () => {
    interceptGetNewsPosts();

    cy.get("@filterButtons").contains("News").click();
    cy.wait("@getNewsPosts");

    cy.get("@showMoreButton").click();
    cy.wait("@getNewsPosts");

    cy.get("@post").should("have.length", 20);
  });

  it("should render 10 rising posts from reddit api on click Rising button", () => {
    interceptGetRisingPosts();

    cy.get("@filterButtons").contains("Rising").click();
    cy.wait("@getRisingPosts");

    cy.get("@showMoreButton").click();
    cy.wait("@getRisingPosts");

    cy.get("@post").should("have.length", 20);
  });
});

describe("Error messages", () => {
  beforeEach(() => {
    cy.get("[data-testid=filter-buttons]").as("filterButtons");
  });

  it("should show toast when getPosts return error with status code 404", () => {
    cy.intercept("https://www.reddit.com/r/reactjs/new*", {
      statusCode: 404,
    }).as("getNewsPostsError");

    cy.get("@filterButtons").contains("News").click();
    cy.wait("@getNewsPostsError");

    cy.get(".Toastify__toast-body").should(
      "contain.text",
      "Não foi possível encontrar os posts"
    );
  });

  it("should show toast when getPosts return error with status code other than 404", () => {
    cy.intercept("https://www.reddit.com/r/reactjs/hot*", {
      forceNetworkError: true,
    }).as("getHotPostsError");

    cy.get("@filterButtons").contains("Hot").click();
    cy.wait("@getHotPostsError");

    cy.get(".Toastify__toast-body").should(
      "contain.text",
      "Ocorreu um erro ao tentar buscar os posts"
    );
  });

  it("should show error message instead posts when post list is empty", () => {
    cy.get("[data-testid=error-message]").should(
      "contain.text",
      "Nenhum post foi encontrado."
    );
  });
});
