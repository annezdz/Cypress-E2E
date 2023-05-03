# Cypress Novo IB Framework



## Padrão escrita de Features - Cucumber

Visando padronizar as escritas das features, seguir os padrões abaixo:

### Feature

Cada funcionalidade tem um conjunto de tags que devem seguir as regras abaixo:


Feature: Acessar tela inicial Novo IB

Scenario: Acessar o link "Cadastre-se" via "Acesse sua conta"

@smoke
@regression
@#anne_zimmermann @squad_jetsons
@%cadastre_se_novo_ib
@NIB-165
Given estar na pagina "Acesse sua Conta" do Novo IB
And inserir um dado valido no campo "CPF, CNPJ ou Chave Multicanal"
And inserir um dado valido no campo "Senha de acesso" 
When clicar no botao "Entrar"
Then validar acesso a pagina "Primeiro Acesso"
