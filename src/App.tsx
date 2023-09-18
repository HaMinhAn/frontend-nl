import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RouteMangane from "./routes/Route";
import "./index.css";
import { AuthProvider } from "./contexts/auth";
function App() {
  return (
    <Router>
      <AuthProvider>
        <RouteMangane />
      </AuthProvider>
    </Router>
  );
}

export default App;
