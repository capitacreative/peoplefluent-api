
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * (c) 2013 Capita plc, Author: Grzegorz Wozniak (gregory.wozniak@capita.co.uk), London, United Kingdom
 * pf_api_min script is a property of Capita plc and is protected by international copyright laws.
 * pf_api_min script code is not open source, nor free to use, reproduce or clone without our express written permission.
 * pf_api_min script uses some open source libraries, and these remain (of course) open source.
 * Please respect our hard work, as we will yours. Thanks.
 *
 * This library is free to use ONLY by Capita plc group parts for Capita purposes
 * Developed under Capita Resourcing Ltd. Registered office and registered number as above. Part of Capita plc.
 * Registered office: 71 Victoria Street, Westminster, London SW1H 0XA. Registered in England No. 3949686
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

(function($){$.fn.peopleFluent=function(c){var g=c["fields"];var h=c["search"];var j=c["resultsContainerId"];var k=c["jobsPerPage"];var l=c["showHotJobs"];var m=c["multipleChoice"];var n=c["multipleChoiceListSize"];var o=$(this).attr('id');var p=c["submitLabel"];var q=c["uri"];var r="/gateway.do";var s="functionName=searchFromLink";var t={"positionCategory":{"name":"com.peopleclick.cp.formdata.FLD_JP_POSITION_CATEGORY","type":"select","label":"Position category","id":"fld_jp_position_category"},"employmentType":{"name":"com.peopleclick.cp.formdata.JPM_DURATION","type":"select","label":"Employment type","id":"jmp_duration"},"location":{"name":"com.peopleclick.cp.formdata.JPM_LOCATION","type":"select","label":"Location","id":"jmp_location"},"keywords":{"name":"com.peopleclick.cp.formdata.SEARCHCRITERIA_KEYWORDS","type":"text","label":"Keywords","id":"searchcriteria_keywords"},"jobId":{"name":"com.peopleclick.cp.formdata.SEARCHCRITERIA_CLIENTREQID","type":"text","label":"JobID","id":"searchcriteria_clientreqid"}};var u={"6":"Contract","8":"Permanent, Full Time","13":"Fixed Term Contract, Full Time","14":"Fixed Term Contract, Part Time","15":"Permanent, Part Time"}var v={"11":"Administration","17":"Education","19":"Recruitment","20":"Engineering","23":"Finance and Accountancy","27":"HR","28":"Insurance","31":"Legal","34":"Marketing","39":"Property","44":"Sales/Marketing/PR","48":"IT","60":"Training","63":"Customer service and contact centre","69":"Healthcare","81":"Office and Operations","93":"Construction","94":"Executive Appointments","95":"Business Assurance","96":"Change Management","97":"Finance","98":"Assessment & Selection","99":"Career Centres"}var w={"139":"India","252":"Ireland - Dublin","262":"Ireland - Maynooth","288":"North Africa","263":"Poland","254":"UK - Based at home","154":"UK - England - Bedfordshire","155":"UK - England - Berkshire","257":"UK - England - Birmingham","275":"UK - England - Bovington","260":"UK - England - Bristol","156":"UK - England - Buckinghamshire","157":"UK - England - Cambridgeshire","158":"UK - England - Cheshire","159":"UK - England - Cornwall","261":"UK - England - Coventry","160":"UK - England - Cumberland","255":"UK - England - Cumbria","161":"UK - England - Derbyshire","162":"UK - England - Devon","163":"UK - England - Dorset","164":"UK - England - Durham","165":"UK - England - Essex","166":"UK - England - Gloucestershire","256":"UK - England - Greater Manchester","167":"UK - England - Hampshire","168":"UK - England - Herefordshire","169":"UK - England - Hertfordshire","170":"UK - England - Huntingdonshire","171":"UK - England - Kent","172":"UK - England - Lancashire","173":"UK - England - Leicestershire","277":"UK - England - Lichfield","174":"UK - England - Lincolnshire","175":"UK - England - London","258":"UK - England - Merseyside","176":"UK - England - Middlesex","177":"UK - England - Norfolk","178":"UK - England - Northamptonshire","179":"UK - England - Northumberland","180":"UK - England - Nottinghamshire","181":"UK - England - Oxfordshire","278":"UK - England - Pirbright","182":"UK - England - Rutland","183":"UK - England - Shropshire","184":"UK - England - Somerset","291":"UK - England - Stafford","185":"UK - England - Staffordshire","186":"UK - England - Suffolk","187":"UK - England - Surrey","188":"UK - England - Sussex","281":"UK - England - Tyne and wear","280":"UK - England - Upavon","189":"UK - England - Warwickshire","279":"UK - England - Westbury","190":"UK - England - Westmorland","191":"UK - England - Wiltshire","192":"UK - England - Worcestershire","193":"UK - England - Yorkshire","265":"UK - Isle of Man","266":"UK - Nationwide","194":"UK - Northern Ireland - Antrim","195":"UK - Northern Ireland - Armagh","103":"UK - Northern Ireland - Belfast","253":"UK - Northern Ireland - Belfast","196":"UK - Northern Ireland - Down","197":"UK - Northern Ireland - Fermanagh","198":"UK - Northern Ireland - Londonderry","199":"UK - Northern Ireland - Tyrone","200":"UK - Scotland - Aberdeenshire","201":"UK - Scotland - Angus","202":"UK - Scotland - Argyllshire","203":"UK - Scotland - Ayrshire","204":"UK - Scotland - Banffshire","205":"UK - Scotland - Buteshire","206":"UK - Scotland - Caithness","207":"UK - Scotland - Clackmannanshire","208":"UK - Scotland - Cromartyshire","209":"UK - Scotland - Dumfries-shire","210":"UK - Scotland - Dunbartonshire","211":"UK - Scotland - East Lothian","251":"UK - Scotland - Edinburgh","292":"UK - Scotland - Falkirk","212":"UK - Scotland - Fife","259":"UK - Scotland - Glasgow","276":"UK - Scotland - Glencorse","213":"UK - Scotland - Inverclyde","214":"UK - Scotland - Inverness-shire","215":"UK - Scotland - Kincardineshire","216":"UK - Scotland - Kinross-shire","217":"UK - Scotland - Kirkcudbrightshire","218":"UK - Scotland - Lanarkshire","219":"UK - Scotland - Midlothian","220":"UK - Scotland - Morayshire","221":"UK - Scotland - Nairnshire","222":"UK - Scotland - Orkney","223":"UK - Scotland - Peeples-shire","224":"UK - Scotland - Perthshire","225":"UK - Scotland - Renfrewshire","226":"UK - Scotland - Ross-shire","227":"UK - Scotland - Roxburghshire","228":"UK - Scotland - Selkirkshire","229":"UK - Scotland - Shetland","230":"UK - Scotland - Stirlingshire","231":"UK - Scotland - Sutherland","232":"UK - Scotland - West Lothian","233":"UK - Scotland - Wigtownshire","234":"UK - Wales - Anglesey","235":"UK - Wales - Breconshire","236":"UK - Wales - Caernavonshire","250":"UK - Wales - Cardiff","237":"UK - Wales - Cardiganshire","238":"UK - Wales - Carmarthenshire","284":"UK - Wales - Conwy","239":"UK - Wales - Denbighshire","240":"UK - Wales - Flintshire","241":"UK - Wales - Glamorgan","242":"UK - Wales - Gwernesney","243":"UK - Wales - Gwynedd","244":"UK - Wales - Merionethshire","245":"UK - Wales - Monmouthshire","246":"UK - Wales - Montgomeryshire","247":"UK - Wales - Pembrokeshire","248":"UK - Wales - Powys"}initializePeopleFluentForm(o);$('body').on('submit','#'+o+'_form',function(e){e.preventDefault();serializedFormData=serializeForm();url=buildApiUrl();query=buildApiQuery(serializedFormData);createPeopleFluentIframe(o,j,url,query)});function initializePeopleFluentForm(a){$('#'+a).html(generatePeopleFluentForm())}function generatePeopleFluentForm(){html='<form id="'+o+'_form" method="get" name="'+o+'_form">'+generateFormFields()+'    <input type="submit" value="'+p+'" name="pf_submit" class="input-submit">'+'</form>';return html}function generateFormFields(){htmlFields='';i=0;for(field in g){i++;display=g[field]["display"];customValue=g[field]["value"];reverseLogic=g[field]["reverse"];name=t[field]["name"];id=t[field]["id"];type=t[field]["type"];caption=t[field]["label"];displaySet=(i%2==0);if(display===true){htmlFields+='<fieldset class="pf_fs f'+i+'">';htmlFields+=createLabelTag(name,caption);htmlFields+=(type=="select")?inputSelect(name,id,fetchInputSelectValues(field,customValue,reverseLogic)):inputText(name,id,customValue);htmlFields+='</fieldset>'}}return htmlFields}function createLabelTag(a,b){html='<label for="'+a+'">'+b+'</label>';return html}function inputText(a,b,c){(c.length==0)?htmlValue='':htmlValue='value="'+c+'"';html='<input type="text" name="'+a+'" id="'+b+'" '+htmlValue+' class="input-text" />';return html}function inputSelect(a,b,c){mc='';if(m===true)mc='size="'+n+'" multiple="true"'html='<select name="'+a+'" id="'+b+'" class="input-select" '+mc+'>'+c+'</select>';return html}function fetchInputSelectValues(a,b,c){if(a=="positionCategory")dataRecord=v;else if(a=="employmentType")dataRecord=u;else if(a=="location")dataRecord=w;else dataRecord={};html='';if(b.length>0){customValuesTable=explode(b,",");if(c===true){for(record in dataRecord){if((b.indexOf(record+",")&&b.indexOf(","+record))==-1)html=html+'<option value="'+record+'">'+dataRecord[record]+'</option>'}}else for(record in customValuesTable){value=customValuesTable[record];html=html+'<option value="'+value+'">'+dataRecord[value]+'</option>'}}else{for(record in dataRecord)html=html+'<option value="'+record+'">'+dataRecord[record]+'</option>'}return html}function explode(a,b){return(a.length>0)?a.split(b):''}function buildApiUrl(){url=q+r;return url}function buildApiQuery(a){query=s+a+addJobsPerPage()+addShowHotJobs();return query}function serializeForm(){urlSegment='';for(field in g){displayField=g[field]["display"];if(displayField===true){urlSegment=urlSegment+serializeFieldIfNotEmpty(field)}}return urlSegment}function serializeFieldIfNotEmpty(a){id=t[a]['id'];name=t[a]['name'];uri='';value=$('#'+id).val();if(value!=undefined&&value!="undefined"&&value!=''){uri="&"+name+"="+value}else uri='';return uri}function addJobsPerPage(){return(k>0)?"&com.peopleclick.cp.formdata.hitsPerPage="+k:""}function addShowHotJobs(){return(l==1)?"&showHotJobs="+l:""}function createPeopleFluentIframe(a,b,c,d){var e=c+'?'+d;var f=$('<iframe src="'+e+'" name="pf-job-results" id="pf-job-results" frameborder="0" class="pf-job-results"></iframe>');$('#'+b).html(f)}}}(jQuery));