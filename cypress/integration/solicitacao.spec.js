/// <reference types="cypress" />
import help from '../support/pages/index'

describe('Funcionalidade cadastro de Usuário do sistema', () => {
    beforeEach(() => {
        cy.visit('https://help-4-business.web.app/') 
    })

    afterEach(() => {

    })
  
    it('Realizar cadastro de nova solicitação com prioridade baixa', () => {
        help.validarTelaLogin();
        help.realizarLogin();
        help.criarNovaSolicitaçãoBaixa();
    })
    it('Realizar cadastro de nova solicitação com prioridade média', () => {
        help.validarTelaLogin();
        help.realizarLogin();
        help.criarNovaSolicitaçãoMedia();
    })
    it('Realizar cadastro de nova solicitação com prioridade alta', () => {
        help.validarTelaLogin();
        help.realizarLogin();
        help.criarNovaSolicitaçãoAlta();
    })
    it('Realizar cadastro de nova solicitação com prioridade crítica', () => {
        help.validarTelaLogin();
        help.realizarLogin();
        help.criarNovaSolicitaçãoCritica();
    })
})