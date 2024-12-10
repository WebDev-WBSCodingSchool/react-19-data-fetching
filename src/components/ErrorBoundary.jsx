import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error.message, errorInfo.componentStack);
  }

  render() {
    return this.state.hasError
      ? this.props.fallback || <p>💀 Something went wrong.</p>
      : this.props.children;
  }
}

export default ErrorBoundary;
