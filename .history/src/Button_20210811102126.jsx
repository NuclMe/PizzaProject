import React, {Component} from 'react';

class Button extends Component {
  
    render(){
      console.log(this.props.__proto__.__proto__)
        return (
     
          <button className='hello'>Привет</button>
        );
    }
  
}

export default Button;