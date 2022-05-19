console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
//Changed the argument from < 4 to < 6 so the loop will continue to our goal of counting to 5.
for(let i=0; i < 6; i++){
  console.log(i);
}
// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
//We will change our variable to be equal to 3 instead of 0.
for(i=3; i < 6; i++)
console.log(i);

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

//method 1 I started the index variable at 2 and changed the conditional to be less than/equal to 10. I added an if statement to divide by 2 and check for a remainder of 0 to ensure the numbers logged are even.
for(i=2; i<=10; i++){
  if(i % 2 == 0){
    console.log(i);
  }
}

//method 2 I set the variable i to a value of 2, changed the conditional to be less than/equal to 10 and incremented by 2 to log even numbers starting at 2.
for(i=2; i<=10; i+=2){
  console.log(i);
}

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for(i=5; i>=0; i--){
  console.log(i);
}

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for(star of stars){
  console.log(star);
}

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let starName = 0;
while(stars[starName]){
  console.log(stars[starName]);
  starName++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
let range = 0;
while(range <= 5){
  console.log(range);
  range++;
}
// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
let newRange = 10;
while(newRange >=5){
  console.log(newRange);
  newRange--;
}