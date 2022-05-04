/// <reference types="cypress" />
import help from '../support/pages/index'

describe('Funcionalidade cadastro de Usuário do sistema', () => {
    beforeEach(() => {
        cy.visit('https://help-4-business.web.app/') 
    })

    afterEach(() => {
  
    })
    it('Realizar cadastro de Usuário com sucesso', () => {
        help.acessarTelaCadastro();
        help.validarTelaCadastro();
        help.realizarCadastroUsuario();
    })
    it('Realizar cadastro de Usuário com falha - Confirmação de Senha incorreta', () => {
        help.acessarTelaCadastro();
        help.validarTelaCadastro();
        help.realizarCadastroUsuarioSenhaIncorreta();
    })
    it('Realizar cadastro de Usuário com falha - E-mail incompleto', () => {
        help.acessarTelaCadastro();
        help.validarTelaCadastro();
        help.realizarCadastroUsuarioEmailInvalido();
    })
})

    describe('Funcionalidade cadastro de Administrador do sistema', () => {
        beforeEach(() => {
            cy.visit('https://help-4-business.web.app/') 
        })
    
        afterEach(() => {
      
        })
        
    it('Realizar cadastro de Administrador com sucesso', () => {
        help.acessarTelaCadastro();
        help.validarTelaCadastro();
        help.realizarCadastroAdministrador();
    })
})