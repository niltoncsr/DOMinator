const insertEls = require('./insertEls');

// Create element given its tag name, CSS classes, its content and HTML attibutes
const newEl = (tagName, id, classes, content, attrs) => {
	let el = document.createElement(tagName);

	if(id) {
		el.id = id;
	}

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
	}

	return el;
};

module.exports = { newEl: newEl };
