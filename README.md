capita-pf-library
================

Javascript library that creates a search form and displays the results from PeopleFluent API as an iframe.
version 1.0, 05/06/2013, gregory.wozniak@capita.co.uk

For further information visit: http://pf.capitacreative.co.uk
Instruction how to integrate the library with a website are included in repository and are placed on the website above.

Changelog:
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
Capita Creative maintains *only* the latest version of the library.
We can help you in integration but we are not performing an integration of this library on any projects.
You can adjust the library specifically to the project requirements.

* * * * * * * * * * * * * * * * 
How to use capita-pf-library
* * * * * * * * * * * * * * * * 

Library ZIP pack contains:
- example of CSS (styling)
- minified version of the library
- sample working html file with library implementation


1. Configuration
Attach the configuration to the <head> or <body> section of the page where you need to place the query form and where the results should be displayed.

Example configuration:

		var pfConfig = {
			"fields"	:	{   "positionCategory"	 :	{ "display" : true, "value" : "11,17,19", "reverse" : true },
      								"employmentType"	   :	{ "display" : true, "value" : "", "reverse" : false  },
								      "location"			     :	{ "display" : true, "value" : "", "reverse" : false  },
								      "keywords"			     :  { "display" : true, "value" : "", "reverse" : false  },
								      "jobId" 			       :	{ "display" : true, "value" : "", "reverse" : false  }
							    },
							
			uri		  	              :   "http://careers.peopleclick.com/careerscp/client_capita/int1067771348",
      submitLabel             :   "Search vacancies",
			resultsContainerId 			: 	"job-results",
      redirectOnSubmit        :   false,
			jobsPerPage 				    :	  10,
			showHotJobs					    :	  0,
      multipleChoice          :   true,
			multipleChoiceListSize 	: 	5
		}		

2. 
