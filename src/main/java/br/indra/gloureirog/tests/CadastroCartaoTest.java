package br.indra.gloureirog.tests;

import static br.indra.gloureirog.core.DriverFactory.getDriver;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.By.ByLinkText;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.interactions.ClickAction;

import br.indra.gloureirog.core.BasePage;
import br.indra.gloureirog.core.DriverFactory;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class CadastroCartaoTest {

	BasePage page = new BasePage();

	/*---- CT01 ----*/

	@Given("^CT01 - Acceder la Página principal$")
	public void acessarPaginaCadastro() throws Throwable {
		getDriver().get("http://www.bancoripley.com.pe/bancoripley/home/index.html");

	}

	@When("^CT01 - Acceda la página de tarjetas$")
	public void clicarTarjeta() throws Throwable {

		WebElement a1 = DriverFactory.getDriver().findElement(By.id("m_creditos"));
		WebElement a2 = DriverFactory.getDriver().findElement(By.id("MMMenu0805194703_0_Item_0"));

		String mouseOverScript1 =

				"if(document.createEvent){var evObj = document.createEvent('MouseEvents');"
						+ "evObj.initEvent('mouseover',true, false); arguments[0].dispatchEvent(evObj);} "
						+ "else if(document.createEventObject) { arguments[0].fireEvent('onmouseover');}";

		((JavascriptExecutor) DriverFactory.getDriver()).executeScript(mouseOverScript1, a1);
		Thread.sleep(1000);
		((JavascriptExecutor) DriverFactory.getDriver()).executeScript(mouseOverScript1, a2);
		Thread.sleep(1000);
		((JavascriptExecutor) DriverFactory.getDriver()).executeScript("arguments[0].click();", a2);
	}
	

//	@When("^CT01 - Añadir DNI \"(.*?)\" válido$")
//	public void inserirDni(String dni) throws Throwable {
//		page.escreverWaitId("userDNI", dni);
//
//
//	}

	@When("^CT01 - Añadir Correo \"(.*?)\" válido$")
	public void inserirCorreo(String correo) throws Throwable {

		WebElement c1 = DriverFactory.getDriver().findElement(By.id("m_creditos"));
		WebElement c2 = DriverFactory.getDriver().findElement(By.id("MMMenu0805194703_0_Item_1"));

		String mouseOverScript3 =

				"if(document.createEvent){var evObj = document.createEvent('MouseEvents');"
						+ "evObj.initEvent('mouseover',true, false); arguments[0].dispatchEvent(evObj);} "
						+ "else if(document.createEventObject) { arguments[0].fireEvent('onmouseover');}";

		((JavascriptExecutor) DriverFactory.getDriver()).executeScript(mouseOverScript3, c1);
		Thread.sleep(1000);
		((JavascriptExecutor) DriverFactory.getDriver()).executeScript(mouseOverScript3, c2);
		Thread.sleep(1000);
		((JavascriptExecutor) DriverFactory.getDriver()).executeScript("arguments[0].click();", c2);
	}
}
//
// @When("^CT01 - Clic en enviar$")
// public void acessarTelaTipoAutorizacao() throws Throwable {
// page.clicarWaitXpath("//*[@id=\"form1\"]/a");
// }

/*---- CT001 ----*/
