import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Run axe-core only in development, and only in the browser (not SSR/tests).
// Violations are logged to the devtools console on every render.
if (import.meta.env.DEV && typeof window !== "undefined") {
  void (async () => {
    const React = await import("react");
    const ReactDOM = await import("react-dom");
    const axe = (await import("@axe-core/react")).default;
    axe(React, ReactDOM, 1000);
  })();
}

createRoot(document.getElementById("root")!).render(<App />);
