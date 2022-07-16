//import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
function App() {
  // let post = '강남 우동 맛집';
  let [글제목, 제목변경] = useState([
    "임술농민봉기",
    "병인양요",
    "임오군란",
    "띄얼키",
    "ㅁㄴㅇ",
  ]);
  let [like, setlike] = useState([0, 0, 0, 0, 0]);
  let [drop, setdrop] = useState();
  let [title, settitle] = useState(1);
  let [modal, setmodal] = useState(false);
  let [input, setinput] = useState("");

  function save(e) {
    제목변경(글제목.concat(input));
    setlike(like.concat(0));
    console.log(input, 글제목);

    e.stopPropagation();
    setinput("");
  }
  function deletekey(e) {
    console.log(1);
    e.stopPropagation();
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>reactblog</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          제목변경(copy);
        }}
      >
        글정렬
      </button>

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setmodal(true);
                settitle(i);
              }}
            >
              {글제목[i]}

              <span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    let copy2 = [...like];
                    copy2[i] = copy2[i] + 1;
                    setlike(copy2);
                    //console.log(like);
                  }}
                >
                  {" "}
                  {like[i]}🥰
                </button>
                <button onClick={deletekey}>삭제</button>
              </span>
            </h4>
            <p>6월 25일 발행</p>
          </div>
        );
      })}

      <input
        type="text"
        value={input}
        onChange={(e) => {
          setinput(e.target.value);
        }}
      />
      <button onClick={save}>입력</button>

      {modal === true ? (
        <Modal title={title} 글제목={글제목} 제목변경={제목변경} />
      ) : null}

      {/*    
      <div className="list">

        <h4 onClick={() => { setmodal(modal ? false : true) }}>{글제목[2]}

        </h4>
        <p>6월 25일 발행</p>
<<<<<<< HEAD
        <p>6월 25일 발행</p>

  {console.log(like)}

      </div>
      {/* <h4>{post}</h4> */}
=======
        {
          modal == true ? <Modal></Modal> : null
        }
      </div> */}
    </div>
  );
}
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick>제목 변경 </button>
>>>>>>> d31991d8738e1e8f008256854bb2ec02a24cfa33
    </div>
  );
}

// function Dd(){
//   return(

//     <div className="dd">
//       <h4>sdadsd</h4>
//       </div>
//   );
// }

export default App;
