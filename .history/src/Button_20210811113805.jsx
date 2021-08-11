import React from 'react';
import classNames from 'classnames'

// class Button extends Component {
  
//     render(){
       
// }

function Button(props){
  console.log(props)
  return (
    <button className={
    // "button",
    // {
    //   'button--outline' : this.props.outline 
    // },
    // )}>
    
      {props}
    </button>
  );  

}

export default Button;