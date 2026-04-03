import './App.css';
import { BrowserRouter as Router } from "react-router-dom";import BasicRouting from "./Layout/Containers"
import Dashboard from "./Dashboard";

function App() {
  return (
    // <Router>
    //   <BasicRouting />
    // </Router>
    <Dashboard title="Corporate Dashboard" financialYear="2026"></Dashboard>
   
  );
}

export default App; 