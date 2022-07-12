import { NASA_TECHPORT_PAGE } from '../../utils/pages';

const NAVIGATION_LINK = '[data-testid="main-page-route-link"]';

const NASA_TECH_PORT_PAGE = '[data-testid="nasa-tech-port"]';
const NASA_TECH_PORT_PROJECT_DESCRIPTION_SELECTOR = '[data-testid="nasa-tech-port-project-description"]';
const NASA_TECH_PORT_PROJECT_SELECT = '[data-testid="nasa-tech-port-project-select"]';
const NASA_TECH_PORT_PROJECT_OPTION = '[data-testid="nasa-tech-port-project-select-option"]';

describe('Main Page tests', () => {
  beforeEach(() => {
    cy.visit(`/#${Cypress.env('nasa-tech-port')}`);
  })

  it('Visit from main page', () => {
    cy.visit(`/#${Cypress.env('main')}`);

    cy.visit(`/#${Cypress.env('nasa-tech-port')}`);

    checkPageVisibility();
  })

  it('Select project', () => {
    cy.get(NASA_TECH_PORT_PROJECT_SELECT)
      .should('be.visible')
      .click();

    cy.get(NASA_TECH_PORT_PROJECT_OPTION)
      .should('exist')
      .first()
      .should('be.visible')
      .click();

      cy.get(NASA_TECH_PORT_PROJECT_DESCRIPTION_SELECTOR)
        .should('exist')
        .and('be.visible');
  })
})

function checkPageVisibility() {
  cy.get(NASA_TECH_PORT_PAGE).should('be.visible');
  cy.get(NASA_TECH_PORT_PROJECT_SELECT).should('be.visible');
}