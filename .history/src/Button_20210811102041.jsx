import React, {Component} from 'react';

class Button extends Component {
  
    render(){
        return (
          console.log(this.props)
          <button className='hello'>Привет</button>
        );
    }
  
}

export default Button;