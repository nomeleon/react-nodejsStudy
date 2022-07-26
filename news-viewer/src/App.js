/* eslint-disable */
//yarn add axios
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = () => {
    axios.get('http://jsonplaceholder.typicode.com/todos/1').then((reponse) => {
      setData(reponse.data);
    });
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          //stringify : 객체를 josn으로
          //parse : json을 객체로
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
