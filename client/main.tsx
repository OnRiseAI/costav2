import { StrictMode, Component, type ReactNode, type ErrorInfo } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", color: "red" }}>
          <h1>Something went wrong.</h1>
          <pre>{this.state.error?.toString()}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}

console.log("main.tsx loaded and running...");

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Failed to find the root element");
} else {
  // Handle HMR by checking if root already exists
  const container = rootElement as any;

  if (!container._reactRoot) {
    const root = createRoot(rootElement);
    container._reactRoot = root;
    root.render(
      <StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </StrictMode>,
    );
  } else {
    // Reuse existing root
    container._reactRoot.render(
      <StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </StrictMode>,
    );
  }
}
