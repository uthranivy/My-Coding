// console.log("Uthra Developer");
// console.error("Error");
// console.warn("Warning");

// console.time("Hello All");
//     console.log("Hello All");
//     console.log("Hello All");
//     console.log("Hello All");
//     console.log("Hello All");
//     console.log("Hello All");
//     console.log("Hello All");
//     console.log("Hello All");
// console.timeEnd("Hello All");


var nums1 = [21,7,2,15];
var target = 9


var twoSum = function(nums, target) {
    let a = 0;
    let count =nums.length
    console.log(count);
    for(let i=0; i<count; i++){
           a = a + nums[i];
            if(a !== target){
                a = 0;
            }


           if(a === target){
            let b =[];
             b.push(i-1,i);
            return b;
           }
    }
   
};



console.log(twoSum(nums1, target));


