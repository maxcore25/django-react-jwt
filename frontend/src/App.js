import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
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
      </AuthProvider>
    </div>
  );
}

export default App;
