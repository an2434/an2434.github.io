import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  let post = '강남 우동 맛집';
  let [글제목, 제목변경] = useState(['임술농민봉기', '병인양요', '임오군란']);
  let [like, c] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <h4>reactblog</h4>
      </div>
      <button onClick={() => {
        let copy= [...글제목];
        copy.sort();
        제목변경(copy);
      
      }}>글수정</button>

      <div className="list">
        <h4>{글제목[0]}<span onClick={()=>c(like + 1)}> 🥰</span>{like}</h4>
        <p>6월 25일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>6월 25일 발행</p>
      </div>
      <div className="list">

        <h4>{글제목[2]}


        </h4>

        <p>6월 25일 발행</p>

      </div>
    </div>


  );
}

export default App;
