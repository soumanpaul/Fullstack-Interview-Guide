const data = [
	{
		name: "testmapping", 
		items: [
			{
				name: "lv2test1mapping", 
				items: [
					{name: "lv3test1mapping"},
					{name: "lv4test1mapping"},
					{name: "lv5test1mapping"}
				]
			},
			{
				name: "lv2test2mapping",
			},
			{
				name: "lv3test2mapping",
			}
		]
	},
	{
		name: "lv4test2mapping",
		items: [
			{
				name: "lv4test2mapping",
				items: [
					{name: "lv5test2mapping"},
					{name: "lv6test2mapping"},
					{name: "lv7test2mapping"}]
			},
			{
				name: "lv4test3mapping",
			},
			{
				name: "lv5test3mapping",
			}
		]
	}
]

function getValue(searchText){
	const localData = [...data]
	function getValueLogic(data, searchText){
		const arr = []
		if(data && Array.isArray(data)){
			for(let i = 0; i < data.length; i++) {
				const ele = data[i];
				ele && ele.name.includes(searchText) 
					? arr.push(ele)
					: arr.push(...getValueLogic(ele.items, searchText))
			}
		}
		return arr;
	}
	return getValueLogic(localData, searchText);
}

console.log("**One Level", getValue("test"))
console.log("**Two Level", getValue("test2"))
console.log("**Three Level", getValue("test3"))
console.log("Actual Data", data);