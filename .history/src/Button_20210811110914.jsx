import React, {Component} from 'react';
import classNames 

class Button extends Component {
  
    render(){
        return (
          <button className={`button ${this.props.outline ? 'button--outline' : ''}`}>
            {this.props.children}
          </button>
        );
    }
  
}

export default Button;