import { Suspense, useMemo } from 'react';
import { ErrorBoundary, Post, ToDo } from '@/components';
import { getPost, getTodo } from '@/data';

const App = () => {
  const postPromise = useMemo(() => getPost(1, 5000, true), []);
  const todoPromise = useMemo(() => getTodo(1, 3000), []);

  return (
    <ErrorBoundary fallback={<p>💀 Top-level boundary...</p>}>
      <p>This should render immediately</p>
      <ErrorBoundary fallback={<p>💀 Error fetching post...</p>}>
        <Suspense fallback={<p>Fetching post...</p>}>
          <Post postPromise={postPromise} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>💀 Error fetching todo...</p>}>
        <Suspense fallback={<p>Fetching todo...</p>}>
          <ToDo todoPromise={todoPromise} />
        </Suspense>
      </ErrorBoundary>
    </ErrorBoundary>
  );
};

export default App;
