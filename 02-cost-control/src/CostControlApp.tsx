import { Header } from "./components/Header"
import { FormProvider } from "./context/FormProvider"

export const CostControlApp = () => {
	return (
		<FormProvider>
			<Header/>
		</FormProvider>
	)
}
