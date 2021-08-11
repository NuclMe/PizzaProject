import React from 'react';
import classNames from 'classnames'

// class Button extends Component {
  
//     render(){
       
// }

const Button = (className,outline,onClick,children) => {

 
  return (
    <button
    onClick ={props.onClick}
    className={classNames (
    "button", props.className,
    {
      'button--outline' : props.outline 
    },
    )}>
    
      {children}
    </button>
  );  

}

export default Button;