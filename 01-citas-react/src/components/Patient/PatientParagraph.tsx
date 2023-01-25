
type props ={
	title:string
	propPatient:string
}
export const PatientParagraph = ( { title , propPatient }:props) => {
	return (

		<p className="font-bold mb-3 text-gray-700 uppercase">{title}: {" "}
					<span className="font-normal normal-case">{ propPatient }</span>					
		</p>
	)
}

