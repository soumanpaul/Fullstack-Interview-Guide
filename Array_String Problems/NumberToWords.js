
function numberToWordsUsingDictionary(number) {
    // Define a dictionary to map numbers to words
    const dictionary = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety'
    };
    
    const groups = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion'];

    if (number < 0) {
      return 'Number out of range';
    }
  
    if (number in dictionary) {
      return dictionary[number];
    }
  
    const numStr = String(number);
    const numStrLength = numStr.length;
    let words = '';
    let groupIndex = 0;
  
    while (numStrLength > 0) {
      const group = Number(numStr.slice(Math.max(numStrLength - 3, 0), numStrLength));
      if (group !== 0) {
        const groupWords = numberToWordsUpToQuintillion(group);
        words = groupWords + ' ' + groups[groupIndex] + ' ' + words;
      }
      numStrLength -= 3;
      groupIndex++;
    }
  
    return words.trim();
  }
  
  // Test the function with 17
  console.log(numberToWordsUsingDictionary(17)); // Output: "seventeen"
  