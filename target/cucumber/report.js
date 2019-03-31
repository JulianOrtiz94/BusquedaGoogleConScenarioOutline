$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/GoogleSearchWithData.feature");
formatter.feature({
  "name": "Buscar en google con datos desde el feature",
  "description": "  Arthur quiere hacer una busqueda en google con datos",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Buscar en google",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "arthur esta en el sitio google",
  "keyword": "Given "
});
formatter.step({
  "name": "el busca la frase  \"\u003cpalabra\u003e\" comuesta \"\u003cpalabrados\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "el verifica que la \"\u003cpalabra\u003e\" este en los resultados",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "palabra",
        "palabrados"
      ]
    },
    {
      "cells": [
        "switch",
        "try"
      ]
    },
    {
      "cells": [
        "shopos",
        "sholutions"
      ]
    },
    {
      "cells": [
        "liungjknsihfwe",
        "liungjknsihfwe"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Buscar en google",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "arthur esta en el sitio google",
  "keyword": "Given "
});
formatter.match({
  "location": "GoogleSearchWithDataStepDefinition.arthurEstaEnElSitioGoogle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el busca la frase  \"switch\" comuesta \"try\"",
  "keyword": "When "
});
formatter.match({
  "location": "GoogleSearchWithDataStepDefinition.el_busca_la_frase_comuesta(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el verifica que la \"switch\" este en los resultados",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearchWithDataStepDefinition.elVerificaQueLaEsteEnLosResultados(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Buscar en google",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "arthur esta en el sitio google",
  "keyword": "Given "
});
formatter.match({
  "location": "GoogleSearchWithDataStepDefinition.arthurEstaEnElSitioGoogle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el busca la frase  \"shopos\" comuesta \"sholutions\"",
  "keyword": "When "
});
formatter.match({
  "location": "GoogleSearchWithDataStepDefinition.el_busca_la_frase_comuesta(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el verifica que la \"shopos\" este en los resultados",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearchWithDataStepDefinition.elVerificaQueLaEsteEnLosResultados(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Buscar en google",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "arthur esta en el sitio google",
  "keyword": "Given "
});
formatter.match({
  "location": "GoogleSearchWithDataStepDefinition.arthurEstaEnElSitioGoogle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el busca la frase  \"liungjknsihfwe\" comuesta \"liungjknsihfwe\"",
  "keyword": "When "
});
formatter.match({
  "location": "GoogleSearchWithDataStepDefinition.el_busca_la_frase_comuesta(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el verifica que la \"liungjknsihfwe\" este en los resultados",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearchWithDataStepDefinition.elVerificaQueLaEsteEnLosResultados(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
});