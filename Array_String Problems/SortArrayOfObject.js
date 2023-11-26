let employees = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 27,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'Ana',
        lastName: 'Rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'Zion',
        lastName: 'Albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    },
	{
        firstName: 'AAA',
        lastName: 'Albert',
        age: 12,
        joinedDate: 'February 15, 2011'
    }

];

employees.sort((a,b) => {
	
	let fa = a.firstName.toLocaleLowerCase()
	let fb = b.firstName.toLocaleLowerCase()

	return fa < fb ? -1 : 1;
})

console.log(employees)

employees.sort((a, b) => {
    let da = new Date(a.joinedDate),
        db = new Date(b.joinedDate);
    return da - db;
});



