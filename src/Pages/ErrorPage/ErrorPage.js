import React from 'react';
import './ErrorPage.css'

export default function ErrorPage() {
  return (
    <div className="error-message-main">
      <div className="error-message-container">
        <h1>404</h1>
        <h2>Site crashed<br />* * * * * * * <span className="error-atom">&#9883;</span> *</h2>
        <p>Have you tried <a href="https://www.youtube.com/watch?v=opi0yOWUcKc" target="_blank">Curse of the Dead Gods</a> btw?</p>
      </div>
    </div>
  );
}