define({"337":{i:0.00723519954981332,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/asset_management_overview.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. When using the term assets,\nwe refer to a set of resources used for building UI. These resources include; html, css (or less, sass, ...",t:"Asset Management - Overview"},"338":{i:0.00670775078490186,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/build_optimization_antelope.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. We use Antelope for transpiling/building the assets and to optimize the resulting output.\n \nRead more about  antelope configuration ...",t:"Build and Optimization for Antelope"},"339":{i:0.00670775078490186,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/cli.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by Oryx. You can still use Antelope however, no new development is planned for this component. Antelope is a command line interface tool available and ready for use from your terminal/console .\n\n Before you proceed with setup, read ...",t:"CLI"},"340":{i:0.00670775078490186,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/configuration.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by Oryx. You can still use Antelope however, no new development is planned for this component. A configuration file is a set of properties and methods that define how to process assets.\n\n Read more about  asset build and ...",t:"Configuration"},"341":{i:0.00670775078490186,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/development_antelope.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. Development refers to writing your own assets, consuming external dependencies and linking resources to make them work together.\n ...",t:"Development with Antelope"},"342":{i:0.00670775078490186,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/download_structure_antelope.html",a:"Download and Structure (Antelope) Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. Here you will find out how to download external dependencies and where to place them, together with ...",t:"Download and Structure - Antelope"},"343":{i:0.00670775078490186,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/publishing.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. To publish assets means to place them (or the build output files) in a place where they can be accessed and loaded by the browser.\n ...",t:"Publishing"},"344":{i:0.000896449443164531,u:"../developing_with_spryker/yves/yves.html",a:"Front-End Yves In this section you will find the following content: Client Controllers and Actions Frontend Translations Using Redis as a KV Storage Implementing URL Routing in Yves",t:"Front-End Yves"},"345":{i:0.00161382012571838,u:"../developing_with_spryker/yves/client.html",a:"Yves is divided into two:\n\n The part with controllers, forms, templates etc\n Client part which provides access to the search and storage engine and the Zed application.\n The purpose of the client is to encapsulate the logic which runs the shop independent from the overlying application. So in case ...",t:"Client"},"346":{i:0.00102331946277849,u:"../developing_with_spryker/yves/controllers_actions.html",a:"Controllers are placed inside the Controllers folder in Yves; they provide an entry point to the system for requests submitted by the front-end users.\n The methods inside of a controller are called actions. Usually an action reads the incoming request-data, maybe validates it with a form, delegates ...",t:"Controllers and Actions"},"347":{i:0.00102331946277849,u:"../developing_with_spryker/yves/frontend_translations.html",a:"Textual translations are handled by the Glossary-module. You can use the GlossaryFacade in Zed to add entries to Glossary (or you can use the Zed UI).\n\n \u003c?php\nclass GlossaryFacade extends AbstractFacade\n{\n    public function createTranslation($keyName, LocaleTransfer $locale, $value, $isActive = ...",t:"Frontend Translations"},"348":{i:0.00121900003014519,u:"../developing_with_spryker/yves/redis_as_kv.html",a:"This article describes how Redis is used within Spryker; the current functionality can be extended according to your needs.\n About Redis is a key-value data store and for the values it supports a large collection of data structures, such as strings, hashes, lists or sets.\n\n The following table shows ...",t:"Using Redis as a KV Storage"},"349":{i:0.00265795096995867,u:"../developing_with_spryker/yves/yves_url_routing.html",a:"Implementing URL Routing in Yves The words contained in an URL play a major factor for search engine to determine if the page is relevant for a specific search query. The URL routing is a mechanism used to map URLs to the code that gets executed when a specific request is being submitted. URL ...",t:"URL Routing"},"350":{i:0.000896449443164531,u:"../developing_with_spryker/zed/zed.html",a:"Back-End Zed In this section you will find the following content: Business Layer: Business Layer Business Models Custom Exceptions   Communication Layer: Controllers and Actions Persistence Layer Database Schema Definition Entity Persistence Layer Query Container Query Objects",t:"Back-End Zed"},"351":{i:0.00278028436943281,u:"../developing_with_spryker/zed/business_layer.html",a:"Zed’s business layer is responsible for the entire business logic.  Most classes exist in this layer and this is the primary area for development.  The business layer is used by the communication layer and by other bundles. Here you know how to save data objects, but you do not care about data ...",t:"Business Layer"},"352":{i:0.000955587382349304,u:"../developing_with_spryker/zed/business_models.html",a:"Business models are classes where you program the business logic of your system. With business logic we mean all kinds of algorithms (e.g. cart calculation), storage procedures (e.g. checkout save workflow) and interactions with external providers (e.g. payment). Business models are not visible from ...",t:"Business Models"},"353":{i:0.000955587382349304,u:"../developing_with_spryker/zed/custom_exceptions.html",a:"When you need to throw an exception, you should define your own type of exception. Later it is much easier to handle exceptions when the type represents a specific type of error. In Spryker exceptions are errors which are handled in a central error handler that will stop the execution. Do not use ...",t:"Custom Exceptions"},"354":{i:0.00121466038501945,u:"../developing_with_spryker/zed/facade/facade.html",a:"The facade acts as an internal API. The main responsibility of the facade is to hide the internal implementation. The simply only delegates the calls to internal business models. Similar to a remote web service, the client should not care about how a specific task is done. This is also important for ...",t:"Facade"},"355":{i:0.00121507814754309,u:"../developing_with_spryker/zed/facade/zed_facade_how_to_use.html",a:"1. How to use the facade from a controller or a plugin? In Zed’s communication layer the facade of the same module is available with the getFacade() method from all controllers and plugins. A typical usage from a controller looks like this. The controller retrieves data from a submitted form and ...",t:"How to Use a Facade"},"356":{i:0.00121507814754309,u:"../developing_with_spryker/zed/facade/zed_facade_how_to_implement.html",a:"AbstractFacade Every facade extends Spryker\\Zed\\Kernel\\Business\\AbstractFacade which provides an important method: Methods Inside a facade, the methods tell a story about the module. They expose  the module\u0027s functions and delegate calls to internal models. A typical method looks like this: ...",t:"How to Implement a Facade"},"357":{i:0.00121507814754309,u:"../developing_with_spryker/zed/facade/zed_facade_design_by_contract.html",a:"Every method in a facade contains an implicit promise. So a client expects that the behavior does not change in a minor update. Basically there are two types of possible changes. First there can be changes in the method’s signature for instance, when the name of the method or the order of the ...",t:"Design by Contract (DBC) - Facade"},"358":{i:0.00129932548555594,u:"../developing_with_spryker/zed/controllers_actions.html",a:"Zed’s communication layer is the entry point to the system. Here are executed all of the external requests from users, the Yves-application and all command-line calls. The purpose of this layer is to retrieve the data, delegate to the business layer and to handover it to the presentation layer.\n The ...",t:"Controllers and Actions"},"359":{i:0.000955587382349304,u:"../developing_with_spryker/zed/persistence_layer.html",a:"Zed’s persistence layer is the owner of the schema, entities and queries. This layer knows the database structure and holds the connection to it.\n Integrated Technologies\n Propel\tFast and simple ORM Framework\nMySQL or PostgreSQL\tBoth databases are supported\n Persistence Layer Elements:\n The ...",t:"Persistence Layer"},"360":{i:0.00356457811158414,u:"../developing_with_spryker/zed/database_schema_definition.html",a:"With Propel, a database schema is defined in an XML-file. Each module carries it’s own part of the big schema that is collected and merged. Propel’s documentation on defining the database schema:  Database schema Example Schema XML File This file can be copied into your moduleinto ...",t:"Database Schema Definition"},"361":{i:0.000955587382349304,u:"../developing_with_spryker/zed/entity.html",a:"In Spryker an entity represents one entry from a table in the database. Entities are an implementation of the  Active record design pattern , so their usage is very simple.\nFor a full documentation see  Propel’s Active Record Reference .  Spryker’s entities are called Active Record classes or just ...",t:"Entity"},"362":{i:0.00190071728528644,u:"../developing_with_spryker/zed/query_container.html",a:"A query container holds all the database queries of the current module. Each module has exactly one query container, which also acts as an entry point to the persistence layer. Internally it uses  query objects  and returns unterminated queries. As you can see in the example below, the query ...",t:"Query Container"},"363":{i:0.00176339798304592,u:"../developing_with_spryker/zed/query_objects.html",a:"Query objects provide an object-oriented API for writing database queries which are used in  query containers .\n Please check the official  Propel Query Reference  for a complete documentation.\n\n How to create a new query object\n Query object are created by Propel during the build model step. See ...",t:"Query Objects"},"364":{i:0.00124425805517938,u:"../enablement/enablement.html",a:"The enblement section of the Academy includes information and instructions designed to assist you in establishing your commercial web presence with the Spryker Commerce Operating System. Information Types:  HowTos  - short instructions that describe how to perform a single task. Migration Guides  - ...",t:"Enablement"},"365":{i:0.00124899122472092,u:"../enablement/howtos/how_tos.html",a:"HowTos are simple instructions to guide you through the process of performing a single task.  Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  ...",t:"HowTos"},"366":{i:0.000870922281812816,u:"../enablement/howtos/how_to_implement_direct_debit/ht_implement_dd.html",a:"This article describes the steps how to implement direct debit payment method without integrating with a third party payment service provider.\n For this example, we will add a new module called PaymentMethods.\n\n If it is your the first time creating a new module, check  Tutorial - Adding a New ...",t:"HowTo - Implement Direct Debit Payment"},"367":{i:0.000994303561679439,u:"../enablement/howtos/how_to_implement_direct_debit/dd_fe_implementation.html",a:"Create a form\n In Yves, we start by building the form.  Add the new module also in Yves and add a Form/ folder where we’ll place the implementation for building the form.\n\n First add the data provider, inside the Form/DataProvider/ folder:\n Click to expand the code sample \u003c?php\nnamespace ...",t:"Direct Debit Front-end Implementation"},"368":{i:0.000994303561679439,u:"../enablement/howtos/how_to_implement_direct_debit/dd_checkout_implementation.html",a:"The next step is to integrate direct debit into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector, that will inject the direct debit form and handler into the Checkout module: Click to expand the code sample \u003c?php\n\nnamespace ...",t:"Integrate Direct Debit into Checkout"},"369":{i:0.000994303561679439,u:"../enablement/howtos/how_to_implement_direct_debit/dd_be_implementation.html",a:"\nPersist payment details\nThe payment details for the direct debit payment method need to be persisted in the database. We’ll define a new table to store this data; inside the Persistence/Propel/Schema/ folder in Zed add the spy_directdebit_schema.xml file with the following content: \u003c?xml ...",t:"Direct Debit Back-End Implementation"},"370":{i:0.000994303561679439,u:"../enablement/howtos/how_to_implement_direct_debit/dd_shared_implementation.html",a:"\nAs you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface under the Shared namespace, where you’ll define these constants.\n ...",t:"Direct Debit Shared Implementation"},"371":{i:0.000994303561679439,u:"../enablement/howtos/how_to_implement_direct_debit/dd_test_implementation.html",a:"Testing the Direct Debit Implementation Now you are able to test the payment method you just implemented.\n\nSubmit a new order from Yves. After that you can control the flow of the order in Zed UI.",t:"Testing the Direct Debit Implementation"},"372":{i:0.000870922281812816,u:"../enablement/howtos/ht_add_new_shipment_method.html",a:"\nThis article describes the steps to add a new shipment method, without integrating with the shipment provider.\n In this tutorial we’ll consider the case when you need to add a new shipment method method the need to integrate it with the shipment providers system.\n \nWhat’s important for this ...",t:"HowTo - Add a New Shipment Method"},"373":{i:0.000870922281812816,u:"../enablement/howtos/ht_cart.html",a:"How to add product variants and product pictures to an existing cart Prerequisites: Before starting make sure you are familiar with the concept of Spryker  Super Attributes UI changes: Cart now supports changing the items in the cart by modifying their attributes. If we have a wrong T-Shirt size in ...",t:"HowTo - Cart Integration"},"374":{i:0.000870922281812816,u:"../enablement/howtos/ht_create_personalized_prices.html",a:"Personalized Prices This article describes the steps that you need to consider when you need to implement personalized prices for customer groups.\n \nOverview\n When implementing special prices that are according to the group the customer is part of, several steps need to be considered.\n Extend ...",t:"HowTo - Create Personalized Prices"},"375":{i:0.00113363538342132,u:"../enablement/howtos/ht_data_import.html",a:"The following article describes with a real life example for importing product images how to build your own DataImport for a specific type. The Database Schema You should start by looking at the database tables you want to fill with data. The image below shows the table relation for product images. ...",t:"HowTo - Add a New DataImport Type"},"376":{i:0.000870922281812816,u:"../enablement/howtos/ht_extend_inuse_core.html",a:"This topic describes how to extend a core module that is used by another core module.\n\n Extra consideration must be taken when extending core modules that are already in use by another module. In the following example we will extend the Cart  -\u003e Calculation modules.\n\n Step 1: Modify the Interface ...",t:"HowTo - Extend a Core Module That is Used by Another"},"377":{i:0.000870922281812816,u:"../enablement/howtos/ht_force_https.html",a:"The following article describes how you can force to use HTTPS in your pages. Load balancer If your servers are behind a load balancer and the load balancer is doing the redirects from HTTP to HTTPS, you don\u0027t need to further configure the application.\n         Application Configuration Force HTTPS ...",t:"HowTo - Force HTTPS"},"378":{i:0.000870922281812816,u:"../enablement/howtos/how_to_implement_invoice_payment/ht_implement_invoice_payment.html",a:"Invoice Payment This article describes the steps that you need to consider when you need to implement invoice payment method without integrating with a third party payment service provider.\n In this HowTo, we will add a new module called PaymentMethods.\n\n If this is you first time creating a new ...",t:"HowTo - Implement Invoice Payment"},"379":{i:0.00127602437381441,u:"../enablement/howtos/how_to_implement_invoice_payment/ht_invoice_payment_fe.html",a:"Creating the form\n In Yves, we’ll start by building the form. Add the new module also in Yves and add a Form/ folder where we’ll place the implementation for building the form.\n\n First add the data provider, inside the Form/DataProvider/ folder:\n Click to expand the code sample \u003c?php\nnamespace ...",t:"HowTo - Implement Invoice Payment Front End"},"380":{i:0.000994303561679439,u:"../enablement/howtos/how_to_implement_invoice_payment/ht_invoice_payment_checkout.html",a:"The next step is to integrate the invoice payment into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector, that will inject the invoice form and handler into the Checkout module:\n Click to expand the code sample \u003c?php\n\nnamespace ...",t:"HowTo - Integrate Invoice Payment into Checkout"},"381":{i:0.00127602437381441,u:"../enablement/howtos/how_to_implement_invoice_payment/ht_invoice_payment_be.html",a:"Checkout plugins\n To integrate the invoice payment method into the checkout, we need to provide implementations for these 2 plugins: CheckoutPreCondition PaymentSaveOrder Add the following 2 plugins in Zed, under the Communication/Plugin/Checkout/ folder of the new added module.\n\n ...",t:"HowTo - Implement Invoice Payment Back End"},"382":{i:0.00127602437381441,u:"../enablement/howtos/how_to_implement_invoice_payment/ht_invoice_payment_fe_be_shared.html",a:"As you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface in the Shared namespace, where you’ll define these constants.\n\n ...",t:"HowTo - Implement Invoice Payment - Shared Implementation"},"383":{i:0.000994303561679439,u:"../enablement/howtos/how_to_implement_invoice_payment/ht_invoice_payment_test.html",a:"HowTo - Implement Invoice Payment - Test When you have completed the instructions on  front end ,  back end  and  shared  implementation, you are able to test the payment method you just implemented.\n\nSubmit a new order from Yves. After that you can control the flow of the order in Zed UI.",t:"HowTo - Implement Invoice Payment - Test"},"384":{i:0.000870922281812816,u:"../enablement/howtos/how_to_implement_prepayment/ht_implement_prepayment.html",a:"Prepayment\n This article describes the steps that you need to consider when you need to implement the prepayment method without integrating with a third party payment service provider.\n In this HowTo we will add a new module called PaymentMethods.\n\n If this is you first time creating a new module, ...",t:"HowTo - Implement Prepayment"},"385":{i:0.000994303561679439,u:"../enablement/howtos/how_to_implement_prepayment/ht_prepayment_fe.html",a:"Creating the form\n In Yves, we’ll start by building the form. Add the new module also in Yves and add a Form/ folder where we’ll place the implementation for building the form.\n\n First add the data provider, under Form/DataProvider:\n Click to expand the code sample \u003c?php\nnamespace ...",t:"HowTo - Implement Prepayment Front End"},"386":{i:0.000994303561679439,u:"../enablement/howtos/how_to_implement_prepayment/ht_prepayment_checkout.html",a:"The next step is to integrate prepayment into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector, that will inject the prepayment form and handler into the Checkout module:\n Click to expand the code sample \u003c?php\n\nnamespace ...",t:"HowTo - Integrate Prepayment into Checkout"},"387":{i:0.000994303561679439,u:"../enablement/howtos/how_to_implement_prepayment/ht_prepayment_be.html",a:"To integrate the prepayment method into the checkout, we are required to provide implementations for these 2 plugins:\n\n CheckoutPreCondition  PaymentSaveOrder  Add the following 2 plugins in Zed, inside the Communication/Plugin/Checkout folder of the new added module.\n\nPrepaymentPreCheckPlugin:\n ...",t:"HowTo - Implement Prepayment Back End"},"388":{i:0.000994303561679439,u:"../enablement/howtos/how_to_implement_prepayment/ht_prepayment_shared.html",a:"As you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface in the Shared namespace, where you’ll define these constants.\n\n ...",t:"HowTo - Implement Prepayment Shared"},"389":{i:0.000994303561679439,u:"../enablement/howtos/how_to_implement_prepayment/ht_prepayment_test.html",a:"HowTo - Test Prepayment Implementation Now you are able to test the payment method you just implemented.\n\nSubmit a new order from Yves. After that you can control the flow of the order in Zed UI.\n\n",t:"HowTo - Test Prepayment Implementation"},"390":{i:0.000870922281812816,u:"../enablement/howtos/ht_product_data_import_frontend.html",a:"Product Customization This article describes flow of the product data from importing it to the SQL database to showing it in the front-end view.\n Importing Products to the SQL Database\n Products are imported in the SQL database through the Importer module. The product details are parsed from CSV ...",t:"HowTo - Product Data from Import to Front-End View"},"391":{i:0.000870922281812816,u:"../enablement/howtos/ht_mvp_project_structuring.html",a:"In this HowTo we will provide practical tips and guidelines for structuring MVP Projects.  The purpose of these guidelines is to help with the project planning stage.  In general, good products are built on strong foundations, and a cost-effective projects are managed through clarity, communication ...",t:"HowTo - MVP Project Structuring"},"392":{i:0.00580571312662437,u:"../enablement/howtos/ht_replace_bundle_dependancies.html",a:"Spryker Dependencies This content describes how to identify module dependencies and replace a dependent module with another one. Each Spryker module might have several dependent modules that provide communication, utilities and added functionality. Usually adjustments are done via our plugin ...",t:"HowTo - Replace Spryker Module Dependencies"},"393":{i:0.000969439694916006,u:"../enablement/howtos/ht_setup_spryker_with_mysql.html",a:"Spryker supports MySQL database and for installing it with this database, follow these instructions to adjust the configuration. MySQL Version Currently Spryker works only with MySQL version 5.7 or higher.  Adjusting Spryker to Run with MySQL \n    For running the Spryker Demoshop with MySQL, it is ...",t:"HowTo - Setup Spryker with MySQL"},"394":{i:0.0038170428929498,u:"../enablement/howtos/ht_setup_stores_mutli_store_projects.html",a:"For the case in which you must support multiple stores in your application, this can be achieved through configuration.\n\nYou can setup the stores together with their settings such as date format or currency and also you can setup the default store for your application.\n\n Configure Stores\n The stores ...",t:"HowTo - Setup Multi-Store Projects"},"395":{i:0.000870922281812816,u:"../enablement/howtos/ht_setup_stores_multiple_locals.html",a:"Multiple Locales This article describes the steps that you need to consider when you have to setup stores with multiple locales.\n Configure Locales for Store\n The stores configuration can be found in the config/Shared/stores.php file. You can find out more about store configuration  here .\n\n For ...",t:"HowTo - Setup Stores with Multiple Locales"},"396":{i:0.00150298652633038,u:"../enablement/migration_guides/migration_guides.html",a:"Migration Guides are simple instructions to guide you through the process of upgrading a module to a newer version.    Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top ...",t:"Migration Guides"},"397":{i:0.000896449443164531,u:"../enablement/migration_guides/mg_availability.html",a:"Upgrading from version 3.* to version 4.*\n All Availability ui was moved to AvailabilitGui module, mostly Communication or Persistence were changed. If you have overwritten any of moved classes from those layers please change base class namespace from Availability to AvailabilityGui root.\n\n ...",t:"Migration Guide - Availability"},"398":{i:0.00615076998455275,u:"../enablement/migration_guides/mg_calculation.html",a:"Upgrading from Version 3.* to Version 4.* To upgrade from 3* to 4*, composer update your calculator to version 4. Updating Calculator Stacks In the new version there are two new calculator stacks, getQuoteCalculatorPluginStack and getOrderCalculatorPluginStack. They are both defined in ...",t:"Migration Guide - Calculation"},"399":{i:0.000896449443164531,u:"../enablement/migration_guides/mg_catalog.html",a:"Upgrading from version 3.* to version 4.*\n Due to introducing the Suggestion Search feature, the Catalog module now requires Search \u003e=5.2.\n\n To Upgrade from 3.* to 4.*:\n\n Before upgrading to the new version, make sure that you do not use any deprecated code from version 3.*. Check the description of ...",t:"Migration Guide - Catalog"},"400":{i:0.00580571312662437,u:"../enablement/migration_guides/mg_category.html",a:"Upgrading from version 3.* to version 4.* Install new module Resolve deprecations Database migration Data migration 1. Install new module Install new module by adding the following into your composer.json \"spryker/category\": \"^4.0.0\" and running composer update. 2. Resolve deprecations \n    Before ...",t:"Migration Guide - Category"},"401":{i:0.000870922281812816,u:"../enablement/migration_guides/mg_category_template_console.html",a:"\n\n\u003c?php\n\n/**\n * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\Category\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - Category Template Migration Console"},"402":{i:0.00161120996101255,u:"../enablement/migration_guides/mg_cms.html",a:"Upgrading from Version 4.* to Version 5.* Cms version 5.0 is responsible only for CMS pages and page versioning. CMS Block functionality became more flexible and moved to  CmsBlock module . If you used CMS Blocks before, you need to migrate your data to the new structure.\n    If you did not use CMS ...",t:"Migration Guide - CMS"},"403":{i:0.00114489241859087,u:"../enablement/migration_guides/mg_cms_block_category_connector.html",a:"Upgrading from Version 1.* to Version 2.* Due to introducing the CMS Block positioning and CMS Block templates for Category, the CMS Block Category Connector module now requires Category \u003e=4.0. The migration will contain the following steps: New module installation Deprecations migration Database ...",t:"Migration Guide - CMS Block Category Connector"},"404":{i:0.00184408691947938,u:"../enablement/migration_guides/mg_cms_block_category_connector_console.html",a:"\n\u003c?php\n\n/**\n * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\CmsBlockCategoryConnector\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - CMS Block Category Connector Migration Console"},"405":{i:0.000870922281812816,u:"../enablement/migration_guides/mg_cms_to_cms_block_console.html",a:"\n\u003c?php\n\n/**\n * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\CmsBlock\\Communication\\Console;\n\nuse Orm\\Zed\\Cms\\Persistence\\SpyCmsPage;\nuse ...",t:"Migration Guide - CMS Block Migration Console"},});