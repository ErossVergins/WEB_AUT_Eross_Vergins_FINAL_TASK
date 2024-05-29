describe("Final Task", () => {

  it("form", () => {
      cy.visit("https://demoqa.com/automation-practice-form");
      cy.get("#firstName").type("Eross");
      cy.get("#lastName").type("Vergins");
      cy.get("#userEmail").type("mail@mail.lv");
      cy.get("#genterWrapper > .col-md-9 > :nth-child(1)").click();
      cy.get("#userNumber").type("12345678");
      cy.get("#dateOfBirthInput").click();
      cy.get(".react-datepicker__year-select").select("1930"); //Vispirms izvēlās gadu, lai mēnesis pareizs
      cy.get(".react-datepicker__month-select").select("February");
      cy.get(".react-datepicker__day--028")
        .not(".react-datepicker__day--outside-month")
        .click();
      cy.get("#subjectsInput").type("Economics").type("{enter}");
      cy.get("#hobbiesWrapper > .col-md-9 > :nth-child(3)").click();

      const imagePath = 'cypress/e2e/files/jesus.jpeg';
      cy.get('#uploadPicture').selectFile(imagePath);

      cy.get("#currentAddress").type("valmiera");
      cy.get("#state").click();
      cy.get("#react-select-3-option-0").click();
      cy.get("#city").click();
      cy.get("#react-select-4-option-0").click();
      cy.get("#submit").click();

      cy.get(".table-responsive").within(() => {
        cy.contains("Student Name").next().should("contain", "Eross Vergins");
        cy.contains("Student Email").next().should("contain", "mail@mail.lv");
        cy.contains("Gender").next().should("contain", "Male");
        cy.contains("Mobile").next().should("contain", "12345678");
        cy.contains("Date of Birth").next().should("contain", "28 February,1930");
        cy.contains("Subjects").next().should("contain", "Economics");
        cy.contains("Hobbies").next().should("contain", "Music");
        cy.contains("Picture").next().should("contain", "jesus.jpeg");
        cy.contains("Address").next().should("contain", "valmiera");
        cy.contains("State and City").next().should("contain", "NCR Delhi");
      });
  });
  Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
  });
});