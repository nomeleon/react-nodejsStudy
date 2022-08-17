const BoardDetail = ({ article, handlelist }) => {
  console.log("BoardDetail =>", article);
  const image = "http://localhost:8008/uploads/" + article.board_img;
  console.log("image =>", image);
  return (
    <div>
      <form>
        <table border="1" width="700px" align="center">
          <tr>
            <td width="100px">글번호</td>
            <td align="left" width="600px">
              {article.board_num}
            </td>
          </tr>
          <tr>
            <td width="100px">제목</td>
            <td align="left" width="600px">
              {article.board_title}
            </td>
          </tr>
          <tr>
            <td width="100px">글쓴이</td>
            <td align="left" width="600px">
              {article.board_writer}
            </td>
          </tr>
          <tr>
            <td width="100px">글쓴날짜</td>
            <td align="left" width="600px">
              {article.board_date}
            </td>
          </tr>
          <tr>
            <td width="100px">글내용</td>
            <td align="left" width="600px">
              {article.board_content}
            </td>
          </tr>
          <tr>
            <td width="100px">이미지</td>
            <td align="left" width="600px">
              <img src={image} />
            </td>
          </tr>
          <tr>
            <td colspan="2" align="center">
              <input type="button" value="글목록" onClick={handlelist}></input>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default BoardDetail;
