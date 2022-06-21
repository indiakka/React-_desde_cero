import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Search from "./components/Search/Search";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Filters from "./components/Filters/Filters";
import Navbar from "./components/Navbar/Navbar";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./components/Cards/CardDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;
  /*En lugar de almacenar los datos en la consola, usemos el hook useState. 
Esto almacenará los datos en una variable, y tendremos una clave de función 
para cambiar los datos de la variable cada vez que el hook useEffect obtenga 
nuevos datos.Estamos desestructurando info and result de la variable fetchedData
La variable fetchedData almacenará los datos que obtuvimos de la API. Usaremos la 
función updateFetchedData para cambiar los datos cuando queramos */
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    /*Estamos usando una función asíncrona para obtener nuestros datos sin procesar 
  y luego los convertimos al formato JSON.*/
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="row">
          <Filters
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updatePageNumber={updatePageNumber}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
          />
          <div className="col-8">
            <div className="row">
              <Cards page="/" results={results} />;
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />{" "}
    </div>
  );
};

export default App;
