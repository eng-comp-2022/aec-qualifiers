import "./App.css";
import ArticleList from "./components/ArticleList";
import React, { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/articles/", {
      methods: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("HITTTING");
        return response.articles;
      })
      .then((response) => setArticles(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App container m-4">
      <div className="row">
        <div className="text-center">
          <h1>Connecting a React Frontend to a Django Backend.</h1>
        </div>
      </div>

      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
