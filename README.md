capita-pf-library
================

Javascript library that creates a search form and displays the results from PeopleFluent API as an iframe.
version 1.3, 05/06/2013, gregory.wozniak@capita.co.uk

For further information visit: http://peoplefluent.capitacreative.co.uk
Demo: http://pf.capitacreative.co.uk

Instruction how to integrate the library with a website are included in repository and are placed on the website above. Please notice you can use a library only to create a URL string. 

Changelog:
 
  Version 1.3.1: Gateway (API) link updated in example.html. Currently we will be using following API link http://careers.peopleclick.com/careerscp/client_capita/client_microsite/search.do?functionName=search for the purpose of this library.

  Version 1.3: Updated indexing for categories and new categories added (requested by: David Phillips)

  Version 1.2, 02/08/2013: Added "Business Unit" search criteria (see "Business Unit" tab for countries and id's in XLS)
&com.peopleclick.cp.formdata.FLD_JP_DEPARTMENT=XXX . Please use integer to declare business unit. The version without this function is also available in this repository.

  Version 1.1, 21/06/2013: Redirection to external page added    



* * * * * * * * * * * * * * * * 
Description
* * * * * * * * * * * * * * * * 

Library allows you to display query form and search jobs using PeopleFluent API. 
It requires JavaScript to be enabled in user's web browser configuration. 
Library is not using JSONP or any other form of internal data parsing due to Same Origin Policy (http://en.wikipedia.org/wiki/Same_origin_policy)

* * * * * * * * * * * * * * * * 
Integration
* * * * * * * * * * * * * * * * 

Being a web developer you need to integrate the library with your project by yourself. 
Capita Creative maintains *only* the latest version of the library. Please visit our microsite (link in Example) to learn more.

We can help you in integration but we are not performing an integration of this library on any projects.
You can adjust the library specifically to the project requirements.

Please notice that a bespoke "uri" should be requested when implementing the library. Please remember to modify businessUnit as well if necessary.

* * * * * * * * * * * * * * * * 
How to use capita-pf-library
* * * * * * * * * * * * * * * * 

Library ZIP pack contains:
- example of CSS (styling)
- minified version of the library
- sample working html file with library implementation

* * * * * * * * * * * * * * * * 
Example
* * * * * * * * * * * * * * * * 

To see an example and details how to integrate the library please go to: http://pf.capitacreative.co.uk
