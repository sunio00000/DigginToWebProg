import logo from './logo.svg';
import React, {useState} from'react';
import './App.css';

function App() {

  let [title,글제목변경] = useState(['김용기', '황수정', '최성현', '송예은']);
  let [like, 따봉변경] = useState([0, 0, 0, 0]);
  function htmlFunc() {
    return "함수를 통한 바인딩";
  }

  function changeTitle() {
    let newArray = [...title];
    newArray[0] = '오태양';
    글제목변경(newArray); 
  }

  function changeLike() {
    // let newArray = [...like];
    // newArray[idx] += 1;
    // 따봉변경(newArray);
    

  }

  function fnew() {
      return title.map((unit, idx) => {
      <div className ="list">
        <h3>
          { unit } <span onClick={ () => { 따봉변경(like + 1) } }> 🎉 </span> {like}
        </h3>
        <p> 2월 18일 발행</p>
        <hr></hr>
      </div>
    });
  }

  return (
    <div className="App">
      <div className = "black-nav">
        <div style= { {color:'blue', fontSize : '30px'}}>개발 Blog</div>
      </div>
      <button onClick={ changeTitle }>버튼</button>
      {/* <img src = {logo}></img>  */}
      <h4> { htmlFunc() } </h4>
      <div>
        {/* { fnew() } */}
        <div className ="list">
        <h3>
          { title[0] } <span onClick={ changeLike(0) }> 🎉 </span> {like}
        </h3>
        <p> 2월 18일 발행</p>
        <hr></hr>
      </div>
      <div className ="list">
        <h3>
          { title[1] } <span onClick={ changeLike(1) }> 🎉 </span> {like}
        </h3>
        <p> 2월 18일 발행</p>
        <hr></hr>
      </div>
      <div className ="list">
        <h3>
          { title[2] } <span onClick={ changeLike(2) }> 🎉 </span> {like}
        </h3>
        <p> 2월 18일 발행</p>
        <hr></hr>
      </div>
      <div className ="list">
        <h3>
          { title[3] } <span onClick={ changeLike(3) }> 🎉 </span> {like}
        </h3>
        <p> 2월 18일 발행</p>
        <hr></hr>
      </div>

      
      <Modal>

      </Modal>
      </div>
    </div>

  )
}

function Modal() {
  return (
    <div className = "modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세 내용</p>
      </div>
  )
}

export default App;
