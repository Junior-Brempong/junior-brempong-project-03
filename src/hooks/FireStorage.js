import { useState, useEffect } from "react";
import { firebaseStorage, firestore, timestamp  } from "../firebase/FirebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL, getStorage } from "firebase/storage"
import { collection, addDoc, add, doc, updateDoc, serverTimestamp, getDoc, getDocs } from "firebase/firestore"; 

// We are now creating a small chunk of code in react that will give us reuseable code and can then use them in whatever component needs them. The whole point of this hook is create references for us to use in our components!

// 1: This hook is a function that will be responsible for handling our file uploads and then returning us values about the upload (exp. progress & image url)

const FireStorage = (imgFile) => {

    // 2: Inside the imgFile we want to create three pieces of state:
        // (a) progress of the upload
        const [progress, setProgress] = useState(0);
        // (b) any errors from the upload
        const [error, setError] = useState(null);
        // (c) the image url we get back from storage after the image has full uploaded
        const [url, setUrl] = useState(null);

        // 3(a): We want to use our storage to upload the file that the user selects. This code will need to run every time that that there is a new imgFile value passed through to our storage. Hence, we must use a useEffect hook!

        useEffect(() => {
            //3(b): The logic to upload the file, and it will be dependent on the array we set, which will rerend our page

            //We must make reference. .ref() is a method that allows us to create a reference to the name of our image file in the fire store

            const storageRef = ref(firebaseStorage , 'images');


            // 6: Our hook has triggered because of the user upload, we now want to take the url we are provided to in from our progress bar and pass this through to the fire store. This is how we will display the information on the page. We can use a method called  addDoc and collection which firebase will create for us. We now will have an image collection with a randomized ID and two fields (createdAt & url)


            const uploadTask = uploadBytesResumable(storageRef, imgFile);


            // 4(a): We can use a method called put on our storageRef that will now take a file and put it in the reference. This however can take some time, so what we can do is add a listener which will fire functions when certain events happen. 
                // This can be done with .on() which will also give us a second object which is a snapshot in time of our upload
            uploadTask.on('state_changed', (snap) => {
                // 4(b): formula for percentage that we can grab from this snap imgFile
                let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                setProgress(percentage);
            },
            // 4(c): We can also take in a third argument that is also a function that will fire if there is an error with the upload
            (err) => {
                setError(err)
            },
            
            // 4(d) Pass through another argument that will fire once the upload is complete. 
                // get the url of the image loaded. Once we trigger our upload and it runs this function, we can now take this url which is saved in our database and provide it to the firestore.
            async () => {
                
                    // const storage = getStorage()
                    // console.log(imgFile.name)
            

                const collectionRef = addDoc(collection (firestore, "images"), { 
                    url: 'Lizzzzzoooo',
                    timestamp: serverTimestamp()   
                })

                console.log(collectionRef, 'collectionRef');

            // 6: Our hook has triggered because of the user upload, we now want to take the url we are provided to in from our progress bar and pass this through to the fire store. This is how we will display the information on the page. We can use a method called  addDoc and collection which firebase will create for us. We now will have an image collection with a randomized ID and two fields (createdAt & url)
                
                collectionRef.getDownloadURL(getDocs(firestore, imgFile.name))
                .then((url) => {
                    console.log('URL:', url)
                    const createdAt = timestamp;
                    console.log(createdAt);


                        
            // 6(b) The collection of urls we are gathering from our users selection, we would like to add the url and a createAt property to show display the images chronologically on the screen --> this is will require us to create a time stamp in our firebase server. Now our createdAt will invoke this
            // const createdAt = timestamp();

                        // collectionRef.add({ url, createdAt });
                        setUrl(url);
                        })
                })
        }, [imgFile] )

    // 5: Now we want to be able to return these values

    return { progress, url, error };

}

export default FireStorage;