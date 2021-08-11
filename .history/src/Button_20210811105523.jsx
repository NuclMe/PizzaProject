import React, {Component} from 'react';

class Button extends Component {
  
    render(){
      console.log(this.props)
        return (
     
          <button className='button'>{this.props.outline ? 'button--outline' : ''}</button>
        );
    }
  
}

export default Button;