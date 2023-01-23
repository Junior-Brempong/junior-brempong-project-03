const BackToTopButton = () => {

    function topFunction() {

   
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
    }

    return (
        <a id='backToTopButton' onClick={topFunction}>
        <p>Back to top!</p>
      </a>
    )




}

export default BackToTopButton;