import Link from 'next/link';

//Components
import StudentInfo from "./StudentInfo/StudentInfo.jsx"; 

export default function Home() {
  return (    
    <main>
      <h1 className="text-5xl text-center font-extrabold font-sans mt-10 mb-10">CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo></StudentInfo>
      <div className="text-center hover:text-cyan-400 hover:underline p-2">
        <Link href="/week2">Week 2</Link>
      </div>
    </main>
  );
}
