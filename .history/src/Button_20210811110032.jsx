import React, {Component} from 'react';

class Button extends Component {
  
    render(){
        return (
          <button className={1}>
            {this.props.children}
          </button>
        );
    }
  
}

export default Button;