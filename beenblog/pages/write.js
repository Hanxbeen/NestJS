import Header from "../components/Header";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
export default function Write() {
  const [blogContent, setBlogContent] = useState({
    title: "",
    content: "",
  });
  const getValue = e => {
    const { name, value } = e.target;
      console.log(name, value);
  };
  return (
    <div className="container">
      <Header />
      <form className="mt-5">
        <input
          type="text"
          className="form-control"
          id="inputTitle"
          placeholder="Title"
        ></input>
        <div id="titleTag" className="form-text my-3">
          <span class="badge bg-primary"># Primary</span>
          <span class="badge bg-secondary"># Secondary</span>
          <span class="badge bg-success"># Success</span>
          <span class="badge bg-danger"># Danger</span>
          <span class="badge bg-warning text-dark"># Warning</span>
          <span class="badge bg-info text-dark"># Info</span>
          <span class="badge bg-light text-dark"># Light</span>
          <span class="badge bg-dark"># Dark</span>
        </div>
        <CKEditor
          editor={ClassicEditor}
          data="<p>입력하세요</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
        <div className="flex justify-center mt-3">
          <button type="submit" className="btn btn-primary mt-3 w-24">
            입력
          </button>
        </div>
      </form>
    </div>
  );
}
