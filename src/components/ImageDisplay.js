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
    // console.log(docs);
    

    const imageDelete = (e) => {

        // Prevent default for clicking the button

        e.preventDefault();
        // we made the id of our button the unique key from firestore that each image recieves through our map, now the onClick has access to this and can delete the image
        deleteDoc(doc(firestore, "images", e.target.id));

    
        }


    return (
        <div className="imgGrid">        
        
        { docs && docs.map(doc => (
            <div className="imgWrap" key={doc.id} data-aos="fade-up" data-aos-duration="1000">
                <p></p>
                <img className="imagesToAnimate" src={doc.url} alt="fire store upload"/>
                <button id={doc.id} onClick={(e) => imageDelete(e)} className="deleteButton">X</button>
            </div>
        ) ) }

        </div>
    )

}

export default ImageDisplay;