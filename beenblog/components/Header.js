import Link from "next/link";

export default function Introduce() {
  return (
    <header className=" flex flex-row p-4 justify-between">
      <div>
        <Link href="/">
          <a className="btn btn-link">BeenBlog</a>
        </Link>
      </div>
      <div>
        <Link href="/introduce">
          <a className="btn btn-link">Introduce</a>
        </Link>
        <a href="#none" className="btn btn-link">
          Order
        </a>
        <a href="#none" className="btn btn-link">
          Hiring
        </a>
        <a href="#none" className="btn btn-link">
          Contact Us
        </a>
      </div>
    </header>
  );
}
