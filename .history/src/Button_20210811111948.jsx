import React, {Component} from 'react';
import classNames from 'classnames'

class Button extends Component {
  
    render(){
        return (
          <button className={classNames (
          "button",
          {'button--outline' : this.props.outline },) 
          }>
            {this.props.children}
          </button>
        );  
    }
  
}

export default Button;