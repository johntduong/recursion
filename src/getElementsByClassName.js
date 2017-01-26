// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var recGetElementsByClassName = function(element) {
    var elements = [];
    // work here
    if (element.classList.contains(className)) {
      elements.push(element); //['className', 'things']
    }
    for (var i = 0; i < element.children.length; i++) {
      elements = elements.concat(recGetElementsByClassName( element.children[i]));
    }
    // recursive call
    return elements;
  }
	// call to recGetElementsByClassName here
  return recGetElementsByClassName(document.body);
}
