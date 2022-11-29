import React from 'react';
import Title from './components/Title';
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <Title/>
    </div>
  );
}

export default App;


// PSEUDO CODE:

// STEP 1: Connect our react App to firebase to indicate that when our JSX mounts, we will make a call to Firebase to connect our API where we will then be able to grab our objects and surface them on the page

// Step 2: Create a function where our user is able upload an image file from their computer to our button

// Step 3: Listen for the value of the image that was given by the user, namely the url and store this into our realtime firebase database. Must store this value into an array which we can then use to populate a div that we create onChange?

// Step 4: Once the user has selected their image we can surface the download speed and surface it to the user so they can see the progress of their upload

// Step 5: Once the image is done loading, we now want to have the image populate our screen, where it will be styles with css

// Step 6: Create an onclick where user clicks on an image that is given to use from our Firebase API. This click makes the image bigger to view and changes some of the styling of the page.
