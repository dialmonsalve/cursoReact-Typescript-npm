import { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { formatCant } from '../helpers';

export const BudgeController = () => {

  const { budget } = useContext(ExpenseContext);

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica aqui</p>
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Budget: </span>
          {formatCant(budget)}
        </p>

        <p>
          <span>Available: </span>
          {formatCant(0)}
        </p>

        <p>
          <span>Expends: </span>
          {formatCant(0)}
        </p>
      </div>
    </div>
  );
};

//rat my are not good