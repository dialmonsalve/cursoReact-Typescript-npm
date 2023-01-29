import { useContext, useEffect, useState } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { formatCant } from '../helpers';
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export const BudgeController = () => {

  const [{expenseState, onRemoveAllExpenses},{ budget, onRemoveBudget}] = useContext(ExpenseContext);

  const [available, setAvailable] = useState(0)
  const [expend, setExpend] = useState(0)
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    const totalExpend = expenseState.reduce((total, expend) => Number(expend.amount) + total, 0);
    const totalAvailable = budget - totalExpend;

    const newPercent = ((( budget - totalAvailable)/budget)*100).toFixed(2);

    setAvailable(totalAvailable)
    setExpend(totalExpend)

    setTimeout(() => {
      setPercent(Number(newPercent))      
    }, 1000);

  }, [expenseState]) 

  const resetApp = () =>{
    onRemoveAllExpenses()
    onRemoveBudget()
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: percent >100 ? '#DC2626': '#3B82f6',
            trailColor:'#f5f5f5',
            textColor: percent >100 ? '#DC2626': '#3B82f6',
            
          })}
          value={percent}
          text={`${percent}% expend`}
        
        />
      </div>

      <div className="contenido-presupuesto">
        <button
          className="reset-app"
          type="button"
          onClick={ resetApp }
        >
          Reset app
        </button>
        <p>
          <span>Budget: </span>
          {formatCant(budget)}
        </p>

        <p className={`${available < 0 ? 'negativo': ''}`}>
          <span>Available: </span>
          {formatCant(available)}
        </p>

        <p>
          <span>Expends: </span>
          {formatCant(expend)}
        </p>
      </div>
    </div>
  );
};

//rat my are not good