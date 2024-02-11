import RoutePage from "./routers/RoutePage";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <RoutePage />
    </Router>
  )
}