import React, {Component} from 'react';

class Button extends Component {
  
    render(){
      console.log(this.props)
        return (
          <button className={this.props.outline ? 'button--outline' : 'button-shmaton'}></button>
        );
    }
  
}

export default Button;