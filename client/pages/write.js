import Header from "../components/Header";
import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
export default function Write() {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
    setEditorLoaded(true);
  }, []);

  const [blogContent, setBlogContent] = useState({
    title: "",
    content: "",
  });
  const [viewContent, setViewContent] = useState([]);

  const regPost = () => {
    Axios.post("http://localhost:8000/api/insert", {
      title: blogContent.title,
      content: blogContent.content,
    }).then(() => {
      alert("게시글 등록 완료!");
    });
  };
  const getValue = (e) => {
    const { name, value } = e.target;
    setBlogContent({
      ...blogContent,
      [name]: value,
    });
    // console.log(`${name} : ${value}`);
    console.log(blogContent);
  };

  return (
    <div className="container">
      <Header />
      <form className="mt-5">
        <div className="content-viewer">
          {viewContent.map((element) => {
            <div>
              <h2>{element.title}</h2>
              <div>{element.content}</div>
            </div>;
          })}
        </div>
        <div className="form-wrapper">
          <input
            type="text"
            name="title"
            className="form-control"
            id="inputTitle"
            placeholder="Title"
            onChange={getValue}
          />
          <div id="titleTag" className="form-text my-3">
            <span className="badge bg-primary"># Primary</span>
            <span className="badge bg-secondary"># Secondary</span>
            <span className="badge bg-success"># Success</span>
            <span className="badge bg-danger"># Danger</span>
            <span className="badge bg-warning text-dark"># Warning</span>
            <span className="badge bg-info text-dark"># Info</span>
            <span className="badge bg-light text-dark"># Light</span>
            <span className="badge bg-dark"># Dark</span>
          </div>
          {editorLoaded ? (
            <CKEditor
              editor={ClassicEditor}
              data="<p>입력하세요</p>"
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
                setBlogContent({
                  ...blogContent,
                  content: data,
                });
                console.log(blogContent);
              }}
            />
          ) : (
            <div>Editor loading</div>
          )}

          <div className="flex justify-center mt-3">
            <button
              type="button"
              className="btn btn-primary mt-3 w-24"
              onClick={regPost}
            >
              입력
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
