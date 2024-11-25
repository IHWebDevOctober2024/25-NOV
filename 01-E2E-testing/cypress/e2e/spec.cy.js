describe("Hello world", () => {
  it("Visit the About page and load the content", () => {
    cy.visit("https://watch-vault.netlify.app/#/");
    cy.get(".nav-links").contains("About Us").click();
    cy.contains("Welcome to our movie library, WatchVault from DKD Studios.");
  });
  it("Go to the create movie and create a new movie", () => {
    cy.visit("https://watch-vault.netlify.app/#/");
    // go to the create new movie page
    cy.get(".primary-button").last().click();
    // click on the input
    cy.get('input[name="title"]').type("Dune");
    cy.get("#release_date").type("2020-02-10");
    cy.get("#image").type(
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dune_%282021_film%29.jpg/220px-Dune_%282021_film%29.jpg",
      { force: true }
    );
    
    cy.get(".primary-button").contains("Save").click();
    cy.wait(3000);

    cy.get(".search-bar-input").type("Dune");
    cy.get(".movie-card").contains("DUNE").click();

    cy.get("button").contains("Delete").click();
    cy.get("button").contains("Delete").click();
  });
});
