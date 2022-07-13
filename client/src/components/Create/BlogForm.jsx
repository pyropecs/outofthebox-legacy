import React from "react";
import ImageUpload from "./ImageUpload";

import { useState } from "react";
import { fetchAsync } from "../../utils/fetchPostBlog";
import { useName } from "../../context/context";

const BlogForm = ({}) => {
  const catgories = [
    "Please choose a category",
    "True Stories",
    "Your Life Superhuman",
    "Fantasy",
    "Real Incident",
  ];

  const [Title, setTitle] = useState("");
  const [Option, setOption] = useState("");
  const [PreviewFile, setPreviewFile] = useState("");
  const [SelectedFile, setSelectedFile] = useState("");
  const [Content, setContent] = useState("");
  const [Response, setResponse] = useState("");
  const { UserName, success, setSuccess } = useName();

  async function submitDataHandler(e) {
    e.preventDefault();

    if (!Title || !Option || !PreviewFile) {
      return;
    }
    const blog = {
      name: UserName,
      title: Title,
      categories: Option,
      img: PreviewFile,
      content: Content,
    };
    try {
      const resData = await fetchAsync(blog);
      setResponse(resData);
      setSuccess(true);
    } catch (err) {
      setResponse(err);
      setSuccess(false);
    }
  }

  return (
    <section classNameName="h-full w-33">
      <div className="max-w-screen-md mx-auto md:w-screen p-5">
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Share Your <span className="text-green-500 ">Story</span>
          </h3>
        </div>
        <form action="" onSubmit={submitDataHandler}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Text input"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Categories
            </label>
            <div className="relative">
              <select
                onChange={(e) => setOption(e.target.value)}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                {catgories.map((category) => (
                  <option value={category}>{category}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <ImageUpload
            SelectedFile={SelectedFile}
            setSelectedFile={setSelectedFile}
            PreviewFile={PreviewFile}
            setPreviewFile={setPreviewFile}
          />
          <div className="mb-4 pt-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message
              <textarea
                className="shadow form-textarea mt-1 block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none resize-none focus:shadow-outline"
                rows="10"
                placeholder="Textarea"
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-green-500 m-auto  hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              type="submit"
            >
              Submit
            </button>
            {success ? (
              <div className="text-red-600 pt-3 text-sm ">{`sucessfully submitted`}</div>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default BlogForm;
