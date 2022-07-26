/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
// import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
// const sampleArticle = {
//   title: 'title',
//   description: 'content',
//   url: 'https://google.com',
//   urlToImage: 'https://via.placeholder.com/160',
// };

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //async 를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=2a1c2b38cc694d1695286e03a726fe0e`,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  // 대기중일 때
  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }
  // 아직 response 값이 설정되지 않았을 때
  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};
// const NewsList = ({ category }) => {
//   const [loading, response, error] = usePromise(() => {
//     const query = category === 'all' ? '' : `&category=${category}`;
//     return axios.get(
//       `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`,
//     );
//   }, [category]);

//   // 대기중일 때
//   if (loading) {
//     return <NewsListBlock>대기중...</NewsListBlock>;
//   }
//   // 아직 response 값이 설정되지 않았을 때
//   if (!response) {
//     return null;
//   }

//   // 에러가 발생했을 때
//   if (error) {
//     return <NewsListBlock>에러 발생!</NewsListBlock>;
//   }

//   // response 값이 유효할 때
//   const { articles } = response.data;
//   return (
//     <NewsListBlock>
//       {articles.map(article => (
//         <NewsItem key={article.url} article={article} />
//       ))}
//     </NewsListBlock>
//   );
// };

export default NewsList;
