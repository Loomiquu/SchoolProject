import "../sass/ButtonNode.scss"

interface ButtonNode {
	Text: string | undefined,
	Answer: boolean | undefined,
	index: number
}

export default function (props : ButtonNode) {
	return (
		<button>
			{props.Text}
		</button>
	)
}