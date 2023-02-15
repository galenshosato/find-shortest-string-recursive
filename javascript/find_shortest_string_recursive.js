function findShortestStringRecursive(arr) {

    function helper(array, smallest) {
        if (array.length === 0) {
            return smallest
        }
        const head = array[0]
        const tail = array.slice(1)
        if (head.length < smallest.length) {
          smallest = head
        }
      return helper(tail, smallest)
      
    }
    
    return helper(arr, arr[0])
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
