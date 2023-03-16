import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const URI = "http://localhost:8000/blogs";

const CompShowBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    const response = await axios.get(URI);
    setBlogs(response.data);
  };

  const deleteBlog = async (id) => {
    await axios.delete(`${URI}/${id}`);
    getBlogs();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/create" className="btn btn-primary mt-2 mb-2">
            <i className="fa-solid fa-circle-plus"> ADD</i>
          </Link>
          <table className="table">
            <thead className="table bg-dark text-white">
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.title}</td>
                  <td>{blog.content}</td>
                  <td>
                    <Link to={`/edit/${blog.id}`} className="btn btn-info">
                      <i className="fa-solid fa-pen-to-square"> EDIT</i>
                    </Link>{" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteBlog(blog.id)}
                    >
                      <i className="fa-solid fa-trash"> DELETE</i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompShowBlog;
