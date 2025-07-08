import React from "react";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((Response) => {
        setJokes(Response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  });

  return (
    <>
      <h1>Chai and Full Stack | youtube</h1>
      <p> Jokes: {jokes.length}</p>
      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
};

export default App;
