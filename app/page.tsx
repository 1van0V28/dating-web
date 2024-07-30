import Main from "@/pages/Main"

// функция получения данных
// async function getData() {
// 	const response = await fetch("", { //здесь должны быть эндпоинты
// 		method: "GET"
//     })

//   	if (!response.ok) {
//     	throw new Error("Ошибка соединения")
//   	}

//   	const data = await response.json()
//   	return data
// }


export default async function Home() {
  	// const data = await getData() // данные для дальнейшей передачи и обработки

	return (
		<>
		<Main />
		</>
	)
}