import { Header } from "./components/Header"
import { FormProvider } from "./context/ExpenseProvider"

export const CostControlApp = () => {
	return (
		<FormProvider>
			<Header/>
		</FormProvider>
	)
}
