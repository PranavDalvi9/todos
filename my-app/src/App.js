import logo from './logo.svg';
import './App.css';
import {Route, Routes, Link, Navigate, useNavigate} from "react-router-dom";
import Home  from "./Components/Home";
// import {LoginPg} from "./Components/LoginPg";
import LoginPg from "./Components/LoginPg"
import TodosCreate from "../src/Components/TodosCreate";
import { useSelector } from 'react-redux';
import TodosEdit from './Components/TodosEdit';


const PrivateRoute = ({isAuthenticate, children}) => {
  return isAuthenticate ? children : <Navigate to={"/login"}/> 
}
 
function App() {
  const navigate = useNavigate()
  const isAuthenticate = useSelector((store) => store.login.isAuthenticate)
  // console.log("is", isAuthenticate);

  return (
    <div className="App">
     <h1>Redux hooks</h1>
     <div>
       <button onClick={() => {navigate("/login")}}>Login</button>
       <button onClick={() => {navigate("/")}}>Home</button>
       <button onClick={() => {navigate("/todos-create")}}>Tod-Dos</button>
       <button></button>
     </div>

      <Routes>
        <Route path='/login' element={<LoginPg/>}></Route>

        <Route path='/' element={
          <PrivateRoute isAuthenticate={isAuthenticate}><Home/></PrivateRoute>
        }></Route>


        <Route path='/todos-create' element={
          <PrivateRoute isAuthenticate={isAuthenticate}><TodosCreate/></PrivateRoute>
        }></Route>


        <Route path='/todos/:id/edit' element={
          <PrivateRoute isAuthenticate={isAuthenticate}><TodosEdit/></PrivateRoute>
        }></Route>

      </Routes>

    </div>
  );
}

export default App;
