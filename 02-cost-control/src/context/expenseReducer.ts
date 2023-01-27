import { ActionTypes, expenseForm, ExpenseForm } from '../interfaces';

export const expenseReducer = (state: typeof expenseForm[], action: ActionTypes): ExpenseForm[] => {

	switch (action.type) {
		case '[BUDGET Add budget]':
			return [...state, action.payload];

		case '[BUDGET Update budget]':
			throw new Error('Not implemented yet')

		case '[BUDGET Remove budget]':
			return state.filter(expense => expense.id !== action.payload)

		default:
			return state;
	}


}
