package co.com.google.qa.googlesearchwithdata.stepsdefinitions;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import co.com.googlepom.BuscarEnGooglePom;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GoogleSearchWithDataStepDefinition {
	private BuscarEnGooglePom buscarEnGooglePom;
	WebDriver driver;
	@Given("arthur esta en el sitio google")
	public void arthurEstaEnElSitioGoogle() {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "C:\\SELENIUM\\chromedriver.exe");
		driver = new ChromeDriver();
		buscarEnGooglePom = new BuscarEnGooglePom(driver);
		
		
		driver.manage().window().maximize();
		driver.get("http://www.google.com.co");
	}

	@When("el busca la palabra {string}")
	public void elBuscaLaPalabra(String palabra) {
	    // Write code here that turns the phrase above into concrete actions
		buscarEnGooglePom.EscribirElTextoABuscar(palabra);
	
		buscarEnGooglePom.DarClickBotonBuscar();
	}
	
	@When("el busca la frase  {string} comuesta {string}")
	public void el_busca_la_frase_comuesta(String palabra, String palabra2) {
	    // Write code here that turns the phrase above into concrete actions
		buscarEnGooglePom.EscribirElTextoABuscar(palabra + " " + palabra2);
		
		buscarEnGooglePom.DarClickBotonBuscar();
	}


	@Then("el verifica que la {string} este en los resultados")
	public void elVerificaQueLaEsteEnLosResultados(String palabra) {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("verificar "  + palabra);
		assertTrue(driver.getPageSource().contains(palabra));
	}

	@After()
	public void tomar_screenshot(Scenario s) throws InterruptedException
	{
	    Thread.sleep(2000);

	    final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
	    s.embed(screenshot, "image/png");

	    driver.quit();
	}
}
