const BoardUpdateForm = () => {
  return (
    <div>
      <form>
        <table border="1" width="700px" align="center">
          <tr>
            <td wiidth="100px">제목</td>
            <td align="left" width="600px">
              <input
                type="text"
                name="border_title"
                defaultValue="border_title"
              ></input>
            </td>
          </tr>
          <tr>
            <td wiidth="100px">글쓴이</td>
            <td align="left" width="600px">
              arctcle.board_writer
            </td>
          </tr>

          <tr>
            <td wiidth="100px">내용</td>
            <td align="left" width="600px">
              <input
                type="text"
                name="border_content"
                defaultValue="border_content"
              ></input>
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <input type="button" value="글수정"></input>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default BoardUpdateForm;
