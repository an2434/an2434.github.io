import logo from './logo.svg';
import './App.css';
import{useState} from 'react';
function App() {
  let post = '강남 우동 맛집';
useState();
  return (
    <div className="App">
      <div className="black-nav">

        <h4>
          블로그임
        </h4>

        {/* <h4 style={{color :'red', fontSize :'16px'}} id = {post}>블로그임</h4> */}
      </div>
      <div className ="list">
        <h4>글제목</h4>
        <p>6월 25일 발행</p>
        <p>6월 25일 발행</p>

      </div>
      {/* <h4>{post}</h4> */}

    </div>
  );
}

export default App;
