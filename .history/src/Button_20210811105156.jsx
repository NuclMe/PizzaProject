import React, {Component} from 'react';

class Button extends Component {
  
    render(){
      console.log(this.props)
        return (
     
          <button className='button'>{this.props.children}</button>
        );
    }
  
}

export default Button;