import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { PatientList } from "./components/PatientList"

export const App = () => {
	return (
		<div className="container mx-auto mt-20">
			<Header/>

			<div className="mt-12 md:flex">			
				<Form/>
				<PatientList/>
			</div>
		</div>
	)
}
