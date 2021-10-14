Feature: Uniform Website feature

  Background: Verify Signin Functionality
    Given Admin is on the Uniform Application
    When admin enters the username and password
    And admin on the Login button
    Then admin will be redirected to the Dashboard of Uniform page
    Then admin will click on the Sales catalog and then will click on Returns
    Then admin will be redirected to the Product Returns page

  Scenario Outline: Verify Add new Functionality
    When Admin clicks on Add new button
    Then admin will be redirected to the add Products return page
    Then admin enters "<Order ID>", "<Order_Date>", "<Customer>", "<First Name>", "<Last Name>", "<Email>", "<Telephone>"
    Then admin enters "<Product>", "<Model>", "<Quantity>"
    Then admin set the Return status to "Received Wrong Item", Opened to "Opened", Return Action to "Refunded" and Return Status to "Pending"
    #select options for "<Return Reason>", "<Opened>", "<Return Action>" and "<Return Status>"
    And admin clicks on  Save button
    Then admin will be redirected to the Products return page

    Examples: 
      | Order ID | Order_Date | Customer      | First Name | Last Name | Email           | Telephone | Product | Model | Quantity |
      |      101 | 2021-10-11 | Chandler Bing | Chandler   | Bing      | ccles@gmail.com | 987654321 | Tshirt  | Ts10a |        2 |

  #|   101ab@ | 2021-10-11  | Chandler Bing | Chand101| Bing      | ccles@gmail.com | 987654321 | Tshirt  | Ts10a |        2 |
  #|      101 | 2021-10-11  | Chandler Bing | Chandler   | Bing      | ccles@gmail.com | 987654321 | Tshirt  | Ts10a |        2 |
  #| abc!&#   | 2021-10-11 | Chandler Bing | Chandler#  | Bing101!  | ccles@gmail.com |     98765 | Bag123  | Ts10a@ |        0 |
  #|      101 | 2021-10-11  | Chandler Bing | #@$%^&   | 78961      | ccles123gmail.com | 9 | Jeans2a  | Ts10a |        2 |
  # Telephone and email arent valid----------->
  #|      @#$% | 2020-10-11  | Chandler Bing | Chandler   | Bing      | ccles@gmail.com | 987654321 | #&*()  | @!$%^ |        22345 |
  # Order Id takes 0, test case fails------------->
  #|        1 | 2021-10-11 | Chandler Bing | Chandler   | Bing      | ccles@gmail.com |           | Tshirt  | Ts10a |        2 |
  #Mandatory fields missing----------------->
  
  Scenario Outline: Verify Edit Functionality
    When Admin clicks on checkbox button
    And admin clicks on Edit button
    Then admin edits "<Order ID>", "<Model>" and "<Quantity>"
    Then admin set the Return status to "Order Error"
    And admin clicks on  Save button
    Then admin will be redirected to the Products return page

    Examples: 
      | Order ID | Model | Quantity |
      |     1001 | Bag2a |        3 |

  Scenario Outline: Verify Cancel Functionality
    When Admin clicks on Add new button on homepage
    Then admin will be redirected to the add new Product's page
    Then admin enters the following "<Order ID>", "<Order_Date>", "<Customer>", "<First Name>", "<Last Name>", "<Email>", "<Telephone>"
    Then admin also enters"<Product>", "<Model>", "<Quantity>"
    Then admin set the Return Reason to "Dead On Arrival", Opened to "Unopened", Return Action to "Replacement Sent" and Return Status to "Complete"
    And admin clicks on the Cancel button
    Then admin will be redirected to the Products return page

    Examples: 
      | Order ID | Order_Date | Customer      | First Name | Last Name | Email            | Telephone  | Product     | Model   | Quantity |
      |      100 | 2021-09-21 | Monica Geller | Monica     | Geller    | monmon@gmail.com | 7765432890 | FormalShirt | Fsmed32 |        1 |

  Scenario: Verify Delete functionality
    When Admin clicks on checkbox button to Delete row
    And admin clicks on Delete button
    Then admin gets a Alert message
    And admin gets redirected on the Homepage

  Scenario Outline: Verify Filter functionality
    When Admin enters "<Return_ID>"
    And clicks on Filter button
    Then admin gets filtered data
		And admin gets redirected on the Homepage
		
    Examples: 
      | Return_ID |
      |       527 |
     #|       527 |
     
     
   Scenario: Verifying Sorting Functionality
   When Admin clicks in Sort button on Return ID
   Then Admin gets sorted data in ascending form
   And admin gets redirected on the Homepage
   
     
     
      
