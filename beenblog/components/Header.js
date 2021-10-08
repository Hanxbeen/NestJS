import Link from 'next/link';

export default function Header() {
  return (
    <header className=" flex flex-row py-2 -mx-3 justify-between">
      <div>
        <Link href="/">
          <h1 className="fs-2 fw-bold">BeenLog</h1>
        </Link>
      </div>
      <div>
        <Link href="/introduce">
          <a className="btn btn-link">Introduce</a>
        </Link>
        <Link href="/order">
          <a className="btn btn-link">Order</a>
        </Link>
        <Link href="/hiring">
          <a className="btn btn-link">Hiring</a>
        </Link>
        <Link href="/contact">
          <a className="btn btn-link"> Contact Us</a>
        </Link>
      </div>
    </header>
  );
}
