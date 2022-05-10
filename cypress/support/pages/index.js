//Elementos
const el = {
    btCadastro: '.card-content > a',
    txtTelaCadastro: '.is-size-3-mobile',
    tfEmail: '#email',
    tfPassword: '#password',
    tfpasswordConfirmation: '#passwordConfirmation',
    btNextButton1: '#nextButton1 > :nth-child(2)',
    btNextButton2: '#nextButton2 > :nth-child(2)',
    btNextButton3: '#nextButton3 > :nth-child(2)',
    tfName: '#name',
    tfNameCountry:'#nameCountry',
    tfPhoneNumber:'#phoneNumber',
    rbUsuario: ':nth-child(2) > .b-radio > .check',
    rbAdministrador: ':nth-child(3) > .b-radio > .check',
    txtCadastroConcluidoSucesso: '[class="title has-text-centered"]',
    txtTelaLogin: '[class="has-text-primary title is-size-3-mobile is-size-2 is-size-1-widescreen has-text-left"]',
    btLogin:'#loginButton',
    btSolicitacoes: ':nth-child(2) > li > .icon-text > :nth-child(2)',
    btNovaSolicitacao: '#newRequestButton > :nth-child(2)',
    btSelectPrioridade: '#selectCategory',
    tfDescricao: '#description',
    btCadastrar: '#createButton',
    }
    
    //Ações
    class help {
    
        acessarTelaCadastro(){
            cy.get(el.btCadastro).click();
        }
        validarTelaCadastro(){
            cy.get(el.txtTelaCadastro).should('have.text','Faça seu cadastro agora!');
        }
        realizarCadastroUsuario(){
            const uuid = () => Cypress._.random(0, 1e6)
            const id = uuid()
            const testEmail = `usuario${id}@teste.com.br`;
            cy.get(el.tfEmail).type(testEmail);
            cy.get(el.tfPassword).type('senhateste');
            cy.get(el.tfpasswordConfirmation).type('senhateste');
            cy.get(el.btNextButton1).click();
            cy.get(el.tfName).type('Usuário Automatizado');
            cy.get(el.tfNameCountry).type('Brasil').get('.dropdown-item > span').contains('Brasil').click({force:true});
            cy.get(el.tfPhoneNumber).type('31995720024');
            cy.get(el.btNextButton2).click();
            cy.get(el.rbUsuario).click();
            cy.get(el.btNextButton3).click();
            cy.get(el.txtCadastroConcluidoSucesso).should('have.text','O cadastro foi concluído com sucesso!'); 
        }
        realizarCadastroAdministrador(){
            const uuid = () => Cypress._.random(0, 1e6)
            const id = uuid()
            const testEmail = `administrador${id}@teste.com.br`;
            cy.get(el.tfEmail).type(testEmail);
            cy.get(el.tfPassword).type('senhateste');
            cy.get(el.tfpasswordConfirmation).type('senhateste');
            cy.get(el.btNextButton1).click();
            cy.get(el.tfName).type('Administrador Automatizado');
            cy.get(el.tfNameCountry).type('Brasil').get('.dropdown-item > span').contains('Brasil').click({force:true});
            cy.get(el.tfPhoneNumber).type('31995720024');
            cy.get(el.btNextButton2).click();
            cy.get(el.rbAdministrador).click();
            cy.get(el.btNextButton3).click();
            cy.get(el.txtCadastroConcluidoSucesso).should('have.text','O cadastro foi concluído com sucesso!');
        }
        realizarCadastroUsuarioSenhaIncorreta(){
            const uuid = () => Cypress._.random(0, 1e6)
            const id = uuid()
            const testEmail = `usuario${id}@teste.com.br`;
            cy.get(el.tfEmail).type(testEmail);
            cy.get(el.tfPassword).type('senhateste');
            cy.get(el.tfpasswordConfirmation).type('senha');
            cy.get(el.btNextButton1).click();
            cy.get('[class="help is-danger"]').should('have.text','Por favor corrija os seguintes erro(s):A confirmação das senhas está incorreta.Por favor corrija os seguintes erro(s):A confirmação das senhas está incorreta.');
        }
        realizarCadastroUsuarioEmailInvalido(){
            cy.get(el.tfEmail).type('email-invalido@teste');
            cy.get(el.tfPassword).type('senhateste');
            cy.get(el.tfpasswordConfirmation).type('senhateste');
            cy.get(el.btNextButton1).click();
            cy.get('[class="help is-danger"]').should('have.text','Por favor corrija os seguintes erro(s):O e-mail deve ser válido.Por favor corrija os seguintes erro(s):O e-mail deve ser válido.');
        }
        realizarCadastroAdmNomeVazio(){
            const uuid = () => Cypress._.random(0, 1e6)
            const id = uuid()
            const testEmail = `administrador${id}@teste.com.br`;
            cy.get(el.tfEmail).type(testEmail);
            cy.get(el.tfPassword).type('senhateste');
            cy.get(el.tfpasswordConfirmation).type('senhateste');
            cy.get(el.btNextButton1).click();
            cy.get(el.tfName).type('');
            cy.get(el.tfNameCountry).type('Brasil').get('.dropdown-item > span').contains('Brasil').click({force:true});
            cy.get(el.tfPhoneNumber).type('31995720024');
            cy.get(el.btNextButton2).click();
            cy.get(el.rbAdministrador).click();
            cy.get(el.btNextButton3).click();
            cy.get(el.txtCadastroConcluidoSucesso).should('have.text','O cadastro foi concluído com sucesso!');
        }
        validarTelaLogin(){
            cy.get(el.txtTelaLogin).should('have.text','Bem-vindo ao Help4 Business');
        }
        realizarLogin(){
            cy.get(el.tfEmail).type('usuario579860@teste.com.br');
            cy.get(el.tfPassword).type('senhateste');
            cy.get(el.btLogin).click();
        }
        realizarLoginSenhaIncorreta(){
            cy.get(el.tfEmail).type('usuario579860@teste.com.br');
            cy.get(el.tfPassword).type('senha1213123');
            cy.get(el.btLogin).click();
        }
        criarNovaSolicitaçãoBaixa(){
            cy.get(el.btSolicitacoes).click();
            cy.get(el.btNovaSolicitacao).click();
            cy.get(el.btSelectPrioridade).select('LOW');
            cy.get(el.tfDescricao).type('Olá, prezados. O Excel não está funcionando no meu computador! Vocês podem verificar? Obrigada!');
            cy.get(el.btCadastrar).click();
        }
        criarNovaSolicitaçãoMedia(){
            cy.get(el.btSolicitacoes).click();
            cy.get(el.btNovaSolicitacao).click();
            cy.get(el.btSelectPrioridade).select('MEDIUM');
            cy.get(el.tfDescricao).type('Olá, prezados. O meu computador não está ligando! Vocês podem verificar? Obrigada!');
            cy.get(el.btCadastrar).click();
        }
        criarNovaSolicitaçãoAlta(){
            cy.get(el.btSolicitacoes).click();
            cy.get(el.btNovaSolicitacao).click();
            cy.get(el.btSelectPrioridade).select('HIGH');
            cy.get(el.tfDescricao).type('Olá, prezados. Não estou conseguindo conectar na internet com o meu computador! Vocês podem verificar? Obrigada!');
            cy.get(el.btCadastrar).click();
        }
        criarNovaSolicitaçãoCritica(){
            cy.get(el.btSolicitacoes).click();
            cy.get(el.btNovaSolicitacao).click();
            cy.get(el.btSelectPrioridade).select('CRITICAL');
            cy.get(el.tfDescricao).type('Olá, prezados. Não estou conseguindo acessar o servidor da empresa! Vocês podem verificar? Obrigada!');
            cy.get(el.btCadastrar).click();
        }
    
        
    }  
    export default new help ();