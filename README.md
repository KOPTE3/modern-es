# modern-es (структура лекции)

## Часть 1
* Пару слов о стандартах (ES, JS, etc) ~5m (+)
* `let`, `const` vs `var` ~5m (+)
* Строки ~5m (+)
	- Template strings (коротко)
	- Unicode
	- методы
* Деструктуризация... ~10m (+)
	- массивов
	- объектов
	- вложенные значения
	- значения по умолчанию
	- деструктуризация аргументов функции
	- спред оператор в применении к деструктуризации
* Arrow functions ~5m (+)
* Объекты ~5m (+)
	- короткие и вычисляемые свойства
	- методы объектов, геттеры и сеттеры у объектов
	- геттер и сеттер у прототипа (коротко)
	- `Object.assign` и `Object.is` (коротко)
* Set, Map, WeakSet, WeakMap ~5m (+)
* Классы (коротко) ~5m (+)
* Тип данных Symbol ~5m (+)
	- ??! (особенности)
	- использование, отсутствие конфликтов
* Promise ~5-10m
	- `new Promise`
	- промисификация
	- чайнинг промисов
	- `Promise.prototype.*`
* Итераторы ~10m
	- концепция «итерируемых» (iterable) объектов, `for..of` и `Array.prototype.forEach`
	- `Symbol.iterator`
	- свой итератор
	- оператор spread в применении к итерируемым объектам
	- бесконечные итераторы

* Генераторы ~10m
	- синтаксис
	- генераторы - итерируемые объекты
	- композиция генераторов
	- плоский асинхронный код и библиотечка co (если будет время)
	- something else?
* Модули ES6 (если будет время)
* ~ полтора часа прошло
* перерыв

## Часть 2
* Поддержка браузерами ~20m (+)
	- http://kangax.github.io/compat-table/es6/
	- http://caniuse.com/
	- полифиллы
	- транспайлинг (babel)
	- something else?
* Будущее? ~10m (+)
	- новые версии стандартов
	- как разрабатывается JS? (http://frontender.info/tc39-process/)
	- ES7 - не будущее ;]
		- Оператор `**`
		- `Array.prototype.includes`
* Будущее! ~30m (+)
	- https://github.com/tc39/proposals
	- stage 4 (https://github.com/tc39/proposals/blob/master/finished-proposals.md):
		- `Object.values` / `Object.entries` ~5m
		- Async Functions ~10m
		- String padding ~5m
	- stage 3 (если будет время) (https://github.com/tc39/proposals):
		- Object Rest/Spread Properties
		- Class and Property Decorators
* The End (+)



## Ссылочки

- http://www.ecma-international.org/ecma-262/7.0/
- http://www.2ality.com/2016/01/ecmascript-2016.html
