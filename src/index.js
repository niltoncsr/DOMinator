;(() => {
	if(window && window.document) {

		const newEl = require('./newEl');
		const insertEls = require('./insertEls');

		module.exports = {
			newEl: newEl,
			insertEls: insertEls
		};
	}
	else {
		throw new ReferenceError('No reference to window.document.')
	}
})();
