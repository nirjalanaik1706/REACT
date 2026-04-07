import './App.css';
import { BrowserRouter as Router } from "react-router-dom";import BasicRouting from "./Layout/Containers"
import Dashboard from "./Dashboard";
import CounterExample from './Count';
import RestList from './ProductCatlog/ListRest';

function App() {
  return (
    <div className='text-center'>
      <RestList></RestList>
      {/* <CounterExample></CounterExample> */}
    </div>
    // <Router>
    //   <BasicRouting />
    // </Router>
    // <Dashboard title="Corporate Dashboard" financialYear="2026"></Dashboard>
   
  );
}

export default App; 