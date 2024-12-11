import { Suspense } from 'react';
import { BoundaryFallback, ErrorBoundary, Loading, Post, ToDo } from '@/components';
import { getPost, getTodo } from '@/data';

const App = () => {
  const randomBoolean = () => Math.random() < 0.5;
  const randomDelay = () => Math.floor(Math.random() * 5000) + 100; // 100ms to 5000ms

  return (
    <div className='container mx-auto py-5'>
      <div className='text-center'>This should render immediately</div>
      <div className='grid grid-cols-2 justify-items-center gap-2'>
        <ErrorBoundary fallback={<BoundaryFallback reason='Error fetching post' />}>
          <Suspense fallback={<Loading />}>
            <Post postPromise={getPost(1, randomDelay(), randomBoolean())} />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary fallback={<BoundaryFallback reason='Error fetching post' />}>
          <Suspense fallback={<Loading />}>
            <Post postPromise={getPost(2, randomDelay(), randomBoolean())} />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary fallback={<BoundaryFallback reason='Error fetching post' />}>
          <Suspense fallback={<Loading />}>
            <Post postPromise={getPost(3, randomDelay(), randomBoolean())} />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary fallback={<BoundaryFallback reason='Error fetching post' />}>
          <Suspense fallback={<Loading />}>
            <Post postPromise={getPost(4, randomDelay(), randomBoolean())} />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary fallback={<BoundaryFallback reason='Error fetching post' />}>
          <Suspense fallback={<Loading />}>
            <Post postPromise={getPost(5, randomDelay(), randomBoolean())} />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary fallback={<BoundaryFallback reason='Error fetching todo' />}>
          <Suspense fallback={<Loading />}>
            <ToDo todoPromise={getTodo(1, randomDelay(), randomBoolean())} />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary fallback={<BoundaryFallback reason='Error fetching todo' />}>
          <Suspense fallback={<Loading />}>
            <ToDo todoPromise={getTodo(2, randomDelay(), randomBoolean())} />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary fallback={<BoundaryFallback reason='Error fetching todo' />}>
          <Suspense fallback={<Loading />}>
            <ToDo todoPromise={getTodo(3, randomDelay(), randomBoolean())} />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary fallback={<BoundaryFallback reason='Error fetching todo' />}>
          <Suspense fallback={<Loading />}>
            <ToDo todoPromise={getTodo(4, randomDelay(), randomBoolean())} />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary fallback={<BoundaryFallback reason='Error fetching todo' />}>
          <Suspense fallback={<Loading />}>
            <ToDo todoPromise={getTodo(5, randomDelay(), randomBoolean())} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default App;
