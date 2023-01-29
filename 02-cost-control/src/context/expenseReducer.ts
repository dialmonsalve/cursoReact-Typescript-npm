import { ActionTypes, expenseForm, ExpenseForm } from '../interfaces';

export const expenseReducer = (state: typeof expenseForm[], action: ActionTypes): ExpenseForm[] => {

	switch (action.type) {
		case '[BUDGET Add budget]':
			return [...state, action.payload];

		case '[BUDGET Update budget]':
			return state.map( expense =>  expense.id === action.payload.id ? action.payload : expense)

		case '[BUDGET Remove budget]':
			return state.filter(expense => expense.id !== action.payload)

		case '[BUDGET RemoveAll budget]':
			return []

		default:
			return state;
	}
}
