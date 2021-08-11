import React from 'react';
import classNames from 'classnames'

// class Button extends Component {
  
//     render(){
       
// }

const Button = (className,outline) => {

 
  return (
    <button
    onClick ={props.onClick}
    className={classNames (
    "button", props.className,
    {
      'button--outline' : props.outline 
    },
    )}>
    
      {props.children}
    </button>
  );  

}

export default Button;