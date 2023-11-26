// Object.keys(), 
// Object.values(), 
// Object.entries()

const person = {
	firstName: "Souman",
	lastName: "Paul"
}

// Properties name to an array
const propertyNames = Object.keys(person)


//  property value to array
const propertyValues = Object.values(person)

console.log(propertyNames, propertyValues)

const enumerableKeyType = Object.entries(person)
// Object.
console.log(enumerableKeyType)