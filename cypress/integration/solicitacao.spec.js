/// <reference types="cypress" />
import help from '../support/pages/index'

describe('Funcionalidade cadastro de Usuário do sistema', () => {
    beforeEach(() => {
        cy.visit('https://help-4-business.web.app/') 
    })

    afterEach(() => {

    })
  
    it.only('Realizar cadastro de nova solicitação', () => {
        help.validarTelaLogin();
        help.realizarLogin();
        help.criarNovaSolicitação();
    })
})