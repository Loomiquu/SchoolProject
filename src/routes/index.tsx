import { Title } from "solid-start";
import "./index.scss"

export default function Home() {
  return (
    <main>
      <Title>QuizL</Title>
        <div id="title">
          The Ultimate Computer Science Quiz Game!
        </div>
        <a href="./game">
          PLAY!
        </a>
    </main>
  );
}
