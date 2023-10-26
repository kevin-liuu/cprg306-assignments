import Link from 'next/link';

//Components
import StudentInfo from "./StudentInfo/StudentInfo.jsx"; 

export default function Home() {
  return (    
    <main>
      <h1 className="text-5xl text-center font-extrabold font-sans mt-10 mb-10">CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo></StudentInfo>
      <div className="text-center hover:text-cyan-400 hover:underline p-2">
        <Link href="/week2">week2</Link>
      </div>
      <div className="text-center hover:text-cyan-400 hover:underline p-2">
        <Link href="/week3">week3</Link>
      </div>
      <div className="text-center hover:text-cyan-400 hover:underline p-2">
        <Link href="/week4">week4</Link>
      </div>
      <div className="text-center hover:text-cyan-400 hover:underline p-2">
        <Link href="/week5">week5</Link>
      </div>
      <div className="text-center hover:text-cyan-400 hover:underline p-2">
        <Link href="/week6">week6</Link>
      </div>
      <div className="text-center hover:text-cyan-400 hover:underline p-2">
        <Link href="/week7">week7</Link>
      </div>
    </main>
  );
}
