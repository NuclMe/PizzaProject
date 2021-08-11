import React, {Component} from 'react';

class Button extends Component {
  
    render(){
        return (
          <button className={`this.props.outline ? 'button--outline' : ''`}>
            {this.props.children}
          </button>
        );
    }
  
}

export default Button;