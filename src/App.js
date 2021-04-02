import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import NasaPoD from "./components/NasaPoD";
import Header from "./components/Header";
import ContentPanel from "./components/ContentPanel";

function App() {
  const [picOfTheDay, setPicOfTheDay] = useState([]);
  useEffect(() => {
    Axios.get(
      // "https://api.nasa.gov/planetary/apod?api_key=1yPHQU6cJnSL0oaOtrN6Ccza5fa2ejhwkij7Bfw5"
      //"https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
      "https://api.nasa.gov/planetary/apod?api_key=1yPHQU6cJnSL0oaOtrN6Ccza5fa2ejhwkij7Bfw5"
    )
      .then((res) => {
        setPicOfTheDay(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Header podDate={picOfTheDay.date} />
      <NasaPoD srcPOD={picOfTheDay.url} format={picOfTheDay.media_type} />
      <ContentPanel
        podTitle={picOfTheDay.title}
        podExplanation={picOfTheDay.explanation}
        podCopyright={picOfTheDay.copyright}
      />
    </div>
  );
}

export default App;
