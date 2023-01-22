import { DivForm } from './components/Form'
import { Header } from './components/Header'
import { PatientList } from './components/Patient'

export const App = () => {
	return (
		<div className="container mx-auto mt-20">
			<Header/>

			<div className="mt-12 md:flex">			
				<DivForm/>
				<PatientList/>
			</div>
		</div>
	)
}
