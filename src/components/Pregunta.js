import React, { Fragment, useState } from "react";
import Error from ".//Error";

export default function Pregunta({
  guardarRestante,
  guardarPresupuesto,
  guardarmostrarpregunsta,
}) {
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  // funsion que lee el presupuesto
  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value, 10));
  };

  // boton para definir el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    // validar

    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }

    // si se pasa la validacion
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    guardarmostrarpregunsta(false);
  };

  return (
    <Fragment>
      <h2>Colocar tu presupuesto</h2>

      {error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
}
