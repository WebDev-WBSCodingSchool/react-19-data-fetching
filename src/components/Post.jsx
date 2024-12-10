import { use } from 'react';

const Post = ({ postPromise }) => {
  const { title } = use(postPromise);
  return <p>Here is the post: {title}</p>;
};

export default Post;
