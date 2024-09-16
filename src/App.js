import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
    <div className="tsk_1">
      <div className="tsk_2">
          <h1>Affinity</h1>
      </div>
      <div className="tsk_w">
       <div className="tsk_3">
          <h2>T-askLearn</h2>     
      </div>
        <div className="tsk_4">      
         <span>Collaborate to Lern,Learn to Collaborate</span>
        </div>
        <div className="tsk_5_a">
          <div className="tsk_5">
           <label>Username or email address</label>       
           </div>
        <div className="tsk_5_t">
          <input type="text"></input>
        </div>
       </div>
       <div className="tsk_6_a">
      <div className="tsk_6">
         <label>Password</label>        
      </div>
      <div className="tsk_6_t">
         <input type="password"></input>
      </div>
      </div>
      <div className="tsk_7">
        <button className="button button1">Login</button>
      </div>
      <div className="tsk_8">
       <button className="button button1">Create account</button>
      </div>
   </div>
    </div>
  <BrowserRouter>
      <Routes>
        {/* <Route index element={DEFAULT_ROUTE_PAGE} /> */}
        <Route path="login" element={<Login />} />
       
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
