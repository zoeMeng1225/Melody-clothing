 import React from 'react';
 import './custom-button.style.scss';

 const CustomBtn = ({children, isGoogleSignIn, ...otherProps}) => {
   return(
     <button 
      className = {`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}>
       {children}
     </button>
   ) 
 }

 export default CustomBtn;