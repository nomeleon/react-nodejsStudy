const BoardArticle = () => {
  return (
    <tr>
      <td>번호</td>
      <td>
        <a href="#">제목</a>
      </td>
      <td>작성자</td>
      <td>작성일</td>
      <td align="center">
        <input type={"button"} value="수정"></input>
        <input type={"button"} value="삭제"></input>
      </td>
    </tr>
  );
};

export default BoardArticle;
