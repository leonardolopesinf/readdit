import { mount } from "@cypress/react";
import Picture from ".";

describe("Skeleton", () => {
  it("should render src if it loads ", () => {
    const imageSrc =
      "https://lh3.googleusercontent.com/proxy/pD4CF7jHfC4f3T1qeBWmd3n9JE0r_x1VI2AMvrqHIBJszzTnbay9b-jna_ctJrgZf6TRq6hOr_pVAt6Fxd_zUQC6TnA";

    mount(<Picture src={imageSrc} alt="img" />);

    cy.wait(500);

    return cy.get("[data-testid=picture]").then(($picture) => {
      const src = $picture.attr("src");

      expect(src).equal(imageSrc);
    });
  });

  it("should render default image if src not load ", () => {
    const imageSrc = "";
    const defaultImageSrc =
      "https://cdn-icons-png.flaticon.com/512/52/52053.png";

    mount(<Picture src={imageSrc} alt="img" />);

    cy.wait(500);

    return cy.get("[data-testid=picture]").then(($picture) => {
      const src = $picture.attr("src");

      expect(src).equal(defaultImageSrc);
    });
  });
});
