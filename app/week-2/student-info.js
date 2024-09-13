
import Link from 'next/link';
export default function StudentInfo() {
    return (
      <main>
        <h1>Yifang Wu</h1>
        <ul>
          <Link href="https://github.com/yifangwu0313">
            My GitHub
         </Link>
          <li>Student ID: 123456</li>
          
        </ul>
      </main>
    );
  }