/* eslint-disable */
import React, { createRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import EncycItem from './EncycItem';
import axios from 'axios';
// import usePromise from '../lib/usePromise';

const EncycHeader = styled.div`
  display: flex;
  background: #bbdefb;
  width: 100%;
  color: #282c34;
  padding-left: 20px;
  align-items: center;
`;

const EncycListBlock = styled.div`
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

const EncycList = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputSearch, setInputSearch] = useState('안녕');
  const [displayNum, setDisplayNum] = useState(10);
  const [optionNum, setOptionNum] = useState([
    10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  ]);

  const NAVER_CLIENT_ID = 'ir3vWsGnql5HVjuMKodQ';
  const NAVER_CLIENT_SECRET = '9xYnqTe25x';

  const onChange = (e) => {
    setInputSearch(e.target.value);
  };

  const onChange2 = async (e) => {
    setDisplayNum(e.target.value);
    // console.log(displayNum);
    // setLoading(true);
    try {
      const response = await axios.get('/v1/search/encyc', {
        params: {
          query: inputSearch, // 이미지 검색 텍스트
          start: 1, // 검색 시작 위치
          display: displayNum, // 검색된 검색 결과의 개수
        },
        headers: {
          'X-NAVER-Client-Id': NAVER_CLIENT_ID,
          'X-NAVER-Client-Secret': NAVER_CLIENT_SECRET,
        },
      });
      setItems(response.data.items);
    } catch (e) {
      console.log(e);
    }
    // setLoading(false);
  };

  const onClick = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/v1/search/encyc', {
        params: {
          query: inputSearch, // 이미지 검색 텍스트
          start: 1, // 검색 시작 위치
          display: displayNum, // 검색된 검색 결과의 개수
        },
        headers: {
          'X-NAVER-Client-Id': NAVER_CLIENT_ID,
          'X-NAVER-Client-Secret': NAVER_CLIENT_SECRET,
        },
      });
      setItems(response.data.items);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  useEffect(() => {
    //async 를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/v1/search/encyc', {
          params: {
            query: inputSearch, // 이미지 검색 텍스트
            start: 1, // 검색 시작 위치
            display: 10, // 가져올 이미지 갯수
          },
          headers: {
            'X-NAVER-Client-Id': NAVER_CLIENT_ID,
            'X-NAVER-Client-Secret': NAVER_CLIENT_SECRET,
          },
        });
        setItems(response.data.items);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // 대기중일 때
  if (loading) {
    return <EncycListBlock>대기중...</EncycListBlock>;
  }
  // 아직 response 값이 설정되지 않았을 때
  if (!items) {
    return null;
  }

  return (
    <>
      <EncycHeader>
        <h2>My Direct Encyclopedia</h2>

        <input
          name="input_search"
          onChange={onChange}
          onKeyPress={onKeyPress}
          style={{
            width: '200px',
            height: '50px',
            backgroundColor: '#F0F0F0',
            border: '0',
            paddingLeft: '10px',
            borderRadius: '15px',
            marginLeft: '30px',
          }}
          placeholder={
            inputSearch == '안녕' ? '검색어를 입력하세요' : inputSearch
          }
        />
        <select
          onChange={onChange2}
          style={{
            width: '100px',
            height: '50px',
            backgroundColor: '#F0F0F0',
            border: '0',
            borderRadius: '15px',
            marginLeft: '5px',
          }}
        >
          {optionNum.map(function (option) {
            return (
              <option value={option}>
                {option === 10 ? '10 (기본)' : option}
              </option>
            );
          })}
        </select>
        <button
          onClick={onClick}
          style={{
            width: '100px',
            height: '50px',
            backgroundColor: '#F0F4C3',
            border: '0',
            borderRadius: '15px',
            marginLeft: '5px',
          }}
        >
          SEARCH
        </button>
      </EncycHeader>

      <EncycListBlock>
        {items.map((item) => (
          <EncycItem key={item.link} item={item} />
        ))}
      </EncycListBlock>
    </>
  );
};

export default EncycList;
