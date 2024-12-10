import { use } from 'react';

const ToDo = ({ todoPromise }) => {
  const { title } = use(todoPromise);
  return <p>Here is the todo: {title}</p>;
};

export default ToDo;
