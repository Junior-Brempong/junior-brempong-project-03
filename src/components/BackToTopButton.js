import { useEffect } from 'react';


const BackToTopButton = () => {

    // Step 1: We make sure that our button has already been rendered to the page before we apply our logic, that is why we use a useEffect

    useEffect(() => {
        // Step 1(a): Grab the button element from our return
        let mybutton = document.getElementById("backToTopButton");

        // Step 1(b) Create a Function that shows our button if we scroll more than 20px down the page and makes it disappear if we are less than that
        window.onscroll = function() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }
      }, []);
    
      // Step 2: When the user clicks on the button, scroll to the top of the document which we pass through to our button JSX onClick
      function topFunction() {
           
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    
      }

      return (
        <button id='backToTopButton' onClick={topFunction}>
        Back to Top!
        </button>
      )



}

export default BackToTopButton;