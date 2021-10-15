package PRstepdefn;

import org.openqa.selenium.By;

//import org.openqa.selenium.Alert;
//import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
//import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.hookclass;
import junit.framework.Assert;

public class prstepdefn {
	WebDriver driver = hookclass.driver;

	@Given("^Admin is on the Uniform Application$")
	public void admin_is_on_the_Uniform_Application()  {
		System.out.println("Hello All!");
	}

	@When("^admin enters the username and password$")
	public void admin_enters_the_username_and_password() 
	{
		try
		{
		driver.findElement(By.name("username")).sendKeys("admin");
		driver.findElement(By.name("password")).sendKeys("admin@123");
		Thread.sleep(3000);
		}
		catch(Exception e)
		{
		System.out.println("User is not able to enter Loginin Credentials" +e);
		Assert.fail();
		}
	}

	@When("^admin on the Login button$")
	public void admin_on_the_Login_button()  {
		try
		{
		driver.findElement(By.xpath("(//*[@class='btn btn-primary'])")).click();
		Thread.sleep(3000);
		}
		catch(Exception e)
		{
		System.out.println("User is not able to click on Login Button" +e);
		Assert.fail();
		}
	}

	@Then("^admin will be redirected to the Dashboard of Uniform page$")
	public void admin_will_be_redirected_to_the_Dashboard_of_Uniform_page() 
	{
		try 
		{
			Thread.sleep(3000);
			String expectedtitle = "Dashboard";
			String actualtitle = driver.getTitle();
			Assert.assertEquals(expectedtitle, actualtitle);
		}
		catch(Exception e)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
		{
			System.out.println("User is not able to navigate thruugh the Dashboard" +e);
			Assert.fail();
		}
	}

	@Then("^admin will click on the Sales catalog and then will click on Returns$")
	public void admin_will_click_on_the_Sales_catalog_and_then_will_click_on_Returns() {
		try
		{
		driver.findElement(By.id("button-menu")).click();	
		Thread.sleep(3000); 
		driver.findElement(By.xpath("(//span[contains(text(),'Sales')])")).click();
		Thread.sleep(3000);
		driver.findElement(By.linkText("Returns")).click();
		Thread.sleep(3000);
		//a[contains(text(),'Sales')]
		}
		catch(Exception e)
		{
		System.out.println("User is not able to click on Returns category" +e);
		Assert.fail();
		}
	}

	@Then("^admin will be redirected to the Product Returns page$")
	public void admin_will_be_redirected_to_the_Product_Returns_page() {
		try 
		{
			String expectedtitle = "Product Returns";
			String actualtitle = driver.getTitle();
			Assert.assertEquals(expectedtitle, actualtitle);
			Thread.sleep(3000);
		}
		catch(Exception e)
		{
			System.out.println("User is not able to redirect to the Returns page" +e);
			Assert.fail();
		}
	}

	@When("^Admin clicks on Add new button$")
	public void admin_clicks_on_Add_new_button() {
		try
		{
		driver.findElement(By.xpath("//*[@id=\"content\"]/div[1]/div/div/a")).click();
		Thread.sleep(3000);
		}
		catch(Exception e)
		{
		System.out.println("User is not able to click on Login Button" +e);
		Assert.fail();
		}
}

	@Then("^admin will be redirected to the add Products return page$")
	public void admin_will_be_redirected_to_the_add_Products_return_page() {
		try 
		{
			String expectedtitle = "Product Returns";
			String actualtitle = driver.getTitle();
			Assert.assertEquals(expectedtitle, actualtitle);
			Thread.sleep(3000);
		}
		catch(Exception e)
		{
			System.out.println("User is not able to redirect to the Returns page" +e);
			Assert.fail();
		}
	}

	@Then("^admin enters \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void admin_enters(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7) {
		try
		{
		driver.findElement(By.name("order_id")).sendKeys(arg1);
		driver.findElement(By.xpath("//*[@id=\"input-date-ordered\"]")).sendKeys(arg2);
		driver.findElement(By.name("customer")).sendKeys(arg3);
		driver.findElement(By.name("firstname")).sendKeys(arg4);
		driver.findElement(By.name("lastname")).sendKeys(arg5);
		driver.findElement(By.name("email")).sendKeys(arg6);
		driver.findElement(By.name("telephone")).sendKeys(arg7);
		Thread.sleep(3000);
		}
		catch(Exception e)
		{
		System.out.println("User is not able to enter Signin Credentials" +e);
		Assert.fail();
		}
	}

	@Then("^admin enters \"([^\"]*)\" \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void admin_enters(String arg1, String arg2, String arg3, String arg4) throws Throwable {
		try
		{
		driver.findElement(By.name("product")).sendKeys(arg1);
		driver.findElement(By.name("model")).sendKeys(arg2);
		driver.findElement(By.name("quantity")).sendKeys(arg3);
		driver.findElement(By.name("comment")).sendKeys(arg4);		
		Thread.sleep(3000);
		}
		catch(Exception e)
		{
		System.out.println("User is not able to enter Add new Credentials" +e);
		Assert.fail();
		}
	}

	@Then("^admin set the Return status to \"([^\"]*)\", Opened to \"([^\"]*)\", Return Action to \"([^\"]*)\" and Return Status to \"([^\"]*)\"$")
	public void admin_set_the_Return_status_to_Opened_to_Return_Action_to_and_Return_Status_to(String arg1, String arg2, String arg3, String arg4) throws InterruptedException  {
		Select date = new Select(driver.findElement(By.name("return_reason_id")));
		date.selectByVisibleText(arg1);
		//Thread.sleep(3000);
		
		//WebElement search= driver.findElement(By.name("input-opened"));
		//search.sendKeys(arg1);
		//search.sendKeys(Keys.ENTER);
		//Thread.sleep(3000);
		
		/*
		 * WebElement data1=driver.findElement(By.id("input-opened")); data1.click();
		 * data1.sendKeys(arg1); data1.click();
		 */

		 Select dropdown1 = new Select(driver.findElement(By.id("input-opened")));  
		 dropdown1.selectByValue("1"); 

	       //Actions action1 = new Actions(arg2);
	       //action1.moveByOffset(2,2).perform();  
	       Thread.sleep(4000);
		
		//Select opened = new Select(driver.findElement(By.xpath("//option[contains(text(),'Opened')]")));
		//opened.selectByVisibleText(arg2);
		//Thread.sleep(3000);
		
		Select returnact = new Select(driver.findElement(By.name("return_action_id")));
		returnact.selectByVisibleText(arg3);
		Thread.sleep(3000);
		
		Select returnstat = new Select(driver.findElement(By.name("return_status_id")));
		returnstat.selectByVisibleText(arg4);
		Thread.sleep(3000);
		
	}

	@Then("^admin clicks on  Save button$")
	public void admin_clicks_on_Save_button() {
		try
		{
		driver.findElement(By.xpath("//button[@data-original-title='Save']")).click();
		Thread.sleep(3000);
		}
		catch(Exception e)
		{
		System.out.println("User is not able to click on Save Button" +e);
		}
	}

	@Then("^Admin checks the displayed message$")
	public void admin_checks_the_displayed_message() throws Throwable {
	    
		try
		{
			if(isDisplayed1())
			{
				System.out.println("Entered Order ID"+ " ");
				System.out.println(driver.findElement(By.xpath("//*[@class='alert alert-danger']")).getText());
			}
			else
			{
				System.out.println("Order ID is entered");

			}
			
			if(isDisplayed2())
			{
				System.out.println("Entered First Name"+ " ");
				System.out.println(driver.findElement(By.xpath("//*[@class='alert alert-danger']")).getText());
			}
			else
			{
				System.out.println("First Name is entered");

			}
			
			if(isDisplayed3())
			{
				System.out.println("Entered Last Name"+ " ");
				System.out.println(driver.findElement(By.xpath("//*[@class='alert alert-danger']")).getText());
			}
			else
			{
				System.out.println("Last Name is entered");

			}
			
			if(isDisplayed4())
			{
				System.out.println("Entered Email"+ " ");
				System.out.println(driver.findElement(By.xpath("//*[@class='alert alert-danger']")).getText());
			}
			else
			{
				System.out.println("Email is entered");

			}
			
			if(isDisplayed5())
			{
				System.out.println("Entered Telephone"+ " ");
				System.out.println(driver.findElement(By.xpath("//*[@class='alert alert-danger']")).getText());
			}
			else
			{
				System.out.println("Telephone number is entered");

			}
			
			if(isDisplayed6())
			{
				System.out.println("Entered Product Name"+ " ");
				System.out.println(driver.findElement(By.xpath("//*[@class='alert alert-danger']")).getText());
			}
			else
			{
				System.out.println("Product Name is entered");

			}
			
			if(isDisplayed7())
			{
				System.out.println("Entered Product Model"+ " ");
				System.out.println(driver.findElement(By.xpath("//*[@class='alert alert-danger']")).getText());
			}
			else
			{
				System.out.println("Product model is entered");

			}
			
			if(isDisplayed())
			{
				System.out.println("Valid message"+ " ");
				System.out.println(driver.findElement(By.xpath("//div[@class='alert alert-success']")));
			}
			
			
		}
		catch(Exception e)
		{
			System.out.println("Warning messages for Mandatory fields are not displayed");
	
		}
	}	
	
		
	public boolean isDisplayed1()
	{
		try
		{
			WebElement element = driver.findElement(By.xpath("//*[contains(text(),'Order ID required!')]"));
			boolean flag = element.isDisplayed();
			return flag;
			
		}
		catch(Exception e)
		{
			return false;
		}
	}
	
	public boolean isDisplayed2()
	{
		try
		{
			WebElement element = driver.findElement(By.xpath("//*[contains(text(),'First Name must be between 1 and 32 characters!')]"));
			boolean flag = element.isDisplayed();
			return flag;
			
		}
		catch(Exception e)
		{
			return false;
		}
	}
	
	
	public boolean isDisplayed3()
	{
		try
		{
			WebElement element = driver.findElement(By.xpath("//*[contains(text(),'Last Name must be between 1 and 32 characters!')]"));
			boolean flag = element.isDisplayed();
			return flag;
			
		}
		catch(Exception e)
		{
			return false;
		}
	}
	
	public boolean isDisplayed4()
	{
		try
		{
			WebElement element = driver.findElement(By.xpath("//*[contains(text(),'E-Mail Address does not appear to be valid!')]"));
			boolean flag = element.isDisplayed();
			return flag;
			
		}
		catch(Exception e)
		{
			return false;
		}
	}
	
	
	public boolean isDisplayed5()
	{
		try
		{
			WebElement element = driver.findElement(By.xpath("//*[contains(text(),'Telephone must be between 3 and 32 characters!')]"));
			boolean flag = element.isDisplayed();
			return flag;
			
		}
		catch(Exception e)
		{
			return false;
		}
	}
	
	
	public boolean isDisplayed6()
	{
		try
		{
			WebElement element = driver.findElement(By.xpath("//*[contains(text(),'Product Name must be greater than 3 and less than 255 characters!')]"));
			boolean flag = element.isDisplayed();
			return flag;
			
		}
		catch(Exception e)
		{
			return false;
		}
	}
	
	
	public boolean isDisplayed7()
	{
		try
		{
			WebElement element = driver.findElement(By.xpath("//*[contains(text(),' Warning: Please check the form carefully for errors!')]"));
			boolean flag = element.isDisplayed();
			return flag;
			
		}
		catch(Exception e)
		{
			return false;
		}
	}
	
	public boolean isDisplayed()
	{
		try
		{
			WebElement element = driver.findElement(By.xpath("//div[@class='alert alert-success']"));
			boolean flag = element.isDisplayed();
			return flag;
			
		}
		catch(Exception e)
		{
			return false;
		}
	}
		
	
	
	@Then("^admin will be redirected to the Products return page$")
	public void admin_will_be_redirected_to_the_Products_return_page() {
		try 
		{
			String expectedtitle = "Product Returns";
			String actualtitle = driver.getTitle();
			Assert.assertEquals(expectedtitle, actualtitle);
			Thread.sleep(3000);
		}
		catch(Exception e)
		{
			System.out.println("User is not able to redirect to the Returns page" +e);
			Assert.fail();
		}
	}
	

	/* Verifying Edit functionality*/
	
	@When("^Admin clicks on checkbox button$")
	public void admin_clicks_on_checkbox_button() throws Throwable {
		try
		{
		driver.findElement(By.xpath("//*[@id=\"form-return\"]/div/table/tbody/tr[1]/td[1]/input")).click();
		Thread.sleep(3000);
		}
		catch(Exception e)
		{
		System.out.println("User is not able to click on checkbox" +e);
		}
	}

	@When("^admin clicks on Edit button$")
	public void admin_clicks_on_Edit_button() throws Throwable {
		try
		{
		driver.findElement(By.xpath("//a[@data-original-title='Edit']")).click();
		Thread.sleep(3000);
		}
		catch(Exception e)
		{
		System.out.println("User is not able to click on Edit button" +e);
		}
	}

	@Then("^admin edits \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
	public void admin_edits_and(String arg1, String arg2, String arg3) throws Throwable {
		try
		{
		WebElement d1 = driver.findElement(By.name("order_id"));
		d1.clear();		
		d1.sendKeys(arg1);	
		WebElement d2 = driver.findElement(By.name("model"));
		d2.clear();
		d2.sendKeys(arg2);
		WebElement d3 = driver.findElement(By.name("quantity"));
		d3.clear();
		d3.sendKeys(arg3);
		Thread.sleep(3000);
		}
		catch(Exception e)
		{
		System.out.println("User is not able to edit Credentials" +e);
		Assert.fail();
		}
	}

	@Then("^admin set the Return status to \"([^\"]*)\"$")
	public void admin_set_the_Return_status_to(String arg1) throws Throwable {
		try
		{
			Select date = new Select(driver.findElement(By.name("return_reason_id")));
			date.selectByVisibleText(arg1);
			Thread.sleep(3000);
		}
		catch(Exception e)
		{
			System.out.println("User is not able to set return status" +e);
			Assert.fail();
		}
	}
	

	/* Verifying Cancel functionality*/
	
	
	@When("^Admin clicks on Add new button on homepage$")
	public void admin_clicks_on_Add_new_button_on_homepage() throws Throwable {
	    try 
	    {
	    	driver.findElement(By.xpath("//a[@data-original-title='Add New']")).click();
	    	Thread.sleep(3000);
	    	
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Admin is unable to click on the Add  button");
	    	Assert.fail();
	    }
	}

	@Then("^admin will be redirected to the add new Product's page$")
	public void admin_will_be_redirected_to_the_add_new_Product_s_page() throws Throwable {
		try 
		{
			String expecttitle = "Product Returns";
			String acttitle = driver.getTitle();
			Assert.assertEquals(expecttitle, acttitle);
			Thread.sleep(3000);
		}
		catch(Exception e)
		{
			System.out.println("User is not able to redirect to the add new Returns page" +e);
			Assert.fail();
		}
	}

	@Then("^admin enters the following \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void admin_enters_the_following(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7) throws Throwable {
		try
		{
		driver.findElement(By.name("order_id")).sendKeys(arg1);
		driver.findElement(By.xpath("//*[@id=\"input-date-ordered\"]")).sendKeys(arg2);
		driver.findElement(By.name("customer")).sendKeys(arg3);
		driver.findElement(By.name("firstname")).sendKeys(arg4);
		driver.findElement(By.name("lastname")).sendKeys(arg5);
		driver.findElement(By.name("email")).sendKeys(arg6);
		driver.findElement(By.name("telephone")).sendKeys(arg7);
		Thread.sleep(3000);
		}
		catch(Exception e)
		{
		System.out.println("User is not able to enter Signin Credentials" +e);
		Assert.fail();
		}

	}

	@Then("^admin also enters\"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void admin_also_enters(String arg1, String arg2, String arg3) throws Throwable {
		try
		{
		driver.findElement(By.name("product")).sendKeys(arg1);
		driver.findElement(By.name("model")).sendKeys(arg2);
		driver.findElement(By.name("quantity")).sendKeys(arg3);
		Thread.sleep(3000);
		}
		catch(Exception e)
		{
		System.out.println("User is not able to enter Signin Credentials" +e);
		Assert.fail();
		}
	}

	@Then("^admin set the Return Reason to \"([^\"]*)\", Opened to \"([^\"]*)\", Return Action to \"([^\"]*)\" and Return Status to \"([^\"]*)\"$")
	public void admin_set_the_Return_Reason_to_Opened_to_Return_Action_to_and_Return_Status_to(String arg1, String arg2, String arg3, String arg4) throws Throwable {
		Select date = new Select(driver.findElement(By.name("return_reason_id")));
		date.selectByVisibleText(arg1);
		Thread.sleep(3000);
		
		Select dropdown1 = new Select(driver.findElement(By.id("input-opened")));  
		dropdown1.selectByValue("0"); 
		Thread.sleep(3000);
		
		Select returnact = new Select(driver.findElement(By.name("return_action_id")));
		returnact.selectByVisibleText(arg3);
		Thread.sleep(3000);
		
		Select returnstat = new Select(driver.findElement(By.name("return_status_id")));
		returnstat.selectByVisibleText(arg4);
		Thread.sleep(3000);
		
	}

	@Then("^admin clicks on the Cancel button$")
	public void admin_clicks_on_the_Cancel_button() throws Throwable {
		 try 
		    {
		    	driver.findElement(By.xpath("//a[@data-original-title='Cancel']")).click();
		    	Thread.sleep(3000);
		    	
		    }
		    catch(Exception e)
		    {
		    	System.out.println("Admin is unable to click on the Cancel  button");
		    	Assert.fail();
		    }
	}

	/* Verifying Delete functionality*/
	
	@When("^Admin clicks on checkbox button to Delete row$")
	public void admin_clicks_on_checkbox_button_to_Delete_row() throws Throwable {
		try
		{
		driver.findElement(By.xpath("//input[@name='selected[]']")).click();
		Thread.sleep(3000);
		}
		catch(Exception e)
		{
		System.out.println("User is not able to click on checkbox" +e);
		}
	}

	@When("^admin clicks on Delete button$")
	public void admin_clicks_on_Delete_button() throws Throwable {
		try
		{
		driver.findElement(By.xpath("//button[@data-original-title='Delete']")).click();
		Thread.sleep(3000);
		}
		catch(Exception e)
		{
		System.out.println("User is not able to click on Delete button" +e);
		}
	}

	@Then("^admin gets a Alert message$")
	public void admin_gets_a_Alert_message() throws Throwable {
	    try
	    {
	    	driver.switchTo().alert().accept();
			Thread.sleep(3000);
			System.out.println("Delete Button clicked");
	    	
	    	//driver.findElement(By.cssSelector("input[value='526']")).click();
	    	Thread.sleep(3000);	    	
	    }
	    catch(Exception e)
	    {
			System.out.println("User is not able to get Alert message" +e);
	    }
	    
	}

	@Then("^admin gets redirected on the Homepage$")
	public void admin_gets_redirected_on_the_Homepage() throws Throwable {
		try 
		{
			String expectedtitle = "Product Returns";
			String actualtitle = driver.getTitle();
			Assert.assertEquals(expectedtitle, actualtitle);
			Thread.sleep(3000);
		}
		catch(Exception e)
		{
			System.out.println("User is not able to redirect to the Returns page" +e);
			Assert.fail();
		}
	}
	
	
	/* Verifying Filter functionality*/
	
	@When("^Admin enters \"([^\"]*)\"$")
	public void admin_enters(String arg1) throws Throwable {
		try
		{
		driver.findElement(By.name("filter_return_id")).sendKeys(arg1);
		Thread.sleep(3000);
		}
		catch(Exception e)
		{
		System.out.println("User is not able to enter Order id" +e);
		Assert.fail();
		}
	}

	@When("^clicks on Filter button$")
	public void clicks_on_Filter_button() throws Throwable {
		try
		{
		driver.findElement(By.xpath("//button[@id='button-filter']")).click();
		Thread.sleep(3000);
		}
		catch(Exception e)
		{
		System.out.println("User is not able to click on Filter button" +e);
		}
	}

	@Then("^admin gets filtered data$")
	public void admin_gets_filtered_data() throws Throwable {
	   try
	   {
		   if(isDisplay())
		   {
				System.out.println("User gets Filtered data");
		   }
		   else
		   {	
				System.out.println("User doesn't get Filtered data");

		   }
	   }
	   catch(Exception e)
	   {
			System.out.println("User is unable to get Filtered data" +e);

	   }
	}
	   
	   public boolean isDisplay() {
			 try {
			    WebElement element = driver.findElement(By.xpath("//td[contains(text(),'527')]"));
			     boolean flag = element.isDisplayed();
			     return flag;
			     } 
			 catch (Exception e) 
			 {
			    return false;
			 }
		  }
	
			/* Verifying Sorting functionality */
	   
	   
	   @When("^Admin clicks in Sort button on Return ID$")
	   public void admin_clicks_in_Sort_button_on_Return_ID() throws Throwable {
	      try
	      {
	    	  WebElement d1 = driver.findElement(By.xpath("//a[contains(text(),'Return ID')]"));
	    	  d1.click();
	    	  Thread.sleep(3000);
	    	  System.out.println("Admin is able to sort Return Id in ascending format");
	    	  
	    	  WebElement d2 = driver.findElement(By.xpath("//a[contains(text(),'Order ID')]"));
	    	  d2.click();
	    	  Thread.sleep(3000);
	    	  System.out.println("Admin is able to sort Order Id in ascending format");
	    	  
	    	  WebElement d3 = driver.findElement(By.linkText("Customer"));
	    	  d3.click();
	    	  Thread.sleep(3000);
	    	  System.out.println("Admin is able to sort Customer in ascending format");
	    	  
			  WebElement d4 = driver.findElement(By.linkText("Product"));
			  d4.click(); 
			  Thread.sleep(3000);
			  System.out.println("Admin is able to Product in ascending format");
	
			  WebElement d5 = driver.findElement(By.xpath("//*[@id=\"form-return\"]/div/table/thead/tr/td[6]/a"));
			  d5.click(); 
			  Thread.sleep(3000);
			  System.out.println("Admin is able to sort Model in ascending format");
	    
			  WebElement d6 = driver.findElement(By.xpath("//*[@id=\"form-return\"]/div/table/thead/tr/td[7]/a"));
	    	  d6.click();
	    	  Thread.sleep(3000);
	    	  System.out.println("Admin is able to sort Status in ascending format");
	    	  
	    	  WebElement d7 = driver.findElement(By.xpath("//*[@id=\"form-return\"]/div/table/thead/tr/td[8]/a"));
	    	  d7.click();
	    	  Thread.sleep(3000);
	    	  System.out.println("Admin is able to sort Date Added in ascending format");
	    	  
	    	  WebElement d8 = driver.findElement(By.xpath("//*[@id=\"form-return\"]/div/table/thead/tr/td[9]/a"));
	    	  d8.click();
	    	  Thread.sleep(3000);
	    	  System.out.println("Admin is able to sort Date Modified in ascending format");
	    	  
	    	  
	    	  
	      }
	      catch(Exception e)
	      {
	    	  System.out.println("Admin is unable to sort data in ascending format");

	      }
	      
	      
	   }

	   @Then("^Admin gets sorted data in ascending form$")
	   public void admin_gets_sorted_data_in_ascending_form() throws Throwable {
		    try
		      {
		    	  System.out.println("Data sorted in ascending format is Displayed");
		    	  Thread.sleep(3000);
		      }
		      catch(Exception e)
		      {
		    	  System.out.println("Data sorted in ascending format is not displayed");

		      }
	   }
	
	
		/* Verify Bug functionality */	
	
	   @When("^Admin clicks on Add button on Products page$")
	   public void admin_clicks_on_Add_button_on_Products_page() throws Throwable {
		   try
			{
			driver.findElement(By.xpath("//*[@id=\"content\"]/div[1]/div/div/a")).click();
			Thread.sleep(3000);
			}
			catch(Exception e)
			{
			System.out.println("User is not able to click on Login Button" +e);
			Assert.fail();
			}
	   }

	   @Then("^admin will be redirected to the add new Products return page$")
	   public void admin_will_be_redirected_to_the_add_new_Products_return_page() throws Throwable {
		   try 
			{
				String expectedtitle = "Product Returns";
				String actualtitle = driver.getTitle();
				Assert.assertEquals(expectedtitle, actualtitle);
				Thread.sleep(3000);
			}
			catch(Exception e)
			{
				System.out.println("User is not able to redirect to the Returns page" +e);
				Assert.fail();
			}
	   }

	   @Then("^admin enters data for \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	   public void admin_enters_data_for(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7) throws Throwable {
				try
				{
				driver.findElement(By.name("order_id")).sendKeys(arg1);
				driver.findElement(By.xpath("//*[@id=\"input-date-ordered\"]")).sendKeys(arg2);
				driver.findElement(By.name("customer")).sendKeys(arg3);
				driver.findElement(By.name("firstname")).sendKeys(arg4);
				driver.findElement(By.name("lastname")).sendKeys(arg5);
				driver.findElement(By.name("email")).sendKeys(arg6);
				driver.findElement(By.name("telephone")).sendKeys(arg7);
				Thread.sleep(3000);
				}
				catch(Exception e)
				{
				System.out.println("User is not able to enter Signin Credentials" +e);
				Assert.fail();
				}
	   }

	   @Then("^admin enters data for \"([^\"]*)\" \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	   public void admin_enters_data_for(String arg1, String arg2, String arg3, String arg4) throws Throwable {
		   try
			{
			driver.findElement(By.name("product")).sendKeys(arg1);
			driver.findElement(By.name("model")).sendKeys(arg2);
			driver.findElement(By.name("quantity")).sendKeys(arg3);
			driver.findElement(By.name("comment")).sendKeys(arg4);		
			Thread.sleep(3000);
			}
			catch(Exception e)
			{
			System.out.println("User is not able to enter Add new Credentials" +e);
			Assert.fail();
			}
	   }

	   @Then("^admin sets the following Return status to \"([^\"]*)\", Opened to \"([^\"]*)\", Return Action to \"([^\"]*)\" and Return Status to \"([^\"]*)\"$")
	   public void admin_sets_the_following_Return_status_to_Opened_to_Return_Action_to_and_Return_Status_to(String arg1, String arg2, String arg3, String arg4) throws Throwable {
		   Select date = new Select(driver.findElement(By.name("return_reason_id")));
			date.selectByVisibleText(arg1);
			Thread.sleep(3000);
			
			 Select dropdown1 = new Select(driver.findElement(By.id("input-opened")));  
			 dropdown1.selectByValue("1"); 
	         Thread.sleep(4000);

			Select returnact = new Select(driver.findElement(By.name("return_action_id")));
			returnact.selectByVisibleText(arg3);
			Thread.sleep(3000);
			
			Select returnstat = new Select(driver.findElement(By.name("return_status_id")));
			returnstat.selectByVisibleText(arg4);
			Thread.sleep(3000);
			
	   }

	   @Then("^admin clicks on  Save button after data is entered$")
	   public void admin_clicks_on_Save_button_after_data_is_entered() throws Throwable {
		   try
			{
			driver.findElement(By.xpath("//button[@data-original-title='Save']")).click();
			Thread.sleep(3000);
			}
			catch(Exception e)
			{
			System.out.println("User is not able to click on Save Button" +e);
			}
	   }

	   
	   
	   
	   
	   
}
