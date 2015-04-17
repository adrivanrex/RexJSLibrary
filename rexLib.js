/*
*	Convert JSON to URL Parameter
*/

function jsonToUrlParam(json){
			var str = Object.keys(object).map(function(key){ 
		  return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]); 
			}).join('&');
			return str;
		}

/*
*	Convert String Key = value type Strings
* e.g
*	country=Philippines countryid=840 operator=Globe Telecom Philippines operatorid=246 connection_status=96 destination_msisdn=639358661725 
*/

function string_to_json(s) {
 return JSON.stringify(s.split('\r\n').
 reduce(function(s,a) {r = a.split('='); 
 s[r[0]] = r[1]; return s;}, {}))
}

