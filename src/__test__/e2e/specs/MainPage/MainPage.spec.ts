import { PAGES } from '../../utils/pages';

const NAVIGATION_LINK = '[data-testid="main-page-route-link"]';

describe('Main Page tests', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('main'));
  })

  PAGES.slice(1).forEach((page) =>
    it(`Navigation ${page.name} functionality`, () => {
      cy.get(NAVIGATION_LINK)
        .contains(page.name)
        .should('be.visible')
        .click();

      cy.url().should('include', page.link);
    })
  )
})