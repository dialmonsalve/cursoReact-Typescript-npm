type props = {
	children: string,
	type:string
}
export const Message = ({ children, type }:props) => {
	return (
		<div className={`alerta ${type}`}>{children}</div>
	)
}
