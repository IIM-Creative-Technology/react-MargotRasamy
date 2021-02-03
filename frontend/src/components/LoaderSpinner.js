import '../assets/styles/components/loader-spinner.scss';
import React, { useRef } from 'react'

function LoaderSpinner() {
    const loaderSpinner = useRef(null);

    // const stopLoading = function () {
    //     loaderSpinner.current.classList.add('stop-spin')
    // }   
  return (
    <div ref={loaderSpinner} className="loader-spinner"></div> 
  );
}

export default LoaderSpinner;