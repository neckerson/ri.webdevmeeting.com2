import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" role="navigation">

            <div role="banner" className="navbar-brand">
              <h1>
                Website Title
                <a href="/" className="text-light logo-image">
                  <img alt="logo" src=""></img>
                </a>
              </h1>
            </div>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li>
                <a className="nav-link" href="/">Link #1</a>
              </li>
              <li>
                <a className="nav-link" href="/">Link #2</a>
              </li>
              <li>
                <a className="nav-link" href="/">Link #3</a>
              </li>
            </ul>
          </div>

        </nav>

      </header>

      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col">
              First
            </div>
            <div className="col">
              Second
            </div>
            <div className="col">
              Third
            </div>
          </div>
        </div>
      </div>

      <script src="./js/index.js"></script>

      <footer>
        <div className="container-fluid">
          <div className="row">
            <p>
              &copy; Copyright 2019 by WebDevRI
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
