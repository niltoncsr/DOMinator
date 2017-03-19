// Very raw code, what matters at this stage is the idea.


// Create element given id tag name, CSS classes, its content and HTML attibutes
const newEl = (tag, classes, content, attrs) => {
	let el = document.createElement(tag);

	if(classes) {
		if(typeof(classes) === 'string')
			el.classList.add(classes)
		else {
			classes.forEach(function(c) {
				el.classList.add(c);
			});
		};
	}

	if(content) {
		if(typeof(content) === 'string') el.innerText = content;
		else insertEls(el, content);
	}

	if(attrs) {
		for(attr in attrs) {
			if(attrs.hasOwnProperty(attr))
				el[attr] = attrs[attr];
		};
	};

	return el;
};


// Insert element(s) inside a given parent element
const insertEls = (parent, child) => {
	if(arguments.length === 2) {
		parent.appendChild(child);

		return;
	}
	else if(arguments.length > 2) {
		let children = Array.prototype.slice.call(arguments, 1);

		for(let i = 0; i < children.length; i++) {
			parent.appendChild(children[i]);
		};

		return;
	}
};
