import Link from 'next/link';

function StudentInfo() {
    return(
        <div className="student-info">
            <h1 className="text-center">Kevin Liu</h1>
            <h1 className="text-center">CPRG306F</h1>
            <div className="text-center">
                <Link className="hover:text-cyan-400 hover:underline" href='https://github.com/kevin-liuu?tab=repositories' target="_blank">https://github.com/kevin-liuu?tab=repositories</Link>
            </div>
        </div>
    );
}
export default StudentInfo;