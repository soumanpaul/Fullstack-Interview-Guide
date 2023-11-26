
var myObj = [
	{
		"name": "needle",
		"children": [
		{
			"name": "group2",
			"children": [
			{
				"name": "item0"
			}]
		}]
	},
	{
		"name": "item1"
	},
	{
		"name": "needleGroup",
		"children": [
		{
			"name": "needleNestedGroup",
			"children": [
			{
				"name": "item3"
			},
			{
				"name": "needleNestedDeeperGroup",
				"children": [
				{
					"name": "needle"
				}]
			}]
		}]
	}
]


function getPath(obj, givenKey, givenValue) {
	let matches = [];
	for (var key in obj) {
	  if (obj[key] && typeof obj[key] === "object") {
		var result = getPath(obj[key], givenValue, givenKey);
		if (result) {
		  result.unshift(key)
		  matches.push(...result);
		}
	  } else if (obj[key] === givenValue && key === givenKey) {
		matches.push(key);
	  }
	}
	
	return matches;
  }


console.log(getPath(myObj, "name", "needle"))
// [0, "name"]
// ["2","children","0","children","1","children","0","name"]	