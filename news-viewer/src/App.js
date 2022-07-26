/* eslint-disable */
//yarn add axios
//yarn add styled-components
import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import NewsPage from './pages/NewsPage';
import { Route, Routes } from '../node_modules/react-router-dom/index';

// const App = () => {
//   const [data, setData] = useState(null);
//   const onClick = async () => {
//     try {
//       const reponse = await axios.get(
//         'http://newsapi.org/v2/top-headlines?country=kr&apiKey=2a1c2b38cc694d1695286e03a726fe0e',
//       );
//       setData(reponse.data);
//     } catch (e) {
//       console.log(e);
//     }
//     // axios
//     //   .get('http://jsonplaceholder.typicode.com/todos/1')
//     //   .then((reponse) => {});
//   };
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && (
//         <textarea
//           rows={7}
//           value={JSON.stringify(data, null, 2)}
//           //stringify : 객체를 josn으로
//           //parse : json을 객체로
//           readOnly={true}
//         />
//       )}
//     </div>
//   );
// };

// const App = () => {
//   const [category, setCategory] = useState('all');
//   const onSelect = useCallback((category) => setCategory(category), []);

//   return (
//     <>
//       <Categories category={category} onSelect={onSelect} />
//       <NewsList category={category} />
//     </>
//   );
// };

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
};
export default App;
