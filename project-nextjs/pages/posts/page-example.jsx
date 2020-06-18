import Link from "next/link";

export default function PostExample() {
  return (
    <>
      <h1> Page two</h1>
      <Link href="/">
        <a className="">Back to home </a>
      </Link>
    </>
  );
}
