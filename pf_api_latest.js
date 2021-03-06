/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * (c) 2013 Capita plc, Author: Grzegorz Wozniak (gregory.wozniak@capita.co.uk), London, United Kingdom
 * pf_api script is a property of Capita plc and is protected by international copyright laws.
 * pf_api script code is not open source, nor free to use, reproduce or clone without our express written permission.
 * pf_api script uses some open source libraries, and these remain (of course) open source.
 * Please respect our hard work, as we will yours. Thanks.
 *
 * This library is free to use ONLY by Capita plc group parts for Capita purposes
 * Developed under Capita Resourcing Ltd. Registered office and registered number as above. Part of Capita plc.
 * Registered office: 71 Victoria Street, Westminster, London SW1H 0XA. Registered in England No. 3949686
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

 
(function($) {

    $.fn.peopleFluent = function(c) {
		var fields			    = 	c["fields"];
		var	searchType		    =	c["search"];
		var resultsContainerId  =   c["resultsContainerId"];
        var jobsPerPage         =   c["jobsPerPage"];
        var showHotJobs         =   c["showHotJobs"];
        var multipleChoice      =   c["multipleChoice"];
        var multipleChoiceListSize = c["multipleChoiceListSize"];
        var redirectOnSubmit    =   c["redirectOnSubmit"];
	
		// v1.1
		var businessUnit		=   c["businessUnit"];
	
		var formId			    =	$(this).attr('id');
        var submitLabel         =   c["submitLabel"];

		var apiUrl			    = 	c["uri"];
		       

        var fieldsConfig        =   {
                                        "positionCategory"	 :	{
                                                                    "name"  :   "com.peopleclick.cp.formdata.FLD_JP_POSITION_CATEGORY",
                                                                    "type"  :   "select",
                                                                    "label" :   "Position category",
                                                                    "id"    :   "fld_jp_position_category"
                                                                },
                                        "employmentType"	 :	{
                                                                    "name"  :   "com.peopleclick.cp.formdata.JPM_DURATION",
                                                                    "type"  :   "select",
                                                                    "label" :   "Employment type",
                                                                    "id"    :   "jmp_duration"
                                                                },
                                        "location"			 :	{
                                                                    "name"  :   "com.peopleclick.cp.formdata.JPM_LOCATION",
                                                                    "type"  :   "select",
                                                                    "label" :   "Location",
                                                                    "id"    :   "jmp_location"
                                                                },
                                        "keywords"			 :  {
                                                                    "name"  :   "com.peopleclick.cp.formdata.SEARCHCRITERIA_KEYWORDS",
                                                                    "type"  :   "text",
                                                                    "label" :   "Keywords",
                                                                    "id"    :   "searchcriteria_keywords"
                                                                },
                                        "jobId"			     :	{
                                                                    "name"  :   "com.peopleclick.cp.formdata.SEARCHCRITERIA_CLIENTREQID",
                                                                    "type"  :   "text",
                                                                    "label" :   "JobID",
                                                                    "id"    :   "searchcriteria_clientreqid"
                                                                }
                                    };


        var employmentTypeOptions   = {
            "6"	    : "Contract",
            "8"	    : "Permanent, Full Time",
            "13"	: "Fixed Term Contract, Full Time",
            "14"	: "Fixed Term Contract, Part Time",
            "15"    : "Permanent, Part Time"
        }


        var positionCategoryOptions = {
			11: "Administration",
			14: "Consulting (Capita Employee Benefits)",	
            17: "Education",
            19: "Recruitment",
            20: "Construction & Engineering",
            23: "Finance, Risk & Business Assurance",
            27: "HR",
            28: "Insurance",
            31: "Legal & Commercial",
            34: "Marketing",
            39: "Facilities & Property",
            44: "Sales & Marketing",
            48: "IT",
            60: "Training",
            63: "Customer service and contact centre",
            69: "Medical & Healthcare",
			72: "Actuarial",
            81: "Administration & Office",
            93: "Construction",
            94: "Executive Appointments",
            95: "Business Assurance",
            96: "Change Management",
            97: "Finance",
            98: "Assessment & Selection",
            99: "Career Centres",
			100: "Print",
			101: "Technical (Capita Employee Benefits)",
			102: "Pensions Administration (Capita Employee Benefits)",
			103: "Business Operations (Capita Employee Benefits)"
        }



        var workLocationOptions     = {
            "139" : "India",
            "252" : "Ireland - Dublin",
            "262" : "Ireland - Maynooth",
            "288" : "North Africa",
            "263" : "Poland",
            "254" : "UK - Based at home",
            "154" : "UK - England - Bedfordshire",
            "155" : "UK - England - Berkshire",
            "257" : "UK - England - Birmingham",
            "275" : "UK - England - Bovington",
            "260" : "UK - England - Bristol",
            "156" : "UK - England - Buckinghamshire",
            "157" : "UK - England - Cambridgeshire",
            "158" : "UK - England - Cheshire",
            "159" : "UK - England - Cornwall",
            "261" : "UK - England - Coventry",
            "160" : "UK - England - Cumberland",
            "255" : "UK - England - Cumbria",
            "161" : "UK - England - Derbyshire",
            "162" : "UK - England - Devon",
            "163" : "UK - England - Dorset",
            "164" : "UK - England - Durham",
            "165" : "UK - England - Essex",
            "166" : "UK - England - Gloucestershire",
            "256" : "UK - England - Greater Manchester",
            "167" : "UK - England - Hampshire",
            "168" : "UK - England - Herefordshire",
            "169" : "UK - England - Hertfordshire",
            "170" : "UK - England - Huntingdonshire",
            "171" : "UK - England - Kent",
            "172" : "UK - England - Lancashire",
            "173" : "UK - England - Leicestershire",
            "277" : "UK - England - Lichfield",
            "174" : "UK - England - Lincolnshire",
            "175" : "UK - England - London",
            "258" : "UK - England - Merseyside",
            "176" : "UK - England - Middlesex",
            "177" : "UK - England - Norfolk",
            "178" : "UK - England - Northamptonshire",
            "179" : "UK - England - Northumberland",
            "180" : "UK - England - Nottinghamshire",
            "181" : "UK - England - Oxfordshire",
            "278" : "UK - England - Pirbright",
            "182" : "UK - England - Rutland",
            "183" : "UK - England - Shropshire",
            "184" : "UK - England - Somerset",
            "291" : "UK - England - Stafford",
            "185" : "UK - England - Staffordshire",
            "186" : "UK - England - Suffolk",
            "187" : "UK - England - Surrey",
            "188" : "UK - England - Sussex",
            "281" : "UK - England - Tyne and wear",
            "280" : "UK - England - Upavon",
            "189" : "UK - England - Warwickshire",
            "279" : "UK - England - Westbury",
            "190" : "UK - England - Westmorland",
            "191" : "UK - England - Wiltshire",
            "192" : "UK - England - Worcestershire",
            "193" : "UK - England - Yorkshire",
            "265" : "UK - Isle of Man",
            "266" : "UK - Nationwide",
            "194" : "UK - Northern Ireland - Antrim",
            "195" : "UK - Northern Ireland - Armagh",
            "103" : "UK - Northern Ireland - Belfast",
            "253" : "UK - Northern Ireland - Belfast",
            "196" : "UK - Northern Ireland - Down",
            "197" : "UK - Northern Ireland - Fermanagh",
            "198" : "UK - Northern Ireland - Londonderry",
            "199" : "UK - Northern Ireland - Tyrone",
            "200" : "UK - Scotland - Aberdeenshire",
            "201" : "UK - Scotland - Angus",
            "202" : "UK - Scotland - Argyllshire",
            "203" : "UK - Scotland - Ayrshire",
            "204" : "UK - Scotland - Banffshire",
            "205" : "UK - Scotland - Buteshire",
            "206" : "UK - Scotland - Caithness",
            "207" : "UK - Scotland - Clackmannanshire",
            "208" : "UK - Scotland - Cromartyshire",
            "209" : "UK - Scotland - Dumfries-shire",
            "210" : "UK - Scotland - Dunbartonshire",
            "211" : "UK - Scotland - East Lothian",
            "251" : "UK - Scotland - Edinburgh",
            "292" : "UK - Scotland - Falkirk",
            "212" : "UK - Scotland - Fife",
            "259" : "UK - Scotland - Glasgow",
            "276" : "UK - Scotland - Glencorse",
            "213" : "UK - Scotland - Inverclyde",
            "214" : "UK - Scotland - Inverness-shire",
            "215" : "UK - Scotland - Kincardineshire",
            "216" : "UK - Scotland - Kinross-shire",
            "217" : "UK - Scotland - Kirkcudbrightshire",
            "218" : "UK - Scotland - Lanarkshire",
            "219" : "UK - Scotland - Midlothian",
            "220" : "UK - Scotland - Morayshire",
            "221" : "UK - Scotland - Nairnshire",
            "222" : "UK - Scotland - Orkney",
            "223" : "UK - Scotland - Peeples-shire",
            "224" : "UK - Scotland - Perthshire",
            "225" : "UK - Scotland - Renfrewshire",
            "226" : "UK - Scotland - Ross-shire",
            "227" : "UK - Scotland - Roxburghshire",
            "228" : "UK - Scotland - Selkirkshire",
            "229" : "UK - Scotland - Shetland",
            "230" : "UK - Scotland - Stirlingshire",
            "231" : "UK - Scotland - Sutherland",
            "232" : "UK - Scotland - West Lothian",
            "233" : "UK - Scotland - Wigtownshire",
            "234" : "UK - Wales - Anglesey",
            "235" : "UK - Wales - Breconshire",
            "236" : "UK - Wales - Caernavonshire",
            "250" : "UK - Wales - Cardiff",
            "237" : "UK - Wales - Cardiganshire",
            "238" : "UK - Wales - Carmarthenshire",
            "284" : "UK - Wales - Conwy",
            "239" : "UK - Wales - Denbighshire",
            "240" : "UK - Wales - Flintshire",
            "241" : "UK - Wales - Glamorgan",
            "242" : "UK - Wales - Gwernesney",
            "243" : "UK - Wales - Gwynedd",
            "244" : "UK - Wales - Merionethshire",
            "245" : "UK - Wales - Monmouthshire",
            "246" : "UK - Wales - Montgomeryshire",
            "247" : "UK - Wales - Pembrokeshire",
            "248" : "UK - Wales - Powys"
        }


        initializePeopleFluentForm(formId);


        $('body').on('submit', '#'+formId+'_form', function(e) {

            e.preventDefault();

			serializedFormData = serializeForm();

            url                = buildApiUrl();

            query              = buildApiQuery(serializedFormData);

            if (redirectOnSubmit === true)
                redirectToSearchResults(url, query);
            else
                createPeopleFluentIframe(formId, resultsContainerId, url, query);
		});



        // ******** Form generation



        // Assign the form into the plugin container
        function initializePeopleFluentForm(formId)
        {
            $('#'+formId).html(generatePeopleFluentForm());
        }


        // Create the form dynamically based on configuration
        function generatePeopleFluentForm()
        {
            html = '<form id="'+formId+'_form" method="get" name="'+formId+'_form">'+
                generateFormFields()+
                '    <input type="submit" value="'+submitLabel+'" name="pf_submit" class="input-submit">'+
                '</form>';

            return html;
        }


        // Basing on configuration set the fields which should be visible on the form
        function generateFormFields()
        {
            htmlFields = '';
            i = 0;

            for (field in fields)
            {
                i++;
                display     = fields[field]["display"];
                customValue = fields[field]["value"];
                reverseLogic = fields[field]["reverse"];
                name        = fieldsConfig[field]["name"];
                id          = fieldsConfig[field]["id"];
                type        = fieldsConfig[field]["type"];
                caption     = fieldsConfig[field]["label"];

                // Display set every two items: label : field
                displaySet  = (i % 2 == 0);

                if (display === true)
                {
                    // Fieldset
                    htmlFields += '<fieldset class="pf_fs f'+i+'">';

                    // Label
                    htmlFields += createLabelTag(name, caption);

                    // Field
                    htmlFields += (type  == "select")
                               ?   inputSelect(name, id, fetchInputSelectValues(field, customValue, reverseLogic))
                               :   inputText(name, id, customValue);

                    // fieldset
                    htmlFields += '</fieldset>';
                }
            }
            return htmlFields;
        }



        // Create label tag
        function createLabelTag(fieldname, text)
        {
            html = '<label for="'+fieldname+'">'+text+'</label>';
            return html;
        }


        // Create input: text
        function inputText(fieldname, id, value)
        {
            (value.length == 0)
                    ?   htmlValue = ''
                    :   htmlValue = 'value="'+value+'"';

            html = '<input type="text" name="'+fieldname+'" id="'+id+'" '+htmlValue+' class="input-text" />';

            return html;
        }


        // Create input: select
        function inputSelect(fieldname, id, values)
        {
            // Check if multiple choice is allowed
            mc = '';
            if (multipleChoice === true)
                mc = 'size="'+multipleChoiceListSize+'" multiple="true"';

            html = '<select name="'+fieldname+'" id="'+id+'" class="input-select" '+mc+'>'+
                        values +
                   '</select>';

            return html;
        }


        // Fetch <select> values basing on key
        // If default then get the whole array, otherwise take the values given
        function fetchInputSelectValues(key, customValues, reverseLogic)
        {
            if (key == "positionCategory")
                dataRecord = positionCategoryOptions;
            else if (key == "employmentType")
                dataRecord = employmentTypeOptions;
            else if (key == "location")
                dataRecord = workLocationOptions;
            else
                dataRecord = {};

            html = '';

            if (customValues.length > 0)
            {
                // Fetch only values given
                customValuesTable = explode(customValues, ",");
                if (reverseLogic === true)
                {
                    for (record in dataRecord)
                    {
                        if ( (customValues.indexOf(record + ",") && customValues.indexOf("," + record)) == -1)
                            html = html + '<option value="'+record+'">'+dataRecord[record]+'</option>';
                    }
                }
                else
                    for (record in customValuesTable)
                    {
                        value = customValuesTable[record];
                        html = html + '<option value="'+value+'">'+dataRecord[value]+'</option>';
                    }
            }
            else
            {
                // Fetch full array of values, no custom values present
                for (record in dataRecord)
                    html = html + '<option value="'+record+'">'+dataRecord[record]+'</option>';
            }
            return html;
        }


        // PHP explode
        function explode(string, delimeter)
        {
            return (string.length > 0)
                        ?   string.split(delimeter)
                        :   '';
        }



        // ******** URL generation


        // Create final API url
        function buildApiUrl()
        {
            url = apiUrl; 	// updated in v1.4
            return url;
        }	


        // Create final API query
        function buildApiQuery(serializedFormData)
        {
            query = serializedFormData + addBusinessUnit() + addJobsPerPage() + addShowHotJobs();			
            return query;
        }



        // Get all the values filled of peopleFluent form
        function serializeForm()
        {
            urlSegment = '';
            for (field in fields)
            {
                displayField = fields[field]["display"];
                if (displayField === true)
                {
                    urlSegment = urlSegment + serializeFieldIfNotEmpty(field);
                }
            }

            return urlSegment;
        }


        // Serializes field only if contains any value, empty fields are not part of the final query
        function serializeFieldIfNotEmpty(field)
        {

            id      = fieldsConfig[field]['id'];
            name    = fieldsConfig[field]['name'];
            uri     = '';

            value = $('#'+id).val();

            if (value != undefined && value != "undefined" && value != '')
            {
                uri = "&" + name + "=" + value;
            }
            else
                uri = '';

            return uri;
        }


        // Add Jobs per Page option in results
        function addJobsPerPage()
        {
            return (jobsPerPage > 0)
                    ?   "&com.peopleclick.cp.formdata.hitsPerPage="+jobsPerPage
                    :   "";
        }


        // Add hot jobs (???)
        function addShowHotJobs()
        {
            return (showHotJobs == 1)
                    ?   "&showHotJobs="+showHotJobs
                    :   "";
        }

		
		function addBusinessUnit()
		{
			return (businessUnit > 0)
				?	"&com.peopleclick.cp.formdata.FLD_JP_DEPARTMENT="+businessUnit
				:	"";
		}


        function redirectToSearchResults(url, query)
        {
            var src = url + query;

            window.location = src;
        }


        // ******** IFrame functions


        function createPeopleFluentIframe(formId, placeholderId, url, query)
        {

            var src = url + query;           

            var $theframe = $('<iframe src="'+src+'" name="pf-job-results" id="pf-job-results" frameborder="0" class="pf-job-results"></iframe>');

            $('#'+placeholderId).html($theframe);
        }


    }


}(jQuery));
