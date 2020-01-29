// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.

// function remove(members, potentialMember) { console.log(potentialMember, members)
//     for (let i=0; i < members.length; i++) {
//         console.log(members[i])
//         if (potentialMember === members[i]) {
//             members.splice(i, 1)
//         }

//     } console.log(members)
//     return members
//     }

// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

 
function remove(members, potentialMember)  {
  let newArray = members.slice() 
    for (let i=0; i < newArray.length; i++) {
        if (potentialMember === newArray[i]) {
            newArray.splice(i, 1)
        }
    } console.log(newArray, potentialMember)
    return newArray
    }
    

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.


// function sum(numbers) {

//     for (let number of numbers) {
//     numbers += number
// }
// return numbers
// }

function sum(numbers) {
    return numbers.reduce (function (total, number) {
        return (total + number)
    }, 0)
}

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

// function average(numbers) {
//     numbers/numbers.length
// }

function average(numbers) {
    if (numbers.length > 0) {
    return numbers.reduce (function (total, number) {
        return (total + number)
    }, 0)/numbers.length
}
}




// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum(numbers) {
    Math.min(numbers)
}


// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.

// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.



// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.
