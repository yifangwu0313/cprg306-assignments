import Link from "next/link";

export default function Page() {
  return (
    <div className="flex gap-7 flex-col ml-5 mt-5">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>

      <Link href="/week-2">week-2 Assignment </Link>
      <Link href="/week-3">week-3 Assignment</Link>
      <Link href="/week-4">week-4 Assignment</Link>
      <Link href="/week-5">week-5 Assignment</Link>
      <Link href="/week-6">week-6 Assignment</Link>
      <Link href="/week-7">week-7 Assignment</Link>
    </div>
  );
}
