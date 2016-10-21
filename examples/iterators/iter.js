let itetable = ['a', 'bb', 'ccc'];
let iter = itetable[Symbol.iterator]();

console.log(iter.next());	// { value: 'a', done: false }
console.log(iter.next());	// { value: 'bb', done: false }
console.log(iter.next());	// { value: 'ccc', done: false }
console.log(iter.next());	// { value: undefined, done: true }
