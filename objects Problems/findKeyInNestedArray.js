const activityItems = [
    {
        name: 'Sunday',
        items: [
            {
                name: 'Gym',
                activity: 'weights',
            },
        ],
    },
    {
        name: 'Monday',
        items: [
            {
                name: 'Track',
                activity: 'race',
            },
            {
                name: 'Work',
                activity: 'meeting',
            },
            {
                name: 'Swim',
                items: [
                    {
                        name: 'Beach',
                        activity: 'scuba diving',
                    },
                    {
                        name: 'Pool',
                        activity: 'back stroke',
                    },
                ],
            },
        ],    
    }
];


// find value of activity

function getActivityValue(data, activity) {
	return data.some((value) =>{ 
		if(value.activity === activity)
			return true;
		else if(value.items) return getActivityValue(value.items, activity);
	})
}

console.log(getActivityValue(activityItems, "race"));

// Using for loop
const findMatchRecursion = (activity, activityItems) => {
    for (let i = 0; i < activityItems.length; i += 1) {
        if (activityItems[i].activity === activity) {
            return true;
        }

        if (activityItems[i].items && findMatchRecursion(activity, activityItems[i].items)) {
            return true;
        }
    }

    return false;
};