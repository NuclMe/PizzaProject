import React, {Component} from 'react';

class Button extends Component {
  
    render(){
      console.log(this.props)
        return (
     
          <button className='button'>{this.props.color}</button>
        );
    }
  
}

export default Button;