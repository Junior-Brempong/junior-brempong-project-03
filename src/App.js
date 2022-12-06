// This project was inspired by a project reference on Youtube (https://www.youtube.com/watch?v=vUe91uOx7R0&t=2284s). Because the video was created in 2020, several features on Firebase, FireStore, and React have changed quite a bit. 
import React from 'react';
import './styles/styles.css';
import Title from './components/Title';
import ImageForm from './components/Form';
// import { useState } from "react";
import ImageDisplay from './components/ImageDisplay';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Title/>
      <ImageForm />
      <ImageDisplay />
      <Footer/>
    </div>
  );
}

export default App;






// *******************************************************************


// PSEUDO CODE:

// Step 1: All about that base ...(fire)base!

// When my App.js component mounts, go get a grab my array of objects from my firebase API!
    // (a) We will make this API call the moment that our component mounts. We will not need to do this on a continual basis, so, that means we need to make our API call in a useeffect with an empty dependency Array.
    // (b) Once we get our data back, we need to organize it to the needs of our app. We can either add a tag to the images or we can parse through JSON results to recieve the specific infomration that we would like to have (in this instance it will be the url of the imgs uploaded)
    // (c) Once our data is back we must put it into State. That way it will persists even if the component renders again and again (this the MVP - the stretch goal would be to ulimately have the array wiped at the end of the session).


// Step 2: The form itself:

// Have a form on the page that allows the user to select an image they would like to upload from their computers via the file input. Upon submitting this fo with the file the user would like to select, we will take that valuable and store in a variable
    // (a) Will make this form in its own component! So we are able to shift the logic more easily
    // (b) This means that while most of the form logic will take place in its own component, we will then need to get the user's selection *UP* from the form component back to App.js.
    // (c) We will be able to do this! We can pass a function down as a prop from App.js to the form component. Then when we call the function in the form component, we can pass it the user's selection as an argument... which will then be received up in App.js!

// Step 3: Shall we mount?

// Write our JSX such that when we get our narrowed-down dataset (ie. a list of photos user's choice choice) we will have them map to the page.
    // (a) We will write this map in its own component, just to keep things clean, which means we will pass our list photos down as a PROP to this component.


// ********************************************************************


// PROJECT PREP NOTES:

// STEP 1: Connect our react App to firebase to indicate that when our JSX mounts, we will make a call to Firebase to connect our API where we will then be able to grab our objects and surface them on the page.
  // a. Create a new project in firebase and import firebase into JS
  // b. Organize all folders based off of firebase/components/hooks

// Step 2: Create a function where our user is able upload an image file from their computer to our button
  // a. We will use JSX to return a form element where out input will be file
  // b. Upon submitting this form with the file the user would like to select, we will take that valuable and store in a variable
  // c. This choice will be stored into state where we can access this globally

// Step 3: Listen for the value of the image that was given by the user, namely the url and store this into our realtime firebase database. Must store this value into an array which we can then use to populate a div that we create onChange?

// Step 4: Once the user has selected their image we can surface the download speed and surface it to the user so they can see the progress of their upload

// Step 5: Once the image is done loading, we now want to have the image populate our screen, where it will be styles with css

// Step 6: Create an onclick where user clicks on an image that is given to use from our Firebase API. This click makes the image bigger to view and changes some of the styling of the page.
