class MyClass{
    constructor(props){
        var testProp = Object.freeze(props)
        Object.defineProperty(this, "testProp", { get: ()=>{return Object.assign({},testProp)} });
    }
}
var test = new MyClass({name: 'ryan'})

var origin = test.testProp
test.testProp='a'
console.log(test.testProp)

var copy = test.testProp
copy.name = 'Bob'

console.log(origin)
console.log(copy)

