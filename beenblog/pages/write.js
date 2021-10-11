import Header from '../components/Header';

export default function Write() {
  return (
    <div className="container">
      <Header />
      {/* <h1>Write</h1> */}
      <form className="mt-5">
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="inputTitle"
            placeholder="Title"
          ></input>
          <div id="titleTag" className="form-text">
            #태그 기능 추가 예정
          </div>
        </div>
        <div class="mb-3">
          <textarea
            type="text"
            className="form-control"
            id="inputContents"
            placeholder="Contents"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          입력
        </button>
      </form>
    </div>
  );
}
