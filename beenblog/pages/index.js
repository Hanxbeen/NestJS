import Header from '../components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <div className="p-5 mb-4 bg-light rounded-3 mt-9">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold mb-4">Hanxbeen</h1>
          <p className="col-md-8 fs-5 mb-1">직접 개발한 블로그입니다</p>
          <p className="col-md-8 fs-6 mb-2">
            [ 기록은 기억보다 더 효율적인 도구이다 ]
          </p>

          <ul>
            <li>👋 Hi, I’m @Hanxbeen</li>
            <li>👀 I’m interested in ... - Coding, Running, Climbing</li>
            <li>
              🌱 I’m currently learning ... - Java, Javascript, Typescript,
              ReactJS, NextJS, NodeJS, express, CSS in JS
            </li>
            <li>📫 How to reach me ... - hanxbeen@gmail.com</li>
          </ul>
          <div className="mt-5">
            <Link href="https://www.github.com/Hanxbeen">
              <button className="btn btn-dark btn-lg" type="button">
                <p className="fs-6">GITHUB</p>
              </button>
            </Link>
            <Link href="https://medium.com/@hanxbeen">
              <button className="btn btn-dark btn-lg ml-2" type="button">
                <p className="fs-6">MEDIUM</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
