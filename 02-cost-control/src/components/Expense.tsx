import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css'
import { ExpenseForm } from '../interfaces';
import { formatDate } from '../helpers';

import IconoAhorro from '../assets/icono_ahorro.svg';
import IconoCasa from '../assets/icono_casa.svg';
import IconoComida from '../assets/icono_comida.svg';
import IconoGastos from '../assets/icono_gastos.svg';
import IconoOcio from '../assets/icono_ocio.svg';
import IconoSalud from '../assets/icono_salud.svg';
import IconoSuscripciones from '../assets/icono_suscripciones.svg';
import { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

type Dictionary = {
  [field: string]: string;
};

const dictionaryIcons: Dictionary = {
  saving: IconoAhorro,
  food: IconoComida,
  home: IconoCasa,
  miscellaneous: IconoGastos,
  leisure: IconoOcio,
  health: IconoSalud,
  subscribes: IconoSuscripciones,
};

type props = {
  expense: ExpenseForm;
};
export const Expense = ({ expense }: props) => {

  const { onRemoveExpense, onEditExpenseForm } = useContext(ExpenseContext);

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => onEditExpenseForm(expense)}>
        Edit
      </SwipeAction>
    </LeadingActions>
  );
  
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={ () => onRemoveExpense(expense.id) }
      >
        Delete
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
          leadingActions={leadingActions()}
          trailingActions={trailingActions()}
      >

        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={dictionaryIcons[expense.category]} alt="Expense Icon" />
            <div className="descripcion-gasto">
              <p className="categoria">{expense.category}</p>
              <p className="nombre-gasto">{expense.expenseName}</p>
              <p className="fecha-gasto">
                Add to: <span>{expense.date}</span>
              </p>
            </div>
          </div>

          <p className="cantidad-gasto">${expense.amount}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};
