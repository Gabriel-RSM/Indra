#Author: gloureirog@indracompany.com
# encoding: iso-8859-1

@ProjetoBancoRipley

Feature: Registro de Tarjeta - Website Banco Ripley

Yo como Analista de pruebas
Quiero registrar una tarjeta
 

@CT001

Scenario Outline:  Registro de tarjeta

Given CT01 - Acceder la Página principal
When CT01 - Acceda la página de tarjetas
When CT01 - Añadir DNI <dni> válido
When CT01 - Añadir Correo <correo> válido
When CT01 - Clic en enviar  

Examples:
|dni		   |correo           |
|"123456"  |"indra@teste.com"|

