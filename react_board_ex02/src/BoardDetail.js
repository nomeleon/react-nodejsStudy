const BoardDetail = () => {
  return (
    <div>
      <form>
        <table border="1" width="700px" align="center">
          <tr>
            <td wiidth="100px">글번호</td>
            <td align="left" width="600px">
              board_num
            </td>
          </tr>
          <tr>
            <td wiidth="100px">제목</td>
            <td align="left" width="600px">
              board_title
            </td>
          </tr>
          <tr>
            <td wiidth="100px">글쓴이</td>
            <td align="left" width="600px">
              board_writer
            </td>
          </tr>
          <tr>
            <td wiidth="100px">작성일</td>
            <td align="left" width="600px">
              board_date
            </td>
          </tr>
          <tr>
            <td wiidth="100px">내용</td>
            <td align="left" width="600px">
              board_content
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <input type="button" value="글목록"></input>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default BoardDetail;
