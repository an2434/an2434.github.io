//import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
function App() {
  // let post = '강남 우동 맛집';
  const [글제목, 제목변경] = useState([
    "임술농민봉기",
    "병인양요",
    "임오군란",
    "띄얼키",
    "ㅁㄴㅇ",
  ]);
  const id = [];
  const [like, setlike] = useState([0, 0, 0, 0, 0]);
  const [drop, setdrop] = useState();
  const [title, settitle] = useState(1);
  const [modal, setmodal] = useState(false);
  const [input, setinput] = useState("");

  function save(e) {
    제목변경(글제목.concat(input));
    setlike(like.concat(0));
    console.log(id);

    e.stopPropagation();
    setinput("");
  }
  function deleteid(e) {
    글제목.filter(ti => 글제목 == "임술농민봉기" );
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

          <div className="list" id = { i }>


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
                   
                  }}
                >
                  {" "}
                  {like[i]}🥰
                </button>
                <button onClick={deleteid}>삭제</button>
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

        <p>6월 25일 발행</p>

  {console.log(like)}

      </div>
      {/* <h4>{post}</h4> */}

        {
          modal == true ? <Modal></Modal> : null
        }
   
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

    </div>
  );
}



export default App;
