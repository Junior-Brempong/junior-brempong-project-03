import React, { useState } from "react";


// 1: create the function in which we would like to mount the form JSX to our page, where our user will be able to submit an image from their computers.

const ImageForm = () => {

    // 3(b): This useState is saying that when our files are first slected, the imgFile is "null," meaning there is nothing there
    const [imgFile, setImgFile] = useState(null)

    // 4(b): The array of approved file types that we can pass down for our conditional statement
    const allowedTypes = [ 'image/jpeg', 'image/png'  ];

    // 4(c): Storing our error into state!
    const [error, setError] = useState(null)

    // 2: We make a our changeHandler function which is connect to our onChange for our button.
    const changeHandler = (e) => {

       
        // 3(a):  Because of the event object we are given for this function we can use this to access the file the user has selected
            //.files is a property called files, this gives us all the files that have been selected. However, we want the first file selected, so we can has this into the array to target. This gives us a multitude of properties to parse through (exp. file type, size, etc).
            //  We want to be able to access this data globally, so we can store this into a local piece of state
        let selectedImage = e.target.files[0];

        // 4 (a): We only want to store this information if a file is created. Otherwise when a user clicks on our input and chooses nothing we would set the state with another null value. For this we can write a conditional.
            // We also want to make sure that only certain file types can be selected (we wouldn't want audio being uploaded). We know that our event object gave us access to this property, so we can add this into our conditional as well. 
            
        // 4 (b): First we need to create an array with the approved types and pass this down. 
            // Now this conditional is asking "Does this array include the type that user has selected?"

        if (selectedImage && allowedTypes.includes(selectedImage.type)) {

            // This sets our selectedImage to our imgFile. This is now stores in local state!
            setImgFile(selectedImage);

            // 5(b): Because our error will be outputted, we need to tell our JSX to remove the output if the right image type is selected
            setError('');

            // 4(c): If this is not the case, we would like an error to show on the screen, so the user knows to select another file type!
        } else {
            // This resets the value
            setImgFile(null)
            // we also want to register an error - so for this we will need to store in some sort of state
            setError('Oops! Something went wrong, please select a valid file type (jpeg or png)')

        }

    }

    return(
        <form action="">
            {/* This is the input type that will allow a user to select an image from their computer. Our input initially does not do anything aside from populate the name of the image the user would like to upload. However, we can add an onChange */}
            <input type="file" onChange={ changeHandler }/>
            {/* Step 5(a): We want to output the results of our user selection here. So we can create a div where we can output our error or file if we have it (this is why we used state, so store these variables!) */}
            <div className="output">
                {/* If the there is an error we are going to output a div with a class of error and inside we are going to output the error itself */}
                { error && <div className="error">{ error }</div>}
                {/* We will do the same thing and output if we have a valid file type as well. This way a user can see what they have selected */}
                { imgFile && <div> {imgFile.name} </div> }
            </div>
        </form>
    )

}

export default ImageForm;