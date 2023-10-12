import Link from 'next/link';
import ItemList from './item-list.js';

export default function Week5page (){
    return (
        <div className="flex-col">
            <h1 className="text-3xl font-bold text-center mt-5 mb-5"> Shopping List (week5)</h1>
            
            <div className="flex justify-center">
                <ItemList></ItemList>
            </div>
            
            <div className="text-center hover:text-cyan-400 hover:underline p-2">
                <Link href="/">Home</Link>
            </div>
        </div>
    );
}
