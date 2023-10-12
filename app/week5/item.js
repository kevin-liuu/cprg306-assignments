function Item ({item}){
    
    return( 
        
        <div className="p-2 m-4 bg-indigo-400 max-w-sm rounded-md drop-shadow-lg">
            <ul className="text-xl font-bold text-white text-center drop-shadow-md">
                <li className="uppercase">{item.name}</li>
                <li>Buy {item.quantity} in {item.category}</li>
            </ul>
        </div>
    );
}
export default Item;