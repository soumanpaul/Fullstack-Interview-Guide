const user = {
	userId: 1234,
	userName: "Karthick"
}

const person = {
	firstName: "Ram",
	lastName: "Kumar"
}

const updatedObject = { ...person, ...user }

console.log(updatedObject)


const array = [...updatedObject]
let id = array[userId];

// 

let a = [1,1,1,1,[1,1,[1]]]

let sum =0;

function Sum(a){
	for(let i = 0; i < a.length; i++) {
		if(!Array.isArray(a[i])){
			sum+=a[i];
		}else {
			Sum(a[i])
		}
	}
	return;
}
Sum(a)
console.log(sum);