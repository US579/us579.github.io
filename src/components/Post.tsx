import { useEffect, useState } from "react";

import Markdown from "markdown-to-jsx";

import { Code } from "./Code";

const Post = () => {
  const [postContent, setPostContent] = useState("");
  useEffect(() => {
    const readmePath = require("../markdown/article.md"); // eslint-disable-line
    fetch(readmePath)
      .then((response) => response.text())
      .then((response) => setPostContent(response))
      .catch((err) => console.log(err));
  });
  return (
    <article className="article">
      <div className="container">
        <div className="post-wrapper">
          <h1>Posts</h1>
          <Markdown options={{ overrides: { Code: { component: Code } } }}>
            {postContent}
          </Markdown>
        </div>
      </div>
    </article>
  );
};

export default Post;
