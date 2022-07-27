import React from 'react';
import styled from 'styled-components';
//yarn add styled-components

const EncycItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 120px;
      height: 120px;
      object-fit: cover;
    }
  }
  .contents {
    h3 {
      margin: auto;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

//       lastBuildDate / datetime :  검색 결과를 생성한 시간이다.
//       total / int : 검색 결과 문서의 총 개수를 의미한다.
//       start / int : 검색 결과 문서 중, 문서의 시작점을 의미한다.
//       display / int : 	검색된 검색 결과의 개수이다.
//       items{
//         title /string : 검색 결과 사전 정의의 제목을 나타낸다.
//         link /string : 사전 정의 정보 및 추가 정보를 볼 수 있는 link를 제공한다. link값은 두산 백과사전 사이트의 해당 페이지로 연결된다.
//         description /string : 검색 결과 문서의 내용을 요약한 패시지 정보이다. 문서 전체의 내용은 link를 따라가면 읽을 수 있다. 패시지에서 검색어와 일치하는 부분은 태그로 감싸져 있다.
//         thumbnail /string : 검색 결과에 이미지가 포함된 경우, 해당 이미지의 썸네일 link url을 나타낸다.
//       }

const EncycItem = ({ item }) => {
  const { title, description, link, thumbnail } = item;
  const title_result = title.replace(/<[^>]*>?/g, '');

  return (
    <EncycItemBlock style={{ borderBottom: '1px solid #eeeeee' }}>
      {thumbnail && (
        <div className="thumbnail">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={thumbnail} alt="thumbnail" />
          </a>
        </div>
      )}

      <div className="contents">
        <h3 style={{ marginTop: 'auto' }}>{title_result}</h3>
        <p>{description}</p>
        <p style={{ textAlign: 'right', marginBottom: '10px' }}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              fontSize: '14px',
              color: 'black',
            }}
          >
            본문 전체 확인하기
          </a>
        </p>
      </div>
    </EncycItemBlock>
  );
};

export default EncycItem;
