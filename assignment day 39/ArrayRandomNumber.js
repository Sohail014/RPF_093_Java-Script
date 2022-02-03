const nums = [];    // Declare an array

// Generate 10 random numbers and store them in the array
for(let i =0;i<11;i++){    
    nums[i] = Math.floor(Math.random()*1000);
}
let largest = 0;
let second_largest = 0;

// Find second largest number without sorting
for (let j=0;j<nums.length;j++){
    if(largest < nums[j]){
        second_largest = largest;
        largest = nums[j];
    }else if(second_largest<nums[j]){
        second_largest = nums[j];
    }
}
console.log(" Second largest number = " + second_largest);

// Sort the array in ascending order
for(let m=0;m<nums.length;m++){
    for (let n=m+1;n<nums.length;n++){
        if(nums[m] > nums[n]){
            let temp = nums[n];
            nums[n] = nums[m];
            nums[m] = temp;
        }
    }
}

// Print second largest and second smallest number
console.log(" Second smallest number = "+ nums[1]);
console.log(" Second largest number = "+ nums[nums.length-2]);