//Recursion
function findMax1(ar)
{
	
	var max = -Infinity;
	for(var i = 0; i < ar.length; i++)
	{
		
		var el = ar[i];

		if ( Array.isArray(el) )
		{
			el = findMax1( el );
		}

		if ( el > max )
		{
			max = el;
		}
	}
	return max;
}

//Without recursion
function findMax2(arElements)
{
	var max = -Infinity;

	var arrays = [];

	arrays.push(arElements);

	while(arrays.length > 0)
	{
		ar = arrays.pop();
		for(var i = 0; i < ar.length; i++)
		{
			var el = ar[i];3

			if ( Array.isArray(el) )
			{
				arrays.push(el);
				continue;
			}
			if (el > max)
			{
				max = el;
			}
		}
	}
	return max;
}

