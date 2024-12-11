import { Suspense } from 'react';
import { ErrorBoundary, Post, ToDo } from '@/components';
import { getPost, getTodo } from '@/data';

const App = () => {
  return (
    <>
      <p>This should render immediately</p>
      <ErrorBoundary fallback={<p>💀 Error fetching post...</p>}>
        <Suspense fallback={<p>Fetching post...</p>}>
          <Post postPromise={getPost(1, 5000, true)} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>💀 Error fetching post...</p>}>
        <Suspense fallback={<p>Fetching post...</p>}>
          <Post postPromise={getPost(2, 3500)} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>💀 Error fetching post...</p>}>
        <Suspense fallback={<p>Fetching post...</p>}>
          <Post postPromise={getPost(3, 5000)} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>💀 Error fetching post...</p>}>
        <Suspense fallback={<p>Fetching post...</p>}>
          <Post postPromise={getPost(4, 100, true)} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>💀 Error fetching post...</p>}>
        <Suspense fallback={<p>Fetching post...</p>}>
          <Post postPromise={getPost(5, 2000)} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>💀 Error fetching todo...</p>}>
        <Suspense fallback={<p>Fetching todo...</p>}>
          <ToDo todoPromise={getTodo(1, 2000)} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>💀 Error fetching todo...</p>}>
        <Suspense fallback={<p>Fetching todo...</p>}>
          <ToDo todoPromise={getTodo(2, 300, true)} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>💀 Error fetching todo...</p>}>
        <Suspense fallback={<p>Fetching todo...</p>}>
          <ToDo todoPromise={getTodo(3, 4000)} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>💀 Error fetching todo...</p>}>
        <Suspense fallback={<p>Fetching todo...</p>}>
          <ToDo todoPromise={getTodo(4, 5000)} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>💀 Error fetching todo...</p>}>
        <Suspense fallback={<p>Fetching todo...</p>}>
          <ToDo todoPromise={getTodo(5, 1000, true)} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
