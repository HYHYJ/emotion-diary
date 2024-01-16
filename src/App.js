import "./App.css";
//⭐BrowserRouter을 임포트
import { BrowserRouter, Routes, Route } from "react-router-dom";

//⭐페이지들 import하기
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
//⭐RouteTest 임폴트
import RouteTest from "./components/RouteTest";
//components
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";
function App() {

  return (
    //⭐BrowserRouter로 감싸주기 :
    //⭐감싸져 있는 부분들은 이 브라우저의 url과 맵핑 될수 있다.
    <BrowserRouter>
      <div className="App">
        <MyHeader headText={'헤더'} leftChild={
          <MyButton text={"왼쪽버튼"} onClick={()=> alert("왼쪽클릭")}/>
        } rightChild={<MyButton text={"오른쪽버튼"} onClick={()=> alert("오른쪽클릭")}/>
      }/>
        <h2>App.js</h2>

        <MyButton text={'버튼'} onClick={()=> alert("버튼 클릭")}
          type={"positive"}/>
          <MyButton text={'버튼'} onClick={()=> alert("버튼 클릭")}
          type={"negative"}/>
          <MyButton text={'버튼'} onClick={()=> alert("버튼 클릭")}
          type={"default"}/>
          {/*⭐ Routes에 Route 태그 넣기 */}
        <Routes>
          {/*⭐경로에 따라 맵핑 */}
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />;
          {/*✏️/:id를 넣을 것이라는 암시를 준다.  */}
          {/* 아이디가 없는 일기는 없다. */}
          <Route path="/diary/:id" element={<Diary />} />;
        </Routes>
        {/* RouteTest 태그 */}
        <RouteTest />
        {/*MPA = 새로고침이 됨  */}
        {/* <a href={"/new"}>NEW로 이동하기</a> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
