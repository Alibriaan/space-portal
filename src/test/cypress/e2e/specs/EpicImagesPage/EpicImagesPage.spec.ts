import { EPIC_PAGE } from '../../utils/pages';

const EPIC_IMAGES_PAGE_SELECTOR = '[data-testid="epic-images-data-table"]';
const EPIC_IMAGES_DATA_TABLE_SELECTOR = '[data-testid="epic-images-data-table"]';
const EPIC_IMAGES_DATA_TABLE_ACTION_CELL_SELECTOR = '[data-testid="epic-images-data-table-action-cell"]';
const EPIC_IMAGES_DATA_TABLE_OPEN_IMAGE_MODAL_BUTTON_SELECTOR = '[data-testid="epic-images-data-table-open-image-modal-button"]';
const EPIC_IMAGES_DATA_TABLE_MODAL_SELECTOR = '[data-testid="epic-images-data-table-modal"]';
const EPIC_IMAGES_MODAL_IMAGE_SELECTOR = '[data-testid="epic-images-data-table-modal-image"]';

const MAIN_PAGE_NAVIGATION_LINK_SELECTOR = '[data-testid="main-page-route-link"]';

describe('Epic images page tests', () => {
  beforeEach(() => {
    cy.visit(`/#${Cypress.env('epic-images')}`);
  });

  it('visit from main page', () => {
    cy.visit(Cypress.env('main'));

    cy.get(MAIN_PAGE_NAVIGATION_LINK_SELECTOR)
      .contains(EPIC_PAGE.name)
      .click();

    cy.url().should('include', EPIC_PAGE.link);

    checkPageVisibility();
  })

  it('Open modal functionality', () => {
    openModalFromFirstTableElement();

    cy.get(EPIC_IMAGES_DATA_TABLE_MODAL_SELECTOR)
      .should('exist')
      .and('be.visible');

    cy.get(EPIC_IMAGES_MODAL_IMAGE_SELECTOR)
      .should('exist')
      .and('be.visible');
  })

  it('Close modal functionality', () => {
    openModalFromFirstTableElement();

    cy.get('body').click(0,0);

    cy.get(EPIC_IMAGES_DATA_TABLE_MODAL_SELECTOR)
      .should('not.exist');

    cy.get(EPIC_IMAGES_DATA_TABLE_MODAL_SELECTOR)
      .should('not.exist');
  })
})

function openModalFromFirstTableElement() {
  cy.get(EPIC_IMAGES_DATA_TABLE_OPEN_IMAGE_MODAL_BUTTON_SELECTOR)
  .should('exist')
  .and('be.visible')
  .first()
  .click();
}

function checkPageVisibility() {
  cy.get(EPIC_IMAGES_PAGE_SELECTOR).should('be.visible');
  cy.get(EPIC_IMAGES_DATA_TABLE_SELECTOR).should('be.visible');
  cy.get(EPIC_IMAGES_DATA_TABLE_ACTION_CELL_SELECTOR).should('be.visible');
  cy.get(EPIC_IMAGES_DATA_TABLE_OPEN_IMAGE_MODAL_BUTTON_SELECTOR).should('be.visible');
}