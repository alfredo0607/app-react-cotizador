import React, { Fragment } from "react";
import {revisarPresupuesto} from "../helpers";

export default function controlPresupuesto({ presupuesto, restante }) {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto : ${presupuesto}</div>

      <div className={revisarPresupuesto(presupuesto, restante)}>Restante : ${restante}</div>
    </Fragment>
  );
}
