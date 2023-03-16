import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const URI = "http://localhost:8000/blogs";

const CompEditBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${URI}/${id}`, {
      title: title,
      content: content,
    });
    navigate("/");
  };

  useEffect(() => {
    getBlogById();
    // eslint-disable-next-line
  }, []);

  const getBlogById = async () => {
    const response = await axios.get(`${URI}/${id}`);
    setTitle(response.data.title);
    setContent(response.data.content);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Edit Blog</h3>
          <form onSubmit={update}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fa-solid fa-floppy-disk"> SAVE</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompEditBlog;
