import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {json} from "stream/consumers";

type ShowType = {
  userId: number
  id: number
  title: string
  completed: boolean
}

// // useEffect(() => {
// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(json => setShow(json))
// // }, [])

function App() {
  const [show, setShow] = useState<ShowType[]>([])
  const useShowUp = () => {
    // useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setShow(json))
    // }, [])
  }

  const clean = () => {
    setShow([])
  }


  return (
      <div className="App">
        <Button name={'show'} callBack={useShowUp}/>
        <Button name={'hide'} callBack={clean}/>
        <ul>
          {show.map(el => {
            return (
                <li key={el.id}>
                  <span>{el.id}</span>
                  <span>{el.title}</span>
                  <span>{`${el.completed}`}</span>
                </li>
            )
          })}
        </ul>
      </div>
  );
}

export default App;
