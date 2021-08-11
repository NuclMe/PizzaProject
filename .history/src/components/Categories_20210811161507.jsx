// import React from 'react'

 import React, { Component } from 'react'
 import classNames from "classnames";
 
 export default class Categories extends Component {
    state = {
        activeItem: 3,
    };

    onSelectedItem = index =>{
        this.setState({
            activeItem:index,
        })
    }

     render() {
        const {items,onClick} = this.props;
         return (
            <div className="categories">
                     <ul>
                       <li className=className {? 'active' : ''}>Все</li>
                         {items.map((name, index)=>(
                         <li key={`${name}_${index}`}
                             onClick={() => onClick(name)}
                         >
                              {name}
                         </li>
                         ))}
                     </ul>
                  </div>
         )
     }
 }
 

// function Categories({items,onClick}) {
//     console.log(items)
//     return (
//         <div className="categories">
//         <ul>
//           <li className="active">Все</li>
//             {items.map((name, index)=>(
//             <li key={`${name}_${index}`}
//                 onClick={() => onClick(name)}
//             >
//                  {name}
//             </li>
//             ))}
//         </ul>
//       </div>
//     )
// }

// export default Categories
