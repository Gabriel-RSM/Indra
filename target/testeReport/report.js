$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CadastroCartao.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: gloureirog@indracompany.com"
    },
    {
      "line": 2,
      "value": "# encoding: iso-8859-1"
    }
  ],
  "line": 6,
  "name": "Registro de Tarjeta - Website Banco Ripley",
  "description": "\nYo como Analista de pruebas\nQuiero registrar una tarjeta",
  "id": "registro-de-tarjeta---website-banco-ripley",
  "keyword": "Feature",
  "tags": [
    {
      "line": 4,
      "name": "@ProjetoBancoRipley"
    }
  ]
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Registro de tarjeta",
  "description": "",
  "id": "registro-de-tarjeta---website-banco-ripley;registro-de-tarjeta",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@CT001"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "CT01 - Acceder la Página principal",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "CT01 - Acceda la página de tarjetas",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "CT01 - Añadir DNI \u003cdni\u003e válido",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "CT01 - Añadir Correo \u003ccorreo\u003e válido",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "CT01 - Clic en enviar",
  "keyword": "When "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "registro-de-tarjeta---website-banco-ripley;registro-de-tarjeta;",
  "rows": [
    {
      "cells": [
        "dni",
        "correo"
      ],
      "line": 23,
      "id": "registro-de-tarjeta---website-banco-ripley;registro-de-tarjeta;;1"
    },
    {
      "cells": [
        "\"123456\"",
        "\"indra@teste.com\""
      ],
      "line": 24,
      "id": "registro-de-tarjeta---website-banco-ripley;registro-de-tarjeta;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Registro de tarjeta",
  "description": "",
  "id": "registro-de-tarjeta---website-banco-ripley;registro-de-tarjeta;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@ProjetoBancoRipley"
    },
    {
      "line": 12,
      "name": "@CT001"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "CT01 - Acceder la Página principal",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "CT01 - Acceda la página de tarjetas",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "CT01 - Añadir DNI \"123456\" válido",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "CT01 - Añadir Correo \"indra@teste.com\" válido",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "CT01 - Clic en enviar",
  "keyword": "When "
});
formatter.match({
  "location": "CadastroCartaoTest.acessarPaginaCadastro()"
});
formatter.result({
  "duration": 9672306345,
  "status": "passed"
});
formatter.match({
  "location": "CadastroCartaoTest.clicarTarjeta()"
});
formatter.result({
  "duration": 4426129827,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "indra@teste.com",
      "offset": 22
    }
  ],
  "location": "CadastroCartaoTest.inserirCorreo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 463736536,
  "status": "passed"
});
});