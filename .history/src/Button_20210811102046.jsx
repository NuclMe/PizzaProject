import React, {Component} from 'react';

class Button extends Component {
  
    render(){
      console.log(this.props)
        return (
     
          <button className='hello'>Привет</button>
        );
    }
  
}

export default Button;