import "./App.css";
import { useState, useEffect } from "react";
import Movie from "./Components/Movie.jsx";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";

function App() {
  const [titleData, setTitleData] = useState("Filmes Disponíveis");

  const [listOfObjects, setListOfObjects] = useState([{}]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=0011910262529f0a261bcfa3c2079e2b&language=pt-BR&page=1"
      );
      setListOfObjects(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div className="App">
        <h1>{titleData}</h1>
      </div>
      <div>
        <Movie objects={listOfObjects}></Movie>
      </div>
    </>
  );
}

export default App;
