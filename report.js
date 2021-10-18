$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("signin.feature");
formatter.feature({
  "line": 1,
  "name": "Uniform Website feature",
  "description": "",
  "id": "uniform-website-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify Add new Functionality",
  "description": "",
  "id": "uniform-website-feature;verify-add-new-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on Add new button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "admin will be redirected to the add Products return page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "admin enters \"\u003cOrder ID\u003e\", \"\u003cOrder_Date\u003e\", \"\u003cCustomer\u003e\", \"\u003cFirst Name\u003e\", \"\u003cLast Name\u003e\", \"\u003cEmail\u003e\", \"\u003cTelephone\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "admin enters \"\u003cComments\u003e\" \"\u003cProduct\u003e\", \"\u003cModel\u003e\", \"\u003cQuantity\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "admin set the Return status to \"Received Wrong Item\", Opened to \"Opened\", Return Action to \"Refunded\" and Return Status to \"Pending\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#select options for \"\u003cReturn Reason\u003e\", \"\u003cOpened\u003e\", \"\u003cReturn Action\u003e\" and \"\u003cReturn Status\u003e\""
    }
  ],
  "line": 18,
  "name": "admin clicks on  Save button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Admin checks the displayed message",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "admin will be redirected to the Products return page",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "uniform-website-feature;verify-add-new-functionality;",
  "rows": [
    {
      "cells": [
        "Order ID",
        "Order_Date",
        "Customer",
        "First Name",
        "Last Name",
        "Email",
        "Telephone",
        "Comments",
        "Product",
        "Model",
        "Quantity"
      ],
      "line": 23,
      "id": "uniform-website-feature;verify-add-new-functionality;;1"
    },
    {
      "cells": [
        "21",
        "2021-10-11",
        "Rachel Green",
        "Rachel",
        "Green",
        "grach@gmail.com",
        "987654332",
        "Best Quality",
        "Sbags",
        "Sb2s",
        "1"
      ],
      "line": 24,
      "id": "uniform-website-feature;verify-add-new-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "Verify Signin Functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the Uniform Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin enters the username and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin on the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "admin will be redirected to the Dashboard of Uniform page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "admin will click on the Sales catalog and then will click on Returns",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "admin will be redirected to the Product Returns page",
  "keyword": "Then "
});
formatter.match({
  "location": "prstepdefn.admin_is_on_the_Uniform_Application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_enters_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_on_the_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Dashboard_of_Uniform_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_click_on_the_Sales_catalog_and_then_will_click_on_Returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Product_Returns_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 24,
  "name": "Verify Add new Functionality",
  "description": "",
  "id": "uniform-website-feature;verify-add-new-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on Add new button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "admin will be redirected to the add Products return page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "admin enters \"21\", \"2021-10-11\", \"Rachel Green\", \"Rachel\", \"Green\", \"grach@gmail.com\", \"987654332\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "admin enters \"Best Quality\" \"Sbags\", \"Sb2s\", \"1\"",
  "matchedColumns": [
    7,
    8,
    9,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "admin set the Return status to \"Received Wrong Item\", Opened to \"Opened\", Return Action to \"Refunded\" and Return Status to \"Pending\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#select options for \"\u003cReturn Reason\u003e\", \"\u003cOpened\u003e\", \"\u003cReturn Action\u003e\" and \"\u003cReturn Status\u003e\""
    }
  ],
  "line": 18,
  "name": "admin clicks on  Save button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Admin checks the displayed message",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "admin will be redirected to the Products return page",
  "keyword": "Then "
});
formatter.match({
  "location": "prstepdefn.admin_clicks_on_Add_new_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_add_Products_return_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 14
    },
    {
      "val": "2021-10-11",
      "offset": 20
    },
    {
      "val": "Rachel Green",
      "offset": 34
    },
    {
      "val": "Rachel",
      "offset": 50
    },
    {
      "val": "Green",
      "offset": 60
    },
    {
      "val": "grach@gmail.com",
      "offset": 69
    },
    {
      "val": "987654332",
      "offset": 88
    }
  ],
  "location": "prstepdefn.admin_enters(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Best Quality",
      "offset": 14
    },
    {
      "val": "Sbags",
      "offset": 29
    },
    {
      "val": "Sb2s",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 46
    }
  ],
  "location": "prstepdefn.admin_enters(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Received Wrong Item",
      "offset": 32
    },
    {
      "val": "Opened",
      "offset": 65
    },
    {
      "val": "Refunded",
      "offset": 92
    },
    {
      "val": "Pending",
      "offset": 124
    }
  ],
  "location": "prstepdefn.admin_set_the_Return_status_to_Opened_to_Return_Action_to_and_Return_Status_to(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_clicks_on_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_checks_the_displayed_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Products_return_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 26,
      "value": "# |          | 2021-10-11 | Chandler101 Bing | Chandler   | Bing001    | ccles@gmail.com    | 987654321 | Okay Okayish      |             | Ts10a    |        2 |"
    },
    {
      "line": 27,
      "value": "# |   101110 |            | Chandler Bing    | Chand101   | Bing       | ccles@gmail.com    |    000000 | Formal Shirt      | Fs10a       | 2$       | abc      |"
    },
    {
      "line": 28,
      "value": "#|     1101 | 2021-10-11 | Chloe deckar     | Chandler   | Bing       | ccles@gmail.com    | abcde12   | Good Quality      | Tshirt      | Ts10a    |        2 |"
    },
    {
      "line": 29,
      "value": "#| abc!\u0026    | 2021-10-11 | Ro$$ Geller      |            | Geller101! | GELROSS@GMAIL.COM  |     98765 | Not good 00@      |             | Ts10a@   |        0 |"
    },
    {
      "line": 30,
      "value": "#|      101 | 2021-07-11 | Chandler Bing    | @$%^\u0026      | biNG       | ccles123gmail.com  |    683689 | Perfect fitting   | Jeans2a     | Ts10a    |          |"
    },
    {
      "line": 31,
      "value": "#| @#$%     | 2020-10-11 |                  | Joey       | 101$%      | ccles@gmail.com    | 987ab\u0026$   | okay product      | \u0026*()        | @!$%^    |    22345 |"
    },
    {
      "line": 32,
      "value": "#|      101 | 20-10-2021 | Pheebe Buffay    | Pho ebe    | Buffay     | pheebuff@gmail.com |           | Different product | BeltTST     |          |        2 |"
    },
    {
      "line": 33,
      "value": "#|      117 | 2021-10-11 | Chandler Bing    |    2106999 | Bing       |                    | 684210738 |                   | FormalShirt | Ts10a    |        2 |"
    },
    {
      "line": 34,
      "value": "#|       41 | 2021-10-11 | Chandler Bing    | Chandler   | Bing       | ccles@             |    000000 | Good quality      | dguGDI      | Btr23    |        7 |      #|       10 | 2021-10-11 | Chandler Bing    | Chandler   | Bi ng      | ccles@gmail.com    |    526567 | Poor Quality      | Handbag     | tCBHGD72 |          |"
    }
  ],
  "line": 35,
  "name": "Verify Edit Functionality",
  "description": "",
  "id": "uniform-website-feature;verify-edit-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "Admin clicks on checkbox button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "admin clicks on Edit button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "admin edits \"\u003cOrder ID\u003e\", \"\u003cModel\u003e\" and \"\u003cQuantity\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "admin set the Return status to \"Order Error\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "admin clicks on  Save button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "admin will be redirected to the Products return page",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "uniform-website-feature;verify-edit-functionality;",
  "rows": [
    {
      "cells": [
        "Order ID",
        "Model",
        "Quantity"
      ],
      "line": 44,
      "id": "uniform-website-feature;verify-edit-functionality;;1"
    },
    {
      "cells": [
        "1001",
        "Bag2a",
        "3"
      ],
      "line": 45,
      "id": "uniform-website-feature;verify-edit-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "Verify Signin Functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the Uniform Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin enters the username and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin on the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "admin will be redirected to the Dashboard of Uniform page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "admin will click on the Sales catalog and then will click on Returns",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "admin will be redirected to the Product Returns page",
  "keyword": "Then "
});
formatter.match({
  "location": "prstepdefn.admin_is_on_the_Uniform_Application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_enters_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_on_the_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Dashboard_of_Uniform_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_click_on_the_Sales_catalog_and_then_will_click_on_Returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Product_Returns_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 45,
  "name": "Verify Edit Functionality",
  "description": "",
  "id": "uniform-website-feature;verify-edit-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "Admin clicks on checkbox button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "admin clicks on Edit button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "admin edits \"1001\", \"Bag2a\" and \"3\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "admin set the Return status to \"Order Error\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "admin clicks on  Save button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "admin will be redirected to the Products return page",
  "keyword": "Then "
});
formatter.match({
  "location": "prstepdefn.admin_clicks_on_checkbox_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_clicks_on_Edit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1001",
      "offset": 13
    },
    {
      "val": "Bag2a",
      "offset": 21
    },
    {
      "val": "3",
      "offset": 33
    }
  ],
  "location": "prstepdefn.admin_edits_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Order Error",
      "offset": 32
    }
  ],
  "location": "prstepdefn.admin_set_the_Return_status_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_clicks_on_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Products_return_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "Verify Cancel Functionality",
  "description": "",
  "id": "uniform-website-feature;verify-cancel-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "Admin clicks on Add new button on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "admin will be redirected to the add new Product\u0027s page",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "admin enters the following \"\u003cOrder ID\u003e\", \"\u003cOrder_Date\u003e\", \"\u003cCustomer\u003e\", \"\u003cFirst Name\u003e\", \"\u003cLast Name\u003e\", \"\u003cEmail\u003e\", \"\u003cTelephone\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "admin also enters\"\u003cProduct\u003e\", \"\u003cModel\u003e\", \"\u003cQuantity\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "admin set the Return Reason to \"Dead On Arrival\", Opened to \"Unopened\", Return Action to \"Replacement Sent\" and Return Status to \"Complete\"",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "admin clicks on the Cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "admin will be redirected to the Products return page",
  "keyword": "Then "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "uniform-website-feature;verify-cancel-functionality;",
  "rows": [
    {
      "cells": [
        "Order ID",
        "Order_Date",
        "Customer",
        "First Name",
        "Last Name",
        "Email",
        "Telephone",
        "Product",
        "Model",
        "Quantity"
      ],
      "line": 57,
      "id": "uniform-website-feature;verify-cancel-functionality;;1"
    },
    {
      "cells": [
        "100",
        "2021-09-21",
        "Monica Geller",
        "Monica",
        "Geller",
        "monmon@gmail.com",
        "7765432890",
        "FormalShirt",
        "Fsmed32",
        "1"
      ],
      "line": 58,
      "id": "uniform-website-feature;verify-cancel-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "Verify Signin Functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the Uniform Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin enters the username and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin on the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "admin will be redirected to the Dashboard of Uniform page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "admin will click on the Sales catalog and then will click on Returns",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "admin will be redirected to the Product Returns page",
  "keyword": "Then "
});
formatter.match({
  "location": "prstepdefn.admin_is_on_the_Uniform_Application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_enters_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_on_the_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Dashboard_of_Uniform_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_click_on_the_Sales_catalog_and_then_will_click_on_Returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Product_Returns_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 58,
  "name": "Verify Cancel Functionality",
  "description": "",
  "id": "uniform-website-feature;verify-cancel-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "Admin clicks on Add new button on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "admin will be redirected to the add new Product\u0027s page",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "admin enters the following \"100\", \"2021-09-21\", \"Monica Geller\", \"Monica\", \"Geller\", \"monmon@gmail.com\", \"7765432890\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "admin also enters\"FormalShirt\", \"Fsmed32\", \"1\"",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "admin set the Return Reason to \"Dead On Arrival\", Opened to \"Unopened\", Return Action to \"Replacement Sent\" and Return Status to \"Complete\"",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "admin clicks on the Cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "admin will be redirected to the Products return page",
  "keyword": "Then "
});
formatter.match({
  "location": "prstepdefn.admin_clicks_on_Add_new_button_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_add_new_Product_s_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 28
    },
    {
      "val": "2021-09-21",
      "offset": 35
    },
    {
      "val": "Monica Geller",
      "offset": 49
    },
    {
      "val": "Monica",
      "offset": 66
    },
    {
      "val": "Geller",
      "offset": 76
    },
    {
      "val": "monmon@gmail.com",
      "offset": 86
    },
    {
      "val": "7765432890",
      "offset": 106
    }
  ],
  "location": "prstepdefn.admin_enters_the_following(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FormalShirt",
      "offset": 18
    },
    {
      "val": "Fsmed32",
      "offset": 33
    },
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "prstepdefn.admin_also_enters(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Dead On Arrival",
      "offset": 32
    },
    {
      "val": "Unopened",
      "offset": 61
    },
    {
      "val": "Replacement Sent",
      "offset": 90
    },
    {
      "val": "Complete",
      "offset": 130
    }
  ],
  "location": "prstepdefn.admin_set_the_Return_Reason_to_Opened_to_Return_Action_to_and_Return_Status_to(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_clicks_on_the_Cancel_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Products_return_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Verify Signin Functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the Uniform Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin enters the username and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin on the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "admin will be redirected to the Dashboard of Uniform page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "admin will click on the Sales catalog and then will click on Returns",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "admin will be redirected to the Product Returns page",
  "keyword": "Then "
});
formatter.match({
  "location": "prstepdefn.admin_is_on_the_Uniform_Application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_enters_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_on_the_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Dashboard_of_Uniform_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_click_on_the_Sales_catalog_and_then_will_click_on_Returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Product_Returns_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 60,
  "name": "Verify Delete functionality",
  "description": "",
  "id": "uniform-website-feature;verify-delete-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 61,
  "name": "Admin clicks on checkbox button to Delete row",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "admin clicks on Delete button",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "admin gets a Alert message",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "admin gets redirected on the Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "prstepdefn.admin_clicks_on_checkbox_button_to_Delete_row()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_clicks_on_Delete_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_gets_a_Alert_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_gets_redirected_on_the_Homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 66,
  "name": "Verify Filter functionality",
  "description": "",
  "id": "uniform-website-feature;verify-filter-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 67,
  "name": "Admin enters \"\u003cReturn_ID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "clicks on Filter button",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "admin gets filtered data",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "admin gets redirected on the Homepage",
  "keyword": "And "
});
formatter.examples({
  "line": 72,
  "name": "",
  "description": "",
  "id": "uniform-website-feature;verify-filter-functionality;",
  "rows": [
    {
      "cells": [
        "Return_ID"
      ],
      "line": 73,
      "id": "uniform-website-feature;verify-filter-functionality;;1"
    },
    {
      "cells": [
        "527"
      ],
      "line": 74,
      "id": "uniform-website-feature;verify-filter-functionality;;2"
    },
    {
      "cells": [
        "527A"
      ],
      "line": 75,
      "id": "uniform-website-feature;verify-filter-functionality;;3"
    },
    {
      "cells": [
        "SVDJ12"
      ],
      "line": 76,
      "id": "uniform-website-feature;verify-filter-functionality;;4"
    },
    {
      "cells": [
        "527@$"
      ],
      "line": 77,
      "id": "uniform-website-feature;verify-filter-functionality;;5"
    },
    {
      "cells": [
        ""
      ],
      "line": 78,
      "id": "uniform-website-feature;verify-filter-functionality;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "Verify Signin Functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the Uniform Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin enters the username and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin on the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "admin will be redirected to the Dashboard of Uniform page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "admin will click on the Sales catalog and then will click on Returns",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "admin will be redirected to the Product Returns page",
  "keyword": "Then "
});
formatter.match({
  "location": "prstepdefn.admin_is_on_the_Uniform_Application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_enters_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_on_the_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Dashboard_of_Uniform_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_click_on_the_Sales_catalog_and_then_will_click_on_Returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Product_Returns_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 74,
  "name": "Verify Filter functionality",
  "description": "",
  "id": "uniform-website-feature;verify-filter-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 67,
  "name": "Admin enters \"527\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "clicks on Filter button",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "admin gets filtered data",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "admin gets redirected on the Homepage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "527",
      "offset": 14
    }
  ],
  "location": "prstepdefn.admin_enters(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.clicks_on_Filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_gets_filtered_data()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_gets_redirected_on_the_Homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Verify Signin Functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the Uniform Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin enters the username and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin on the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "admin will be redirected to the Dashboard of Uniform page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "admin will click on the Sales catalog and then will click on Returns",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "admin will be redirected to the Product Returns page",
  "keyword": "Then "
});
formatter.match({
  "location": "prstepdefn.admin_is_on_the_Uniform_Application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_enters_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_on_the_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Dashboard_of_Uniform_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_click_on_the_Sales_catalog_and_then_will_click_on_Returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Product_Returns_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 75,
  "name": "Verify Filter functionality",
  "description": "",
  "id": "uniform-website-feature;verify-filter-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 67,
  "name": "Admin enters \"527A\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "clicks on Filter button",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "admin gets filtered data",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "admin gets redirected on the Homepage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "527A",
      "offset": 14
    }
  ],
  "location": "prstepdefn.admin_enters(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.clicks_on_Filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_gets_filtered_data()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_gets_redirected_on_the_Homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Verify Signin Functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the Uniform Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin enters the username and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin on the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "admin will be redirected to the Dashboard of Uniform page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "admin will click on the Sales catalog and then will click on Returns",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "admin will be redirected to the Product Returns page",
  "keyword": "Then "
});
formatter.match({
  "location": "prstepdefn.admin_is_on_the_Uniform_Application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_enters_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_on_the_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Dashboard_of_Uniform_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_click_on_the_Sales_catalog_and_then_will_click_on_Returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Product_Returns_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 76,
  "name": "Verify Filter functionality",
  "description": "",
  "id": "uniform-website-feature;verify-filter-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 67,
  "name": "Admin enters \"SVDJ12\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "clicks on Filter button",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "admin gets filtered data",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "admin gets redirected on the Homepage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "SVDJ12",
      "offset": 14
    }
  ],
  "location": "prstepdefn.admin_enters(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.clicks_on_Filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_gets_filtered_data()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_gets_redirected_on_the_Homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Verify Signin Functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the Uniform Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin enters the username and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin on the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "admin will be redirected to the Dashboard of Uniform page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "admin will click on the Sales catalog and then will click on Returns",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "admin will be redirected to the Product Returns page",
  "keyword": "Then "
});
formatter.match({
  "location": "prstepdefn.admin_is_on_the_Uniform_Application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_enters_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_on_the_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Dashboard_of_Uniform_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_click_on_the_Sales_catalog_and_then_will_click_on_Returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Product_Returns_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 77,
  "name": "Verify Filter functionality",
  "description": "",
  "id": "uniform-website-feature;verify-filter-functionality;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 67,
  "name": "Admin enters \"527@$\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "clicks on Filter button",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "admin gets filtered data",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "admin gets redirected on the Homepage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "527@$",
      "offset": 14
    }
  ],
  "location": "prstepdefn.admin_enters(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.clicks_on_Filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_gets_filtered_data()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_gets_redirected_on_the_Homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Verify Signin Functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the Uniform Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin enters the username and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin on the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "admin will be redirected to the Dashboard of Uniform page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "admin will click on the Sales catalog and then will click on Returns",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "admin will be redirected to the Product Returns page",
  "keyword": "Then "
});
formatter.match({
  "location": "prstepdefn.admin_is_on_the_Uniform_Application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_enters_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_on_the_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Dashboard_of_Uniform_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_click_on_the_Sales_catalog_and_then_will_click_on_Returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Product_Returns_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 78,
  "name": "Verify Filter functionality",
  "description": "",
  "id": "uniform-website-feature;verify-filter-functionality;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 67,
  "name": "Admin enters \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "clicks on Filter button",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "admin gets filtered data",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "admin gets redirected on the Homepage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 14
    }
  ],
  "location": "prstepdefn.admin_enters(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.clicks_on_Filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_gets_filtered_data()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_gets_redirected_on_the_Homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Verify Signin Functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the Uniform Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin enters the username and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin on the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "admin will be redirected to the Dashboard of Uniform page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "admin will click on the Sales catalog and then will click on Returns",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "admin will be redirected to the Product Returns page",
  "keyword": "Then "
});
formatter.match({
  "location": "prstepdefn.admin_is_on_the_Uniform_Application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_enters_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_on_the_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Dashboard_of_Uniform_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_click_on_the_Sales_catalog_and_then_will_click_on_Returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Product_Returns_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 80,
  "name": "Verifying Sorting Functionality",
  "description": "",
  "id": "uniform-website-feature;verifying-sorting-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 81,
  "name": "Admin clicks in Sort button on Return ID",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "Admin gets sorted data in ascending form",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "admin gets redirected on the Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "prstepdefn.admin_clicks_in_Sort_button_on_Return_ID()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_gets_sorted_data_in_ascending_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_gets_redirected_on_the_Homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 85,
  "name": "Verify Bug functionality",
  "description": "",
  "id": "uniform-website-feature;verify-bug-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "Admin clicks on Add button on Products page",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "admin will be redirected to the add new Products return page",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "admin enters data for \"\u003cOrder ID\u003e\", \"\u003cOrder_Date\u003e\", \"\u003cCustomer\u003e\", \"\u003cFirst Name\u003e\", \"\u003cLast Name\u003e\", \"\u003cEmail\u003e\", \"\u003cTelephone\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "admin enters data for \"\u003cComments\u003e\" \"\u003cProduct\u003e\", \"\u003cModel\u003e\", \"\u003cQuantity\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "admin sets the following Return status to \"Received Wrong Item\", Opened to \"Opened\", Return Action to \"Refunded\" and Return Status to \"Pending\"",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "admin clicks on  Save button after data is entered",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "admin will be redirected to the Products return page",
  "keyword": "Then "
});
formatter.examples({
  "line": 94,
  "name": "",
  "description": "",
  "id": "uniform-website-feature;verify-bug-functionality;",
  "rows": [
    {
      "cells": [
        "Order ID",
        "Order_Date",
        "Customer",
        "First Name",
        "Last Name",
        "Email",
        "Telephone",
        "Comments",
        "Product",
        "Model",
        "Quantity"
      ],
      "line": 95,
      "id": "uniform-website-feature;verify-bug-functionality;;1"
    },
    {
      "comments": [
        {
          "line": 96,
          "value": "#  |       21 | 2021-10-11 | Rachel Green  | Rachel     | Green      | grach@gmail.com   | 987654332 | Best Quality      | Sbags   | Sb2FG       |        1 |"
        }
      ],
      "cells": [
        "qwertyui",
        "2021-10-11",
        "Chandler Bing",
        "Chandler",
        "Bing",
        "ccles@gmail.com",
        "987654321",
        "Okay Okayish",
        "Tshirt",
        "Ts10a",
        "2"
      ],
      "line": 97,
      "id": "uniform-website-feature;verify-bug-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "Verify Signin Functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Admin is on the Uniform Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin enters the username and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin on the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "admin will be redirected to the Dashboard of Uniform page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "admin will click on the Sales catalog and then will click on Returns",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "admin will be redirected to the Product Returns page",
  "keyword": "Then "
});
formatter.match({
  "location": "prstepdefn.admin_is_on_the_Uniform_Application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_enters_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_on_the_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Dashboard_of_Uniform_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_click_on_the_Sales_catalog_and_then_will_click_on_Returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Product_Returns_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 96,
      "value": "#  |       21 | 2021-10-11 | Rachel Green  | Rachel     | Green      | grach@gmail.com   | 987654332 | Best Quality      | Sbags   | Sb2FG       |        1 |"
    }
  ],
  "line": 97,
  "name": "Verify Bug functionality",
  "description": "",
  "id": "uniform-website-feature;verify-bug-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "Admin clicks on Add button on Products page",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "admin will be redirected to the add new Products return page",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "admin enters data for \"qwertyui\", \"2021-10-11\", \"Chandler Bing\", \"Chandler\", \"Bing\", \"ccles@gmail.com\", \"987654321\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "admin enters data for \"Okay Okayish\" \"Tshirt\", \"Ts10a\", \"2\"",
  "matchedColumns": [
    7,
    8,
    9,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "admin sets the following Return status to \"Received Wrong Item\", Opened to \"Opened\", Return Action to \"Refunded\" and Return Status to \"Pending\"",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "admin clicks on  Save button after data is entered",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "admin will be redirected to the Products return page",
  "keyword": "Then "
});
formatter.match({
  "location": "prstepdefn.admin_clicks_on_Add_button_on_Products_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_add_new_Products_return_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "qwertyui",
      "offset": 23
    },
    {
      "val": "2021-10-11",
      "offset": 35
    },
    {
      "val": "Chandler Bing",
      "offset": 49
    },
    {
      "val": "Chandler",
      "offset": 66
    },
    {
      "val": "Bing",
      "offset": 78
    },
    {
      "val": "ccles@gmail.com",
      "offset": 86
    },
    {
      "val": "987654321",
      "offset": 105
    }
  ],
  "location": "prstepdefn.admin_enters_data_for(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Okay Okayish",
      "offset": 23
    },
    {
      "val": "Tshirt",
      "offset": 38
    },
    {
      "val": "Ts10a",
      "offset": 48
    },
    {
      "val": "2",
      "offset": 57
    }
  ],
  "location": "prstepdefn.admin_enters_data_for(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Received Wrong Item",
      "offset": 43
    },
    {
      "val": "Opened",
      "offset": 76
    },
    {
      "val": "Refunded",
      "offset": 103
    },
    {
      "val": "Pending",
      "offset": 135
    }
  ],
  "location": "prstepdefn.admin_sets_the_following_Return_status_to_Opened_to_Return_Action_to_and_Return_Status_to(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_clicks_on_Save_button_after_data_is_entered()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "prstepdefn.admin_will_be_redirected_to_the_Products_return_page()"
});
formatter.result({
  "status": "skipped"
});
});