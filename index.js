// Code your solutions in this file
function writeCards(names, event) {
    // Create an empty array to hold the messages
    let messages = [];
  
    // Iterate through the input array of names
    for (let i = 0; i < names.length; i++) {
      // Build a custom message for each name using string interpolation
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      
      // Add the message to the new array
      messages.push(message);
    }
  
    // Return the new array containing the messages
    return messages;
  }
  function countDown(num) {
    if (num < 0) {
      console.log("Please provide a positive integer.");
      return;
    }
  
    // Print the numbers from the input to 0 using a while loop
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }