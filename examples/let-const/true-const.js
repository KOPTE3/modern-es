'use strict';

const obj = { foo: 'bar' };

Object.seal(obj);		// запечатывает объект
obj.foo = 'baz';		// OK - менять свойства можно

// TypeError: Can't add property foobar, object is not extensible
obj.foobar = null;

Object.freeze(obj);		// замораживает объект

// TypeError: Cannot assign to read only property 'foo' of object '#<Object>'
obj.foo = 'quux';
