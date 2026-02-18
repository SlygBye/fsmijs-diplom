import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';
import { RootState } from '../store';

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Главная</Link>
      
      {user ? (
        <>
          <span style={styles.welcome}>Привет, {user.name}!</span>
          <Link to="/profile" style={styles.link}>Профиль</Link>
          <button onClick={handleLogout} style={styles.button}>
            Выйти
          </button>
        </>
      ) : (
        <>
          <Link to="/login" style={styles.link}>Вход</Link>
          <Link to="/register" style={styles.link}>Регистрация</Link>
        </>
      )}
    </nav>
  );
};

const styles = {
  nav: {
    padding: '1rem',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #dee2e6',
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '1rem'
  },
  welcome: {
    color: '#28a745',
    fontWeight: 'bold' as const
  },
  button: {
    padding: '0.25rem 0.5rem',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default Navigation;