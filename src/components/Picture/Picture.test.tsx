import { mount } from "@cypress/react";
import Picture from ".";

const mountPicture = (src: string) => mount(<Picture src={src} alt="img" />);

describe("Skeleton", () => {
  it("should render src if it loads", () => {
    const imageSrc = `https://img.pokemondb.net/artwork/mudkip.jpg`;

    mountPicture(imageSrc);
    cy.wait(500);

    return cy.get("[data-testid=picture]").then(($picture) => {
      const src = $picture.attr("src");

      expect(src).equal(imageSrc);
    });
  });

  it("should render default image if src not load", () => {
    const imageSrc = "";
    const defaultImageSrc =
      "https://cdn-icons-png.flaticon.com/512/52/52053.png";

    mountPicture(imageSrc);
    cy.wait(500);

    return cy.get("[data-testid=picture]").then(($picture) => {
      const src = $picture.attr("src");

      expect(src).equal(defaultImageSrc);
    });
  });
});
