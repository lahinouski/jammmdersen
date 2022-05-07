import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Favorites, ErrorPage, Details, History, SignIn, Search, LogIn, Home } from '../../Pages';
import { useApp } from './useApp';
import './App.css';

export default function App() {
  const { currentUserUsername, handleLogOut } = useApp();

  return (
    <div className="app">
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <header>
          <Link className="logo" to="/">
            <h1>Ja<span className="highlight">mmm</span>dersen</h1>
          </Link>
          <nav>
            {sessionStorage.getItem('userOnline') ?
              <div className="navigation-text">
                <span className="displayCurrentUser">{currentUserUsername}</span>
                <Link className="navigation-text-link" to="favorites">Favorites</Link>
                <Link className="navigation-text-link" to="history">History</Link>
                <Link className="navigation-text-link" to="/" onClick={handleLogOut}>Log out</Link>
              </div> :
              <div className="navigation-text">
                <Link className="navigation-text-link" to="signIn">Sign in</Link>
                <Link className="navigation-text-link" to="logIn">Log in</Link>
              </div>}
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/details" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/history" element={<History />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary >
    </div>
  );
}