import React from "react";
import styles from "./Cards.module.scss";
import { Link } from "react-router-dom";

// desestructura los datos que obtuvimos de nuestro componente App.js.
const Cards = ({ page, results }) => {
  // crea una variable llamada display. Esto mantendrá todas nuestras tarjetas
  let display;
  //declaración if else para verificar si los datos que obtuvimos de nuestra API están vacíos o no
  if (results) {
    /*asignar nuestros results a nuestro componente card de manera que creará tarjetas para nosotros
    automáticamente.Pero primero, debemos desestructurar los datos que obtuvimos de nuestra API. */
    display = results.map((x) => {
      let { id, image, name, status, location } = x;

      return (
        <>
          <Link
            style={{ textDecoration: "none" }}
            to={`${page}${id}`}
            key={id}
            className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
          >
            <div
              className={`${styles.cards} d-flex flex-column justify-content-center`}
            >
              <img className={`${styles.img} img-fluid`} src={image} alt="" />
              <div className={`${styles.content}`}>
                <div className="fs-5 fw-bold mb-4">{name}</div>
                <div className="">
                  <div className="fs-6 fw-normal">Last Location</div>
                  <div className="fs-5">{location.name}</div>
                </div>
              </div>
            </div>
            {(() => {
              // si el personaje está vivo, muerto o desconocido
              if (status === "Dead") {
                return (
                  <div
                    className={`${styles.badge} position-absolute badge bg-danger`}
                  >
                    {status}
                  </div>
                );
              } else if (status === "Alive") {
                return (
                  <div
                    className={`${styles.badge} position-absolute badge bg-success`}
                  >
                    {status}
                  </div>
                );
              } else {
                return (
                  <div
                    className={`${styles.badge} position-absolute badge bg-secondary`}
                  >
                    {status}
                  </div>
                );
              }
            })()}
          </Link>
        </>
      );
    });
  } else {
    display = "No Characters Found :/";
  }
  //display: Esto mantendrá todas nuestras tarjetas.
  return <>{display}</>;
};
export default Cards;
