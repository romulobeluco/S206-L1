/// <reference types="cypress" />

describe("Testes de criação, registro, login e exclusão de conta", () => {

  it("Teste de registro, login e exclusão de conta", () => {
    const infos = criarUser();

    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login');
    cy.get('#username').type(infos[0]);
    cy.get('#password').type(infos[1]);
    cy.get('.btn-primary').click();
    cy.get('h1.ng-binding').should("contain.text", infos[0]);

    excluirConta();

    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login');
    cy.get('#username').type(infos[0]);
    cy.get('#password').type(infos[1]);
    cy.get('.btn-primary').click();
    cy.get('.alert-danger').should("contain.text", "Username or password is incorrect");
  });

  function criarUser() {
    const hora = new Date().getHours().toString();
    const minuto = new Date().getMinutes().toString();
    const seg = new Date().getSeconds().toString();
    const ID = hora + minuto + seg + "ID";
    const Senha = hora + minuto + seg + "Senha";
    const infos = [ID, Senha];

    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login');
    cy.get('.btn-link').click();
    cy.get('#firstName').type("Vitinho");
    cy.get('#Text1').type("Vitinho");
    cy.get('#username').type(ID);
    cy.get('#password').type(Senha);
    cy.get('.btn-primary').click();
    cy.get('.ng-binding').should("contain.text", "Registration successful");

    return infos;
  }

  function excluirConta() {
    cy.get('.ng-scope > .btn').click();
    cy.get('.alert-success').should("contain.text", "Account deleted successfully");
  }

});