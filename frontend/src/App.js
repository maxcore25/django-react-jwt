import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
