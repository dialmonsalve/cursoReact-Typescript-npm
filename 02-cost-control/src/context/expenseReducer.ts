import { ActionTypes, expenseForm, IsExpenseForm } from "../interfaces";



export const expenseReducer = (state: typeof expenseForm[], action:ActionTypes):IsExpenseForm[] => {

	switch (action.type) {
		case '[BUDGET Add budget]':
			return [...state, action.payload]
			
		case '[BUDGET Update budget]':
			throw new Error('Not implemented yet')

		case '[BUDGET Remove budget]':	
			throw new Error('Not implemented yet')
	
		default:
			return state;
	}


}
