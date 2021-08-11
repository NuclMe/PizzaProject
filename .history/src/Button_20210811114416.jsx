import React from 'react';
import classNames from 'classnames'

// class Button extends Component {
  
//     render(){
       
// }

const Button = (props) => {
  console.log(props)
  return (
    <button className={classNames (
    "button",
    {
      'button--outline' : this.props.outline 
    },
    )}>
    
      {this.props.children}
    </button>
  );  

}

export default Button;