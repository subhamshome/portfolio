import "./App.css";
import AppRoutes from "./components/Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/Theme";

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
