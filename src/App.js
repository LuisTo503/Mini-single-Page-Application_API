import './App.css';
import Show from './components/Show';
import Create from './components/Create';
import Edit from './components/Edit';
import Login from './components/Login';
import Register from './components/Register';
import LandingPage from './components/LandingPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseConfig/firebase';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/products' element={user ? <Show /> : <Login />} />
          <Route path='/create' element={user ? <Create /> : <Login />} />
          <Route path='/edit/:id' element={user ? <Edit /> : <Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;