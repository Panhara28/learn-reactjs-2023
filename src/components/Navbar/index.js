import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="nav">
          <div className="d-flex container">
            <div className="logo">
              <Link to="/">
                <h1>Logo</h1>
              </Link>
            </div>
            <ul className="navContainer">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
