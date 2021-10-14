package hooks;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class hookclass {
	public static WebDriver driver;
	
	@Before
	public void initialization()
	{
		System.setProperty("webdriver.chrome.driver","C:\\Users\\lenovo\\Documents\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://uniformm1.upskills.in/admin");
	}
	
	@After
	public void closeddriver()
	{
		System.out.println("Browser is closing now");
		//driver.quit();
		
	}
	
}
