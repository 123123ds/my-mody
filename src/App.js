import './App.css';
import React,{ useState } from 'react';
import {BrowserRouter, Routes,Route}  from 'react-router-dom';
import loginpage from './loginpage/loginpage';


function MainNab(props) {
  let [list] = useState(['리스트1','리스트2','리스트3','리스트4','리스트5']);
  return (  
    <div className="MainNav">
      <h1 className='Mainname'>{props.title}</h1>
      <ul className='MainUl'>
        <li onClick={function(){props.onChangeMode();}}>{list[0]}</li>
        <li>{list[1]}</li>
        <li>{list[2]}</li>
        <li>{list[3]}</li>
        <li>{list[4]}</li>
      </ul>

      <form className='searchbox'>
        <input id='search1' type={'text'}></input>
        <input id='submit' type={'submit'} value='모임 찾아보기'></input>
      </form>

      <div className='login'>
        <ul>
          <li>Login</li>
          <li>My page</li>
        </ul>
      </div>
    </div>
  )
}


function Mainteam(){
  return(
    <main className='maintema'>
    <div className='textbox'>
      <p id='textbox1'>근처에 가장 가까운<br></br>
      우리들의 스터디
      </p>
      <p>
      가장 가까운 동네 스터디 모임, 당신이 원하는 사람들과 함께.<br></br>
      즐겁게 같이 공부해봐요!
      </p>
      <div className='nextbox'>
        동네 스터디 찾기 
      </div>
    </div>

    <div className='mainteamaction'></div>
  </main>
  )
}

function Mainteam2(){
  return(
    <main className='maintema2'>
    <section className='leftbox'>
      <h1 id='leftname'>동네 스터디</h1>
      <ul id='leftul'>  
        <li><a></a>리스트1</li>
        <li>리스트2</li>
        <li>리스트3</li>
        <li>리스트4</li>
      </ul>
    </section>
    <section className='rightbox'>
      <h1 id='rightname'>스터디후기</h1>
      <ul className='rightbox1'>
        <li>리스트1</li>
        <li>리스트2</li>
        <li>리스트3</li>
        <li>리스트4</li>
      </ul>
    </section>
  </main>
  )
}

function Mainteam3(){
  return(
    <main className='maintema3'>
    <h1 id='rightname'>스터디 커뮤니티</h1>
    <div></div>
  </main>
  )
} 

function App() {
  return (
    <body>
       <BrowserRouter>
    <Routes>
      <Route path='/1'  element={<loginpage />}></Route>
    </Routes>
    </BrowserRouter>
    
      <MainNab title="Mody" onChangeMode={function(){alert('Hello');}}>
      </MainNab>
      <Mainteam></Mainteam>
      <Mainteam2>
      </Mainteam2>
      <Mainteam3></Mainteam3>
    </body>
  )
}

export default App;
