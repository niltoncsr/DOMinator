# DOMinator

> a collection of functions to deal with DOM elements easily

## Docs

### `newEl`

`newEl` returns a new element by passing a tag name, an ID, a class (or an array), its content, being a string or other elements, and other attributes. To skip any attribute that's not in that order, pass it as `null` or `undefined`.

```
newEl('div', 'modal-newsletter', ['modal-inner', 'modal--inactive'])
```

### `insertEls`

Given a `parent` elements and a single `child`, or an array of children,

```
insertEls(parent, child)
```

changes the given `parent` element inserting the children in the end.
