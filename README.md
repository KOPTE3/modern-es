# modern-es (структура лекции)

## Часть 1
* Пару слов о стандартах (ES, JS, etc) ~5m (+)
* `let`, `const` vs `var` ~5m (+)
* Деструктуризация... ~10m (+)
	- массивов
	- объектов
	- вложенные значения
	- значения по умолчанию
	- деструктуризация аргументов функции
	- спред оператор в применении к деструктуризации
* Arrow functions ~5m (+)
* Строки ~5m (+)
	- Template strings (коротко)
	- Unicode
	- методы
* Объекты ~5m
	- короткие и вычисляемые свойства
	- методы объектов, геттеры и сеттеры у объектов
	- геттер и сеттер у прототипа (коротко)
	- `Object.assign` и `Object.is` (коротко)
* Классы (коротко) ~5m
* Тип данных Symbol ~5m
	- ??! (особенности)
	- использование, отсутствие конфликтов
* Итераторы ~10m
	- концепция «итерируемых» (iterable) объектов, `for..of` и `Array.prototype.forEach`
	- `Symbol.iterator`
	- свой итератор
	- оператор spread в применении к итерируемым объектам
	- бесконечные итераторы
* Set, Map, WeakSet, WeakMap ~5m
	- перебор значений с помощью итераторов
* Promise ~5-10m
	- `new Promise`
	- промисификация
	- чайнинг промисов
	- `Promise.prototype.*`
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
* Поддержка браузерами ~20m
	- http://kangax.github.io/compat-table/es6/
	- http://caniuse.com/
	- полифиллы
	- транспайлинг (babel)
	- something else?
* Будущее? ~10m
	- новые версии стандартов
	- как разрабатывается JS? (http://frontender.info/tc39-process/)
	- ES7 - не будущее ;]
		- Оператор `**`
		- `Array.prototype.includes`
* Будущее! ~30m
	- https://github.com/tc39/proposals
	- stage 4 (https://github.com/tc39/proposals/blob/master/finished-proposals.md):
		- `Object.values` / `Object.entries` ~5m
		- Async Functions ~10m
		- String padding ~5m
	- stage 3 (если будет время) (https://github.com/tc39/proposals):
		- Object Rest/Spread Properties
		- Class and Property Decorators
* The End
