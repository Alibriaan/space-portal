import { PICTURE_OF_THE_DAY_PAGE } from '../../utils/pages';

const MAIN_PAGE_NAVIGATION_LINK_SELECTOR = '[data-testid="main-page-route-link"]';
const PICTURE_OF_THE_DAY_PAGE_SELECTOR = '[data-testid="picture-of-the-day"]';
const PICTURE_OF_THE_DAY_IMAGE_SELECTOR = '[data-testid="picture-of-the-day-image"]';
const PICTURE_TITLE_SELECTOR = '[data-testid="picture-of-the-day-title"]';
const PICTURE_DESCRIPTION_SELECTOR = '[data-testid="picture-of-the-day-description"]';
const PICTURE_COPYRIGHT_SELECTOR = '[data-testid="picture-of-the-day-copyright"]'

describe('Picture of the day page tests', () => {
  beforeEach(() => {
    cy.visit(`/#${Cypress.env('picture-of-the-day')}`);
  });

  it('visit from main page', () => {
    cy.visit(Cypress.env('main'));

    cy.get(MAIN_PAGE_NAVIGATION_LINK_SELECTOR)
      .contains(PICTURE_OF_THE_DAY_PAGE.name)
      .click();

    cy.url().should('include', PICTURE_OF_THE_DAY_PAGE.link);

    checkPageVisibility();
  })
})

function checkPageVisibility() {
  cy.get(PICTURE_OF_THE_DAY_PAGE_SELECTOR).should('be.visible');
  cy.get(PICTURE_OF_THE_DAY_IMAGE_SELECTOR).should('be.visible');
  cy.get(PICTURE_TITLE_SELECTOR).should('be.visible');
  cy.get(PICTURE_DESCRIPTION_SELECTOR).should('be.visible');
  cy.get(PICTURE_COPYRIGHT_SELECTOR).should('be.visible');
}