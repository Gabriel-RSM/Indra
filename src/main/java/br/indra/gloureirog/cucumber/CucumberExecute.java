package br.indra.gloureirog.cucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class) 
@CucumberOptions(features = "src/main/java/br/indra/gloureirog/cucumber/", 
plugin = {"html:target/testeReport", "pretty", "json:target/test-reportEmailFax.json"}, glue = {""}, monochrome = true, dryRun = false) 

public class CucumberExecute 
{
	
}
