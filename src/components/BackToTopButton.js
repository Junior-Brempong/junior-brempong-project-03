import { useEffect } from 'react';


const BackToTopButton = () => {

    // We make sure that our button has already been rendered to the page before we apply our logic, that is why we use a useEffect

    useEffect(() => {
        // Grab the button
        let mybutton = document.getElementById("backToTopButton");

        // Function that shows our button if we scroll more than 20px down the page and makes it disappear if we are less than that
        window.onscroll = function() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }
      }, []);
    
      // When the user clicks on the button, scroll to the top of the document
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