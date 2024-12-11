# React 19

Hey there! Quickly trying what's new in React so this example uses React 19.

A data access layer is exposed from `@/data`, it exposes `async` functions that try to fetch a resource from the network and would throw under certain conditions. These function take the following params:

```tsx
(id?: number, delay?: number, fail?: boolean)
```

Where `id` is the well, id of the post or todo from JSONPlaceholder, `delay` how much time to delay the response to fake latency in ms (this delay takes place before the network request) and `fail` to control artificially rejecting it.

The `<App/>` component calls these functions, effectively creating 2 promises in render. The reason these promises are memoized is because when the promise status changes it's effectively trigger a render of the component. Wrapping these calls in `useMemo` solves the issue. Installing `babel-plugin-react-compiler` and enabling it in `vite.config.js` makes the `useMemo` unnecessary (as it should!) since it add some automatic memoization, again, as it should have always been the case:

> React Compiler automatically applies the equivalent of manual memoization, ensuring that only the relevant parts of an app re-render as state changes, which is sometimes referred to as “fine-grained reactivity”.

React's documentation [touches on the subject of passing a promise to a Client Component from a Server Component](https://react.dev/reference/react/use#streaming-data-from-server-to-client) which I assume takes care of caching the promise in the server. If you'd try to create the promise directly within `Post` or `ToDo` you'd get `Component.jsx A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework. Error Component Stack` which kind of confirms the theory.

[As per the documentation](https://react.dev/reference/react/use#dealing-with-rejected-promises), the first suggestion to dealing with rejected promised is an Error Boundary, a special component that takes children and has a static method called `getDerivedStateFromError`. There's no hook equivalent to tapping into this method so it has to be a class component. They acknowledge this and even suggest using `react-error-boundary` to take that complexity away, that could be an option for students.

Anyways, I think this is a neat and simple setup to leverage the now stable `use` API, an actual use for `Suspense` (beyond lazy-loading with `lazy`) and a proper, clean way of dealing with errors.
