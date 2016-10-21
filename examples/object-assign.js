let obj1 = {name: `Jhon`, age: 18};
let obj2 = {fam: `Snow`, age: 22};
let result = Object.assign({}, obj1, obj2);

console.log(result);
// { name: 'Jhon', age: 22, fam: 'Snow' }
