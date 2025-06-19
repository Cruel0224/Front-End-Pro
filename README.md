Given an array of numbers const arr = [1, 2, 3, -1, -2, -3];

We need to write a function that will return a new array containing only positive numbers. To do this:

- Create a function with an arbitrary name.
- The function accepts an array as a parameter.
- In the body of the function, we create an empty array (example: const exampleArr = []).
- If the array passed as a parameter to the function is empty, then we return the corresponding message.
- We loop through the array passed as a parameter (we use a for loop).
- In the body of the loop, we check whether the current element is a positive or negative number (if).
- If the number is positive, then we add it to the previously created array using the push function (example exampleArr.push(currentPositiveNumber)).
- After executing the loop, we check the array that was filled with only positive values.
- If it is not empty, then we return this array.
- If it is empty, return null.

P.S. You can write an additional function to validate the data (optional).
