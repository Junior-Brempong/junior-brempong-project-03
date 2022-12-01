import React, { useEffect } from "react";
import { firebaseStorage } from "../firebase/FirebaseConfig";
import FireStorage from '../hooks/FireStorage.js';


// We can now thake the custom hook that we have created and use this to render a status bar on the screen with the references we have created

// Step 2: We need to grab the props that were passed to the progress bar (imgFile & setImgFile)

const ProgressBar = ( {file, setFile} ) => {

        // Step 2(a): In our progress bar function, we are going to get the value back for the URL and the progress. This is why we created a hook to pass. We returned these in our Firestorage hook. Now this hook will fire our useEffect. It will take the file, create a reference and try and upload it, when it does this, we will recieve the values for url & progress. The value of our percentage will be null until we reach 100% of the progress.

    const {url, progress} = FireStorage(file);

    // console.log(progress, url);

    // Step 2(d): Now that we have a progress bar, we want to remove it once it reaches full completion, to do this we set our file back to null once complete. To do this we can use useEffect to fire the function when the file of url changes.   
    useEffect(() => {   
        // If we have a valid url we want to set the file to null
        if (url) {
            setFile(null)
        }

    // Because we are using the setFile to as well, we must include this in our dependency
    }, [url, setFile] )



    // Step 1: Return a JSX template that we can put in our App.js which will impact what is displayed on screen
    // Step 2(c): Now that we have access to the progress status, we can style our progress bar div to reflect that by adding the width of the progress as a style
    return (
        <div className="progress-bar" style={ {width: progress + '%'} }></div>
    )


}

export default ProgressBar;