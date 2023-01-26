import { formatDate } from "../helpers"

import IconoAhorro from '../assets/icono_ahorro.svg'
import IconoCasa from '../assets/icono_casa.svg'
import IconoComida from '../assets/icono_comida.svg'
import Iconogastos from '../assets/icono_gastos.svg'
import IconoOcio from '../assets/icono_ocio.svg'
import IconoSalud from '../assets/icono_salud.svg'
import IconoSuscripciones from '../assets/icono_suscripciones.svg'
import { IsExpenseForm } from "../interfaces"

type dictionary = {
	[field:string]:string
}

const dictionaryIcons:dictionary = {
	saving:IconoAhorro,
	food: IconoComida,
	home: IconoCasa,
	miscellaneous:Iconogastos,
	leisure:IconoOcio,
	health:IconoSalud,
	subscribes:IconoSuscripciones,
}

type props={
	expense:IsExpenseForm
}
export const Expense = ({expense}:props) => {
	return (
		<div className="gasto sombra">
			<div className="contenido-gasto">
				<img src={dictionaryIcons[expense.category]} alt="Expense Icon" />
				<div className="descripcion-gasto">
					<p className="categoria">{expense.category}</p>
					<p className="nombre-gasto">{expense.name}</p>
					<p className="fecha-gasto">
						Add to: <span>{formatDate((expense.date))}</span>
					</p>
				</div>
			</div>

			<p className="cantidad-gasto">${expense.amount}</p>
		</div>
	)
}
