import React from "react";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>

        <container className="container1">
          <container className="containerA">
            <img
              className="main-img"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="rick"
            />
          </container>
        </container>
          <container className="containerB">
            <a href="/Search">Search</a>
            <a href="/Characters">Just Characters</a>
          </container>

      </header>
    </section>
  );
}
