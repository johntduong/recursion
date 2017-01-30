// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyArray = function(obj) {
	var string = '[';
  for (var i = 0; i < obj.length; i++) {
    string+=stringifyJSON(obj[i]);
    if (obj[i]!==obj[obj.length-1]) {
      string+=',';
    }
  }
  string += ']';
  return string;
};

var stringifyObject = function(obj) {
  var string = '{';
  var val;
  var strings = [];
  var str;
	for (var key in obj) {
    if (obj[key]===null || (obj[key]!=undefined && obj[key].constructor!==Function) ) {
      //string+='\"' + key + '\"' + ':';
      //string+=stringifyJSON(obj[key]);
      //if (key!==Object.keys(obj)[Object.keys(obj).length-1]) {
      //  string+=',';
      //}
      str='"' + key + '"' + ':';
      str+=stringifyJSON(obj[key]);
      strings.push(str);
    }
	}
  string+=strings.join(",");
	string+= '}';
	return string;
};

var stringifyJSON = function(obj) {
	var string = '';
	if (obj===null) {
	  string+='null';
	} else if (obj.constructor===Array) {
    string+=stringifyArray(obj);
  } else if (obj.constructor===Object) {
    string+=stringifyObject(obj);
  } else if (obj.constructor===String) {
    string+='"' + obj + '"';
  } else {
  string+=obj;
  }
  return string;
};
