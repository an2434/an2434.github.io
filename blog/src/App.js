//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  let post = '강남 우동 맛집';
  let [글제목, 제목변경] = useState(['임술농민봉기', '병인양요', '임오군란','띄얼키','ㅁㄴㅇ']);
  let [like, chlike] = useState([0,0,0,0,0]);

  let [modal, setmodal] = useState(false);
  // 글제목.map(function(o,p) {
  // return(
  //   like.push(0)
  // )
  
  // })
  // console.log(like);
  return (
    <div className="App">
      <div className="black-nav">
        <h4>reactblog</h4>
      </div>
      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        제목변경(copy);

      }}>글수정</button>



      {/* <div className="list">
        <h4>{글제목[0]}<span onClick={() => c(like + 1)}> 🥰</span>{like}</h4>
        <p>6월 25일 발행</p>
      </div> */}
      {
        글제목.map(function (a,i) {
          return (
            <div className="list">
              <h4>{글제목[i]}
               <p><button onClick={() => {
                  let copy2 = [...like];
                  copy2[i] = copy2[i] + 1;
                  chlike(copy2);
                  //console.log(like);
                }}> {like[i]}🥰</button>
                </p>


              </h4>
              <p>6월 25일 발행</p>
            </div>
          )
        })
      }

      {/*    
      <div className="list">

        <h4 onClick={() => { setmodal(modal ? false : true) }}>{글제목[2]}

        </h4>
        <p>6월 25일 발행</p>
        {
          modal == true ? <Modal></Modal> : null
        }
      </div> */}



    </div >
  );
 
}
// function Modal() {
//   return (
//     <div className="modal">
//       <h4>제목</h4>
//       <p>날짜</p>
//       <p>상세내용</p>
//     </div>);
// }

// function Dd(){
//   return(

//     <div className="dd">
//       <h4>sdadsd</h4>
//       </div>
//   );
// }




export default App;
