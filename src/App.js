/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [postTitle, setPostTitle] = useState([
    "안녕하세요",
  ]);
  const [num, setNum] = useState([0,0,0]);
  const [modalTitle,setModalTitle] = useState(0);

  const [modal, setModal] = useState("false");

  // const arrange = () => {
  //   const copy = [...postTitle];
  //   copy[0] = ;
  //   setPostTitle(copy);
  // };
  const[inputData,setInputData]=useState('');
  return (
    <div>
      <div className="App">
        <div className="black-nav">
          <h1>솧디blog</h1>
        </div>
        {/* <button
          type="button"
          onClick={() => {
            const copy = [...postTitle];
            const a = copy.sort();
            setPostTitle(a);
          }}
        >
          가나다순 정렬
        </button>
        <div className="list" name="post">
          <h4>
            {postTitle[0]}
            <span
              className="add-like"
              onClick={() => {
                setNum(num + 1);
              }}
            >
              👍
            </span>
            {num}
          </h4>

          <p>10월 5일 발행</p>
        </div>
        <div className="list" name="post">
          <h4>{postTitle[1]}</h4>
          <p>10월 5일 발행</p>
        </div>
        <div className="list" name="post">
          <h4 onClick={()=>{ setModal(!modal)}}>{postTitle[2]}</h4>
          <p>10월 5일 발행</p>
        </div>         */}

        {postTitle.map(function (item, i) {  //맵돌려서 클릭하는 것마다 글제목이랑 모달창보이게하기
          return (
            <div className="list" name="post" key={i}>
              <h4
                onClick={() => {
                  setModal(!modal);
                  setModalTitle(i)     //모달창에 셋모달타이틀i번째 보여주기
                }}
              >
                {postTitle[i]}
                
                <span
                  className="add-like"
                  onClick={(e) => {e.stopPropagation(); //이벤트 버블링 막아주기
                    let copy = [...num];
                    copy[i] = copy[i] + 1;
                    setNum(copy);
                  }}
                >
                  👍
                </span>
                {num[i]}
                   {/* //여기에 왜 num[i]인지..copy[i]일거같은데 */}
                <button onClick={(e)=>{e.stopPropagation();
                let copy = [...postTitle];
                copy.splice(i,1); //삭제해주는 메소드사용
                setPostTitle(copy)
                }}>삭제하기</button>
              </h4>
           

              <p>10월 5일 발행</p>
              
            </div>
          );
        })}
        <input type="text" onChange={(e)=>{setInputData(e.target.value);}}/>
       
        <button onClick={()=>{
            let copy = [...postTitle]
            copy.unshift(inputData); //인풋 입력한값(셋인풋은 함수라 인풋데이타에 입력) postTitle배열에 끼워넣기
            setPostTitle(copy)
        }}>글발행</button>
        {modal == true ? (
          <Modal modalTitle={modalTitle} postTitle={postTitle} /> //부모함수에서 자식함수로 내리는 과정
        ) : null}
      </div>
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.postTitle[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>      
      {/* <button onClick={()=>{props.setPostTitle(arrange)}}>글수정</button> //이거 어떻게하지...*/}
    </div>
  );
};

export default App;
