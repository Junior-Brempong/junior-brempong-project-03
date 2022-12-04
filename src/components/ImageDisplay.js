import React from "react";
import useFirestore from '../hooks/useFirestore';
import { doc, deleteDoc} from "firebase/firestore";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { firestore } from "../firebase/FirebaseConfig";
// ..
AOS.init();

// This will be the function that returns the JSX with our of our photos to the screen



const ImageDisplay = () => {

    // This useFirestore hook allows us to go through our firestore and look at the collections named images
    const { docs } = useFirestore('images');
    console.log(docs);
    

    const imageDelete = async (imagesToDelete) => {

        imagesToDelete.preventDefault();
        
        deleteDoc(doc(firestore, "images", 'AHRBezRqBjdx2FMfvi0z'));

        console.log("Hiiii");
    
        }


    return (
        <div className="imgGrid">        
        
        { docs && docs.map(doc => (
            <div className="imgWrap" key={doc.id}>
                <p></p>
                <img src={doc.url} alt="fire store upload" data-aos="fade-up" data-aos-duration="1000"/>
                <button onClick={imageDelete}>Click here to deleteDoc</button>
            </div>
        ) ) }

        </div>
    )

}

export default ImageDisplay;