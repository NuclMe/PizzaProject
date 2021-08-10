import React, {Component} from 'react';

class Button extends Component {
    componentDidMount(){
        console.log('првет')
    }
    componentDidUpdate(){
        console.log('ololo')
    }
    render(){
        return (
           <Button>Привет</Button>
        );
    }
  
}

export default Button;