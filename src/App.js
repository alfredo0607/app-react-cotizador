import React, { useEffect, useState } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formularios";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunsta, guardarmostrarpregunsta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGato] = useState({});
  const [creargasto, guardarcreargasto] = useState(false);

  useEffect(() => {
    if (creargasto) {
      // agrega el nuevo presupuesto
      guardarGastos([...gastos, gasto]);

      // resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      // Resetear a false
      guardarcreargasto(false);
    }
  }, [gasto, creargasto, gastos, restante]);

  return (
    <div className="container">
      <header>
        <h1>Presupuesto</h1>
        <div className="contenido-principal contenido">
          {mostrarpregunsta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              guardarmostrarpregunsta={guardarmostrarpregunsta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  guardarGato={guardarGato}
                  guardarcreargasto={guardarcreargasto}
                />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />

                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
