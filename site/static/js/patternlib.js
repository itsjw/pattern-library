var examples = document.getElementsByClassName('example');
for(var i = 0; i < examples.length; i++) {
	var example = examples[i];
	// console.log("Example " + i + ": " + example.innerHTML);
	
	// Remove example class
	example.className = example.className.replace("example", "");

	// Create example code container
	// var code = document.createElement('div');
	// code.className = "example__code";
	// code.innerText = example.outerHTML;
	// example.insertAdjacentElement("afterend", code);
	
	var classes = document.createElement('div');
	classes.className = "example__classes";
	classes.innerText = example.getAttribute('class');
	example.insertAdjacentElement("afterend", classes);
}