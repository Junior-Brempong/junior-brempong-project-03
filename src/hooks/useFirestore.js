import { useState, useEffect } from "react";
import { firestore } from "../firebase/FirebaseConfig";
import { collection, doc, getDocs, onSnapshot, orderBy } from "firebase/firestore";


// Now that we have a database collection of documents from our FireStorage.js, we can listen to this collection to get all the urls as they are added in real time to our project by using this hook! This is the connection between our app and the firestore.

// We want to access the information from our firestore database, so we can cycle through our URLs and add in image for each. This will be created through a hook that will give us more useablility throughout our code if we ever need to fire up the firestore

const useFirestore = (accessCollection) => {
    // Step 1: We want to set up a piece of state for the documents that we recieve. We will leave this first as an empty array because we don't have an documents

    const [docs, setDocs] = useState([]);

    // Step 2: We now need to communicate with the database in order to get the documents. This will happen in a useEffect so that it can refigure each time the collection changes 

    useEffect(() => {

        // This is to get a collection from our firestore, this would essentially be images, however, we passed that through and can say collection

        // // This method fires a callback function every time that a change occurs inside the collection and also fires it once initially. 
        //     // This function takes in a snapshot object that represents a snapshot of the database collection. Everytime now that a document is added, it gets a snap shot of the documents collection again (this is how we are essentially listening to our database)

        const imgSnap = getDocs(collection(firestore, 'images')).then((data) => {

            console.log(data)
            data.forEach((doc) => {

                console.log(doc.id, " => ", doc.data());
                
                return (
                    <div className="img-grid">        
                    { doc.data() }
                    </div>
                )
            

                 
        });
            })
        

        // We can also order the documents in this collection by the timestamp that we created in our config. We use 'createdAt' because it is the time stamp propoerty in our firestore
        // .orderBy("createdAt", "desc")


        // .onSnapshot((snap) => {
        //     let documents = [];
        //     // cycle through document currently in the collection when we get the snapshot. 
            // snap.forEach((doc) => {
        //         // We can now push data from each document into the document array. This gives us the data in the document. Using spread will give us all the properties of these docs and then push this to our documents which is an empty array. Now each document stored in the array will have the data associated with it and the id. We can use the key we get for when we need to output.
            //     documents.push({...doc.data(), id: doc.id});
            // });
        //     // We can not set our empty documents array to the all the documents we have recieved from firestore
        //     setDocs(documents);
        // });

        // // This invokes the unsub method when we no longer use it. This would happen if we want to unmount of ImageDisplay component.This is considered our clean up function.
        // return () => unsub();
    }, [accessCollection]);


    // This will allow us to return all the docs once we have them
    return {docs};
};

export default useFirestore;
