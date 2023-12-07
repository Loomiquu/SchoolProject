import { createSignal } from "solid-js/types/server/index.js"
import schema from "../questions.json"

const STARTER_LIVES = 3
const [Lives, Change] = createSignal(STARTER_LIVES)

export function GetState() {
	return Lives
}

type State = number | ((prev: number) => number )
export function UpdateState(v: State) {
	Change(v)
}

//! Always call the second method to remove it from the array
export function GetRandomQuestion() {
	const unsanitizedNumber = Math.random() * schema.length
	const number = Math.floor(unsanitizedNumber)

	return schema[number], () => {
		schema.splice(number, 1)
	}
}