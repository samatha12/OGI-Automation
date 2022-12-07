import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("User navigates to Eldon Insurance", () => {
  cy.visit("/vehicle");
  cy.url().should("include", "/pre-quote/vehicle");
});

When("I fill all the pre quote details", () => {
  cy.log("Accept cookies");
  cy.get(".modal-dialog")
    .should("be.visible")
    .then(($dialog) => {
      cy.wrap($dialog).find("#allowCookies").click();
    });

  cy.get("#vehicle_dvlaregistration").type("EK54BTE");
  cy.get("#btnFindVehicle").click();
  cy.get("#vehicle_lhd_Righthand").click();
  cy.get("#vehicle_seats").select("5");
  cy.get("#vehicle_estimatedValue").clear().type("5000");
  cy.get("#vehicle_imported").select("No");
  cy.get("#vehicle_imported").select("No");
  cy.get("#vehicle_modified_No").click();
  cy.get("#vehicle_proposerIsOwner_Yes").click();
  cy.get("#vehicle_proposerIsKeeper_Yes").click();
  cy.get("#vehicle_notYetPurchasedLabel").click();
  cy.get("#vehicle_nightLocation_Driveway").click();
  cy.get("#pickTomorrow").click();
  cy.get("#vehicle_coverType_Fullycomprehensive").click();
  cy.get("#policy_volExcess").select("£800");
  cy.get("#vehicle_ncbyears").select("0");

  cy.get("#navNext").click();

  cy.log("About you");
  cy.url().should("include", "/pre-quote/proposer");

  cy.log("Enter About you");
  cy.get("#person_title_Mr").click();
  cy.get("#person_firstName").clear().type("Test");
  cy.get("#person_surname").clear().type("Ogi");
  cy.get("#person_address_buildingNameOrNumber")
    .clear()
    .type("Elgar Business Centre");
  cy.get("#person_address_postCode").type("WR2 6NJ");
  cy.get("#person_address_postCodeSearch").click();
  cy.get("#person_address_postCodeSelect").select("52489478");
  cy.get("#custom_childrenunder16_Yes").click();
  cy.get("#custom_carsInHousehold_1").click();
  cy.get("#vehicle_vehicleKeptAtDifferentAddress_Yes").click();
  cy.get("#person_contactTelephone").type("0123456789");
  cy.get("#person_contactEmail").type("opentest@gmail.com");
  cy.get("#policy_previousPayment_Annually").click();

  cy.get("#navNext").click();

  cy.log("Your Drivers");
  cy.url().should("include", "/pre-quote/driver");

  cy.get("#person_dateOfBirth_day").type("05");
  cy.get("#person_dateOfBirth_month").type("12");
  cy.get("#person_dateOfBirth_year").type("1990");
  cy.get("#person_maritalStatus_Married").click();
  cy.get("#person_homeOwner_Yes").click();
  cy.get("#person_resFromBirth_Yes").click();
  cy.get("#person_occupation1_empStat_Employed").click();
  cy.get("#person_occupation1_occType").type("Accountant");
  cy.get("#ngb-typeahead-1-0").click();
  cy.get("#person_occupation1_busType").type("Accountancy");
  cy.get("#ngb-typeahead-2-0").click();
  cy.get("#person_hasSecondaryOccupation_No").click();
  cy.get("#person_licType_FullUK").click();
  cy.get("#person_myLicenceDriverConsent_No").click();
  cy.get("#person_licHeld").type("5");
  cy.get("#person_licUnit_Years").click();
  cy.get("#person_driveOthVehiclesUseType_No").click();
  cy.get("#person_hasNonMotorConv_Yes").click();
  cy.get("#person_hasAccidents_No").click();
  cy.get("#person_hasConvictions_No").click();
  cy.get("#person_infInd_No").click();
  cy.get(
    "#person_carUsage_SocialdomesticpleasureandcommutingtoasingleplaceofworkSDPC"
  ).click();
  cy.get("#person_privateMileage").type("2000");
  cy.get("#policy_insCancelRefusedSpecial_No").click();
  cy.get("#policy_consentToSearchesLabel").click();

  cy.get("#navNext").click({ force: true });
});

Then("user able to get a succesful quote", () => {});
