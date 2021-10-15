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
    Then admin enters "<Comments>" "<Product>", "<Model>", "<Quantity>"
    Then admin set the Return status to "Received Wrong Item", Opened to "Opened", Return Action to "Refunded" and Return Status to "Pending"
    #select options for "<Return Reason>", "<Opened>", "<Return Action>" and "<Return Status>"
    And admin clicks on  Save button
    Then Admin checks the displayed message
    Then admin will be redirected to the Products return page

    Examples: 
      | Order ID | Order_Date | Customer         | First Name | Last Name  | Email              | Telephone | Comments          | Product     | Model    | Quantity |
      |       21 | 2021-10-11 | Rachel Green     | Rachel     | Green      | grach@gmail.com    | 987654332 | Best Quality      | Sbags       | Sb2s     |        1 |
      |          | 2021-10-11 | Chandler101 Bing | Chandler   | Bing001    | ccles@gmail.com    | 987654321 | Okay Okayish      |             | Ts10a    |        2 |
      |   101110 |            | Chandler Bing    | Chand101   | Bing       | ccles@gmail.com    |    000000 | Formal Shirt      | Fs10a       | 2$       | abc      |
      |     1101 | 2021-10-11 | Chloe deckar     | Chandler   | Bing       | ccles@gmail.com    | abcde12   | Good Quality      | Tshirt      | Ts10a    |        2 |
      | abc!&    | 2021-10-11 | Ro$$ Geller      |            | Geller101! | GELROSS@GMAIL.COM  |     98765 | Not good 00@      |             | Ts10a@   |        0 |
      |      101 | 2021-07-11 | Chandler Bing    | @$%^&      | biNG       | ccles123gmail.com  |    683689 | Perfect fitting   | Jeans2a     | Ts10a    |          |
      | @#$%     | 2020-10-11 |                  | Joey       | 101$%      | ccles@gmail.com    | 987ab&$   | okay product      | &*()        | @!$%^    |    22345 |
      |      101 | 20-10-2021 | Pheebe Buffay    | Pho ebe    | Buffay     | pheebuff@gmail.com |           | Different product | BeltTST     |          |        2 |
      |      117 | 2021-10-11 | Chandler Bing    |    2106999 | Bing       |                    | 684210738 |                   | FormalShirt | Ts10a    |        2 |
      |       41 | 2021-10-11 | Chandler Bing    | Chandler   | Bing       | ccles@             |    000000 | Good quality      | dguGDI      | Btr23    |        7 |
      |       10 | 2021-10-11 | Chandler Bing    | Chandler   | Bi ng      | ccles@gmail.com    |    526567 | Poor Quality      | Handbag     | tCBHGD72 |          |

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
			|      527A |
		  |      SVDJ12 |
		  |      527@$ |
		  |      $$123 |
		  
			
  Scenario: Verifying Sorting Functionality
    When Admin clicks in Sort button on Return ID
    Then Admin gets sorted data in ascending form
    And admin gets redirected on the Homepage

  Scenario Outline: Verify Bug functionality
    When Admin clicks on Add button on Products page
    Then admin will be redirected to the add new Products return page
    Then admin enters data for "<Order ID>", "<Order_Date>", "<Customer>", "<First Name>", "<Last Name>", "<Email>", "<Telephone>"
    Then admin enters data for "<Comments>" "<Product>", "<Model>", "<Quantity>"
    Then admin sets the following Return status to "Received Wrong Item", Opened to "Opened", Return Action to "Refunded" and Return Status to "Pending"
    And admin clicks on  Save button after data is entered
    Then admin will be redirected to the Products return page

    Examples: 
      | Order ID | Order_Date | Customer      | First Name | Last Name  | Email             | Telephone | Comments          | Product | Model       | Quantity |
      |       21 | 2021-10-11 | Rachel Green  | Rachel     | Green      | grach@gmail.com   | 987654332 | Best Quality      | Sbags   | Sb2FG       |        1 |
      | qwertyui | 2021-10-11 | Chandler Bing | Chandler   | Bing       | ccles@gmail.com   | 987654321 | Okay Okayish      | Tshirt  | Ts10a       |        2 |
      |      000 | 2021-10-1  | Chandler Bing | Chand101   | Bing       | ccles@gmail.com   |    000000 | Formal Shirt      | Fs10a   | 2$          | abc      |
      |      101 | 2021-10-11 | cHLOE DECKAR  | Chandler   | Bing       | ccles@gmail.com   |  56758798 | Good Quality      | Tshirt  | Ts10a       |        2 |
      | abc!&    | 2021-10-11 | Ro$$ Geller   | Ross       | Geller101! | GELROSS@GMAIL.COM |     98765 | Not good 00@      | Bag123  | Ts10a@      |        2 |
      |      101 | 21-11-2020 | Chandler Bing | @$%^&      | vdavid     | ccles123gmail.com |         9 | Perfect fitting   | Jeans2a | Ts10a       |        0 |
      | @*$%     | 2020-10-11 | Joey Tribiani | Joey       | 101$%      | &HSA@GMAIL.COM    | 987ab&$   | okay product      | &*()    | @!$%^       |    22345 |
      | abc      | 2021-10-08 | Pheebe Buffay | Pho ebe    | Buffay     | 1234@gmail.com    |           | Different product | BeltTST | Ts10a       |        2 |
      | 11 7     | 2021-10-11 | Chandler Bing |    2106999 | Bing       | ccles@gmail.com   | 684210738 | fine product      | BeltTST | FormalShirt | Ts10a    |
      |       41 | 2021/10/11 | Chandler Bing | Chandler   | Bing       | ccles@gmail.com   |    000000 | Good quality      | BeltTST | Btr23       |        7 |
      |       10 | 2021-10-11 | Chandler Bing | Chandler   | Bi$ng      | ccles@gmail.com   |    526567 | Poor Quality      | Handbag | dgaus78     |          |
      |     0000 | 2021-10-11 | Chandler Bing | Chandler   | Bi ng      | ccles@GMAIL.COM   |    526567 | 00@%^&            | Handbag | dkad8&&     |        2 |
