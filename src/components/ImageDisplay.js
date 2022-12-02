import React from "react";
import useFirestore from '../hooks/useFirestore';
import { firestore } from "../firebase/FirebaseConfig";

// This will be the function that returns the JSX with our of our photos to the screen



const ImageDisplay = () => {

    // This useFirestore hook allows us to go through our firestore and look at the collections named images
    const { docs } = useFirestore('images');


    return (
        <div className="img-grid">        
        images
        </div>
    )

}

export default ImageDisplay;