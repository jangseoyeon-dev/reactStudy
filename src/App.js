import "./App.css";
import Box from "./components/Box";
import { useState } from "react";
import Button from "./components/Button";
// 1. 박스 2개(타이틀, 사진, 결과)
// 2. 가위, 바위, 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3, 4 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패 결과에 따라 테두리 색이 변한다.(이기면-초록, 지면-빨강, 비기면-검정)

// 데이터
const choice = {
  rock: {
    name: "rock",
    img: "./rock.png",
  },
  paper: {
    name: "paper",
    img: "./paper.png",
  },
  scissors: {
    name: "scissors",
    img: "./scissors.png",
  },
  default: {
    name: "default",
    img: "./default.png",
  },
};

function App() {
  const [userSlected, setUserSelected] = useState(choice.default);
  const play = (userChoice) => {
    setUserSelected(choice[userChoice]);
  };

  return (
    <>
      <div className="main">
        <Box title="you" choice={userSlected} />
        {/* <Box title="computer" /> */}
      </div>
      <div className="main">
        <Button name="rock" onClick={() => play("rock")} />
        <Button name="paper" onClick={() => play("paper")} />
        <Button name="scissors" onClick={() => play("scissors")} />
      </div>
    </>
  );
}

export default App;
