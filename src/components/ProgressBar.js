import React from "react";
import { firebaseStorage } from "../firebase/FirebaseConfig";
import FireStorage from '../hooks/FireStorage.js';


// We can now thake the custom hook that we have created and use this to render a status bar on the screen with the references we have created

// Step 2: We need to grab the props that were passed to the progress bar (imgFile & setImgFile)

const ProgressBar = ( {file, setFile} ) => {

    console.log(file);

    const {url, progress} = FireStorage(file);

    console.log(progress, url);



    // Step 1: Return a JSX template that we can put in our App.js which will impact what is displayed on screen
    return (
        <div className="progress-bar">Fetching your pic!</div>
    )


}

export default ProgressBar;