import Link from 'next/link';
//COMPONENTS
import StudentInfo from "../StudentInfo/StudentInfo";

export default function Week2page(){
    return(
        <div>
            <h1 className="text-5xl text-center font-extrabold font-sans mt-10 mb-10">My Shopping List</h1>
            <StudentInfo></StudentInfo>
            <div className="text-center hover:text-cyan-400 hover:underline p-2">
                <Link href="/">Home</Link>
            </div>
        </div>
    );
}