import { BrowserRouter } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useTheme } from "@/hooks/useTheme";
import { AppRoutes } from "@/appRoutes";

const App = () => {
  useTheme();

  return (
    <BrowserRouter>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
