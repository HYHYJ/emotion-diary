import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

import RouteTest from "./components/RouteTest";
//components
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";
import React, { useReducer, useRef } from "react";
//⭐reducer
const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = {
        ...action.data,
      };
      newState = [newItem, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );

      break;
    }

    default:
      return state;
  }
  return newState;
};
//⭐Context
export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: "오늘의 일기 1번",
    //밀리세컨즈를 date에 넣어야함.
    date: 1705457535649,
  },
  {
    id: 2,
    emotion: 2,
    content: "오늘의 일기 2번",
    //밀리세컨즈를 date에 넣어야함.
    date: 1705457535650,
  },
  {
    id: 3,
    emotion: 3,
    content: "오늘의 일기 3번",
    //밀리세컨즈를 date에 넣어야함.
    date: 1705457535653,
  },
  {
    id: 4,
    emotion: 4,
    content: "오늘의 일기 4번",
    //밀리세컨즈를 date에 넣어야함.
    date: 1705457535654,
  },
  {
    id: 5,
    emotion: 5,
    content: "오늘의 일기 5번",
    //밀리세컨즈를 date에 넣어야함.
    date: 1705457535666,
  },
  {
    id: 6,
    emotion: 6,
    content: "오늘의 일기 6번",
    //밀리세컨즈를 date에 넣어야함.
    date: 1785457535668,
  },
];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);
  console.log(new Date().getTime());
  const dataId = useRef(0);
  //⭐CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  //⭐REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  //⭐EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    //⭐DiaryStateContext 감싸주기, .Provider 꼭 붙이기, value 전달
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit" element={<Edit />} />;
              <Route path="/diary/:id" element={<Diary />} />;
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
