describe('Testes', () => {
  it('passes', () => {
    
    cy.visit('https://loja.depimiel.com/login')
    cy.get('.form-control').type('Romulo@gmail.com')
    cy.get('.d-flex > .btn-primary-action').click();
    cy.get('.form-control').type('123456')
    cy.get('.multistep-controller').click();
    cy.get(':nth-child(1) > :nth-child(1) > .form-control').type('Romulo')
    cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('Coutinho')
    cy.get(':nth-child(2) > .form-group > .form-control').type('12345678910')
    cy.get(':nth-child(3) > .form-group > .form-control').type('12092003')
    cy.get(':nth-child(4) > .col > .form-control').type('3199999999')
    cy.get('.multistep-controller > :nth-child(2)').click();
  
    cy.get(':nth-child(1) > .form-group > .form-control').type('30310760')

    cy.get('.col-sm-4 > .form-control').type('100')
    cy.get(':nth-child(5) > .form-group > .form-control').type('Ap.10')
    

    cy.get('.user-form-container > .btn-primary-action').click();

   
    
  
  })

  it('Login', () => {
    cy.visit('https://loja.depimiel.com/login');
    cy.get('.form-control').type('12345'); 
    cy.get('.d-flex > .btn-primary-action').click(); 
  });
  
  
  
  it('Login completo', () => {
    cy.visit('https://loja.depimiel.com/login');
    cy.get('.form-control').type('Pedro@gmail.com');
    cy.get('.d-flex > .btn-primary-action').click();
    
    // Insere a senha e navega para a próxima etapa
    cy.get('.form-control').type('139141041');
    cy.get('.multistep-controller').click();
    
    // Preenche o formulário com dados pessoais
    cy.get(':nth-child(1) > :nth-child(1) > .form-control').type('Pedro');
    cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('Silva');
    cy.get(':nth-child(2) > .form-group > .form-control').type('12345678910');
    cy.get(':nth-child(3) > .form-group > .form-control').type('12092003');
    cy.get(':nth-child(4) > .col > .form-control').type('3199999999');
    cy.get('.multistep-controller > :nth-child(2)').click();
  
    // Preenche os dados de endereço
    cy.get(':nth-child(1) > .form-group > .form-control').type('30310760');
    cy.get('.col-sm-4 > .form-control').type('100');
    cy.get(':nth-child(5) > .form-group > .form-control').type('Ap.9');
  
    // Conclui o cadastro
    cy.get('.user-form-container > .btn-primary-action').click();
  });
  
  it('Login + senha', () => {
    cy.visit('https://loja.depimiel.com/login');
    cy.get('.form-control').type('Caio123@gmail.com'); 
    cy.get('.d-flex > .btn-primary-action').click(); 
    cy.get('.form-control').type('aaaaaa')
    cy.get('.multistep-controller').click();
  });
  
  it('Erro', () => {
    cy.visit('https://loja.depimiel.com/login');
    cy.get('.form-control').type('Pedro@gmail.com');
    cy.get('.d-flex > .btn-primary-action').click();
    
    
    cy.get('.form-control').type('139141041');
    cy.get('.multistep-controller').click();
    
  
    cy.get(':nth-child(1) > :nth-child(1) > .form-control').type('Pedro');
    cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('Silva');
    cy.get(':nth-child(2) > .form-group > .form-control').type('12345678910');
    cy.get(':nth-child(3) > .form-group > .form-control').type('12092003');
    cy.get(':nth-child(4) > .col > .form-control').type('a')  
    cy.get(':nth-child(1) > .form-group > .form-control').type('30310760');
    cy.get('.col-sm-4 > .form-control').type('100');
    cy.get(':nth-child(5) > .form-group > .form-control').type('Ap.9');
  
  
    cy.get('.user-form-container > .btn-primary-action').click()
  });
  
  it('Login Erro', () => {
    cy.visit('https://loja.depimiel.com/login');
    cy.get('.d-flex > .btn-primary-action').click(); 
  });

})