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

module.exports = insertEls;
