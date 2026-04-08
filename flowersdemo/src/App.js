import './App.css';
import { BrowserRouter as Router } from "react-router-dom"; import BasicRouting from "./Layout/Containers"
import Dashboard from "./Dashboard";
import CounterExample from './Count';
import RestList from './ProductCatlog/ListRest';
import DeleteProduct from './ProductCatlog/DeleteProduct';
import UpdateProduct from './ProductCatlog/UpdateProduct';
import InsertProduct from './ProductCatlog/InsertProduct';

function App() {
  return (
    <div className='text-center'>
      <InsertProduct></InsertProduct>
      <UpdateProduct></UpdateProduct>
      <DeleteProduct></DeleteProduct>
      <RestList></RestList>
      <CounterExample></CounterExample>
    </div>
    // <Router>
    //   <BasicRouting />
    // </Router>
    // <Dashboard title="Corporate Dashboard" financialYear="2026"></Dashboard>

  );
}

export default App; 