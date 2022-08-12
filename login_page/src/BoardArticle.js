import axios from "../node_modules/axios/index";

const BoardArticle = ({
  article,
  handlelist,
  handledetail,
  handleupdateform,
}) => {
  const handleDelete = (e) => {
    console.log("handleDelete(board_num) => ", e.target.id);
    axios
      .post("http://localhost:8008/delete", {
        num: e.target.id,
      })
      .then(() => {
        handlelist();
      })
      .catch((e) => {
        console.error(e);
      });
  };
  console.log("BoardArticle => ", article);
  return (
    <tr>
      <td>{article.board_num}</td>
      <td>
        <a href="#" id={article.board_num} onClick={handledetail}>
          {article.board_title}
        </a>
      </td>
      <td>{article.board_writer}</td>
      <td>{article.board_date}</td>
      <td align="center">
        <input
          type={"button"}
          value="수정"
          id={article.board_num}
          onClick={handleupdateform}
        ></input>
        <input
          type={"button"}
          value="삭제"
          id={article.board_num}
          onClick={handleDelete}
        ></input>
      </td>
    </tr>
  );
};

export default BoardArticle;
