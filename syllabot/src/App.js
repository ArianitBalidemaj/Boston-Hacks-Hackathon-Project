import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import { Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/login" element={<SignIn />}/>
      <Route path="/dashboard" element={<h1>Dashboard</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
