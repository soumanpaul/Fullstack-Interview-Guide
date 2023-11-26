const animals = [
	{ id: 1,
	  type: 'cat',
	  pets: [
		{ id: 1,
		  name: 'Toby',
		  breed: 'Tabby'
		}, 
		{ id: 2,
		  name: 'Golden Girl',
		  breed: 'Russian Blue'
		}
	  ]  
	},
	{ id: 2,
	  type: 'dog',
	  pets: [
		{ id: 3,
		  name: 'Goldilocks',
		  breed: 'Poodle'
		}
	  ]
	},
	{ id: 3,
	  type: 'fish',
	  pets: [
		{ id: 4,
		  name: 'Marigold',
		  breed: 'Goldfish'
		}
	  ]
	}
  ]

const searchTerm = "Gold"

let results = []


//this function will take separate out each item from the larger object
function getEachItem(data) {
	data.forEach((item) => {
		searchItem(item)
	})
};


//this function will search through each of the items returned from getEachItem
function searchItem(item) {
	Object.keys(item).forEach((key) => {
		if(typeof item[key] === 'object'){
			searchItem(item[key]);
		}
		if(typeof item[key] === 'string'){
			let searchAsRegex = new RegExp(searchTerm, 'Go');
			if(item[key].match(searchAsRegex)){
				results.push("item.id");
			}
		}
	})
}
 console.log(results); 

  