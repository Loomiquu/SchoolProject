import { render } from 'solid-js/web'
import "./index.scss"

function App(){
	return (
		<>
			<div id="title">
				The Ultimate Computer Science Quiz Game!
			</div>
			<a href="/game">
				PLAY!
			</a>
		</>
	)
}


const root = document.getElementById('root')
render(() => <App />, root!)
