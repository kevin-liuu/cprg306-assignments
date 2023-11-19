// function Item ({item, onSelect}){
//     const handleClick = () =>{
//         //onSelect functiion and pass the selected item as argument
//         onSelect(item);
//     }
//     return( 
        
//         <div
//         onClick={handleClick}// add onClick handler to handleClick   
//         style={{ cursor: 'pointer' }} 
//         className="p-2 m-4 bg-indigo-400 max-w-sm rounded-md drop-shadow-lg">
//             <ul className="text-xl font-bold text-white text-center drop-shadow-md">
//                 <li className="uppercase">{item.name}</li>
//                 <li>Buy {item.quantity} in {item.category}</li>
//             </ul>
//         </div>
//     );
// }
// export default Item;
function Item({ item, onSelect }) {
    const handleClick = () => {
      // onSelect function and pass the selected item as an argument
      onSelect(item);
    };
  
    return (
      <div
        onClick={handleClick} // add onClick handler to handleClick
        style={{ cursor: 'pointer' }}
        className="p-2 m-4 bg-indigo-400 max-w-sm rounded-md drop-shadow-lg"
      >
        <ul className="text-xl font-bold text-white text-center drop-shadow-md">
          {/* Assuming item.data contains the actual item data */}
          <li className="uppercase">{item.data.name}</li>
          <li>
            Buy {item.data.quantity} in {item.data.category}
          </li>
        </ul>
      </div>
    );
  }
  
  export default Item;