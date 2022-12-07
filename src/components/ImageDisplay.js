import React from "react";
import useFirestore from '../hooks/useFirestore';
import { doc, deleteDoc} from "firebase/firestore";
// Animation imports
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { firestore } from "../firebase/FirebaseConfig";
AOS.init();

// This will be the function that returns the JSX with our of our photos to the screen

const ImageDisplay = () => {

    // Step 1(a): This useFirestore hook allows us to go through our firestore and look at the collections named images
    const { docs } = useFirestore('images');
    

    // Step 3: Create an image delete function that we will pass through to our button 

    const imageDelete = (e) => {

        // Step 3(a) :Prevent default for clicking the button

        e.preventDefault();
        // Step 3(b): We made the id of our button the unique key from firestore that each image recieves through our map, now the onClick has access to this and can delete the image
        deleteDoc(doc(firestore, "images", e.target.id));
  
        }


    return (
        <section className="imgGrid">        


        {/* Step 2: We have our docs thanks to our Firestore hook, now what we can do is map through each of these documents and dispay them to the page, assiging the unique key fire store gives them as their key */}
        { docs && docs.map(doc => (
            <div className="imgWrap" key={doc.id} data-aos="fade-up" data-aos-duration="1000">
                <p></p>
                <img className="imagesToAnimate" src={doc.url} alt="fire store upload"/>
                <button id={doc.id} onClick={(e) => imageDelete(e)} className="deleteButton">X</button>
            </div>
        ) ) }

        </section>
    )

}

export default ImageDisplay;