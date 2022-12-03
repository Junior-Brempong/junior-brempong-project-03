import React from "react";
import useFirestore from '../hooks/useFirestore';

// This will be the function that returns the JSX with our of our photos to the screen



const ImageDisplay = () => {

    // This useFirestore hook allows us to go through our firestore and look at the collections named images
    const { docs } = useFirestore('images');
    console.log(docs);


    return (
        <div className="imgGrid">        
        
        { docs && docs.map(doc => (
            <div className="imgWrap" key={doc.id}>
                <p></p>
                <img src={doc.url} alt="picture upload" />
            </div>
        ) ) }

        </div>
    )

}

export default ImageDisplay;