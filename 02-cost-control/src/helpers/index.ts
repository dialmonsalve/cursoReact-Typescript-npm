
export const generateId = () => {

	const random = Math.random().toString(36).substring(2)
	const date = Date.now().toString(36)

	return `${random}${date}`
}

export const formatDate = (date: number) => {

	const newDate = new Date(date);

	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: '2-digit',
	}
	return newDate.toLocaleString('es-Es', options)
}

export const formatCant = (cant: number) => {
	return cant.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});
};