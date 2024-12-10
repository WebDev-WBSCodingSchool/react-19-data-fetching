export const getPost = async (id = 1, delay = 1000, fail = false) => {
  await new Promise(resolve => setTimeout(resolve, delay));
  if (fail) throw new Error('Failed to fetch post');
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw res.statusText || 'Something went wrong fetching the post';
  }
  return res.json();
};
