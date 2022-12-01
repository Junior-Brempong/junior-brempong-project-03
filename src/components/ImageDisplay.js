import React from "react";
import useFirestore from '../hooks/useFirestore';

// This will be the function that returns the JSX with our of our photos to the screen



const ImageDisplay = () => {

    // This useFirestore hook allows us to go through our firestore and look at the collections named images
    const { docs } = useFirestore('images');
    console.log(docs);


    return (
        <div className="img-grid">        
        images
        </div>
    )

}

export default ImageDisplay;