import React from "react";
import { Route, Link, NavLink } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>

        <container className="cnt1">
          <container className="containerA">
            <img
              className="main-img"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="rick"
            />
          </container>
    
          <container className="containerB">
            <NavLink exact to="/Search"className="homelinks"><h2>Search</h2></NavLink>
            <NavLink to="/Characters"className="homelinks"><h2>Characters</h2></NavLink>
          </container>
          
        </container>

      </header>
    </section>
  );
}
