"use client";
import Link from "next/link";

export default function Error() {
  return (
    <div className="error_wrapper">
      <h2>
        Oops! It seems like we took a wrong turn. The page you&apos;re looking for has gone on a little vacation. Don&apos;t worry, though – our team
        of digital detectives is on the case to bring it back. In the meantime, why not explore some of our other wonderful pages?
      </h2>
      <button className="btn">
        <Link href="/">Try again</Link>
      </button>
    </div>
  );
}
