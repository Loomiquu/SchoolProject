import { Title } from "solid-start";

export default function Home() {
  return (
    <>
    <main>
      <link type="text/css" rel="stylesheet" href="index.css"></link>
      
      <Title>QuizL</Title>
        <div id="title">
          The Ultimate Computer Science Quiz Game!
        </div>
        <a href="./game">
          PLAY!
        </a>
    </main>
    </>
  );
}
