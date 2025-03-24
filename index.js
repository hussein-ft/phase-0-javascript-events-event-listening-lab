// Step 1: Define the function addingEventListener
function addingEventListener() {
  // Step 2: Access the button element by its ID
  const button = document.getElementById('button');

  // Step 3: Attach the event listener to the button
  button.addEventListener('click', function() {
    alert('I was clicked!');
  });
}

