import React from 'react';
import classNames from 'classnames'

// class Button extends Component {
  
//     render(){
       
// }

function Button(props){
  console.log(props)
  return (
    // <button className={classNames (
    // "button",
    // {
    //   'button--outline' : this.props.outline 
    // },
    // )}>
    
      {props.children}
    // </button>
  );  

}

export default Button;