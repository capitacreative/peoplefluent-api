peoplefluent-api
================

Javascript library that creates a search form and displays the results from PeopleFluent API as an iframe.
version 1.0, 05/06/2013, gregory.wozniak@capita.co.uk

1. Configuration

Please see the configuration of the library. 
  
		var pfConfig = {
			
      "fields"	:	{   "positionCategory"	 :	{ "display" : true, "value" : "11,17,19", "reverse" : true },
			      					"employmentType"	   :	{ "display" : true, "value" : "", "reverse" : false  },
						      		"location"			     :	{ "display" : true, "value" : "", "reverse" : false  },
								      "keywords"			     :  { "display" : true, "value" : "", "reverse" : false  },
								      "jobId" 			       :	{ "display" : true, "value" : "", "reverse" : false  }
							},
							
			uri		      :   "http://careers.peopleclick.com/careerscp/client_capita/int1067771348",
      
      submitLabel :   "Search vacancies",
			
      resultsContainerId 	:	"job-results",
			
      jobsPerPage 				:	10,
			
      showHotJobs					:	0,
      
      multipleChoice              :   true,
			
      multipleChoiceListSize 	    : 	5
		}
		

2. Initialization

  	$(document).ready(function() {
        $('#pf').peopleFluent(pfConfig);
		});		


