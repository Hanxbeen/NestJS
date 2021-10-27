import Header from "../components/Header";

export default function Board() {
  return (
    <div className="container">
      <Header />
      {/* <h1>Board</h1> */}
      <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">
        <div className="col">
          <div className="card">
            <img src="/img/jslogo.png" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="/img/bootlogo.png"
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="/img/nextlogo.png"
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="/img/reactlogo.png"
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
