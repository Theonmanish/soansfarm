import React from 'react';
import { Link } from 'react-router-dom';

export default class PageErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    if (import.meta.env.DEV) {
      console.error('Page rendering failed:', error, info.componentStack);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="section" role="alert">
          <div className="container">
            <p className="tag-label">PAGE UNAVAILABLE</p>
            <h1>This page couldn’t be displayed.</h1>
            <p className="lead">Try opening the page again or return to the home page.</p>
            <Link className="btn-editorial" to="/">Return to the home page</Link>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}
