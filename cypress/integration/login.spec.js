/// <reference types="cypress" />
import help from '../support/pages/index'

describe('Funcionalidade efetuar login no sistema', () => {
    beforeEach(() => {
        cy.visit('https://help-4-business.web.app/login') 
    })

    afterEach(() => {
  
    })
    it('Realizar login com sucesso', () => {
        help.validarTelaLogin();
        help.realizarLogin();
    })
    it('Realizar login com falha - Senha incorreta', () => {
        help.validarTelaLogin();
        help.realizarLoginSenhaIncorreta();
        
    })
})