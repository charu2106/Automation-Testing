package TestRunnerpr;

import org.junit.runner.RunWith;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
	features = "src/test/java/PRFeature"
	,glue= {"PRstepdefn","hooks"}
	//dryRun = true,
	//monochrome = true

	//plugin = { "pretty" , "json:target/jsonreport.json"
	)
public class testrunner {
	
}
