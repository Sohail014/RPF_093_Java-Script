let numbers = [1, 2, -1, 5, -9, 7];
for (let i = 0; i < numbers.length - 2; i++) 
{
  for (let j = i + 1; j < numbers.length; j++) 
  {
    for (let k = j + 1; k < numbers.length; k++) 
	{
      let sum = numbers[i] + numbers[j] + numbers[k];
      if (sum == 0) {
        console.log(numbers[i] + " " + numbers[j] + " " + numbers[k]);
      }
    }
  }
}