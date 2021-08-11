// import React from 'react'

import React, { Component } from "react";

// export default class Categories extends Component {
//   state = {
//     activeItem: 2,
//     test: 123,
//   };    

//   onSelectItem = (index) => {
//     this.setState({
//       activeItem: index,
//     });

//   };

//   render() {
//     const { items } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           <li className="active">Все</li>
//           {items.map((name, index) => (
//             <li
//               onClick={() => this.onSelectItem(index)}
//               key={`${name}_${index}`}
//               className={this.state.activeItem === index ? "active" : ""}
//             >
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

function Categories({items,onClick}) {
    console.log(items)
    return (
        <div className="categories">
        <ul>
          <li className="active">Все</li>
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

export default Categories
