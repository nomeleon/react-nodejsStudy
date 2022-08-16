import { useEffect } from "react";
import { useNavigate } from "../node_modules/react-router-dom/index";
import BoardArticle from "./BoardArticle";
import PageLink from "./PageLink";

const BoradList = ({
  boardlist,
  actionmode,
  handlelist,
  handledetail,
  handleupdateform,
  handlepage,
  pagelink,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    handlelist();
  }, []);

  const handleLogout = () => {
    window.sessionStorage.clear();
    navigate("/");
  };

  if (boardlist.boardList.length === 0) {
    return (
      <div>
        <table width="700px" border="1" align="center">
          <thead>
            <tr>
              <th width="60">번호</th>
              <th width="240">제목</th>
              <th width="100">작성자</th>
              <th width="100">작성일</th>
              <th width="200">
                수정/삭제
                <input
                  type="button"
                  value="로그아웃"
                  onClick={handleLogout}
                ></input>
              </th>
            </tr>
          </thead>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <table width="700px" border="1" align="center">
          <thead>
            <tr>
              <th width="60">번호</th>
              <th width="240">제목</th>
              <th width="100">작성자</th>
              <th width="100">작성일</th>
              <th width="200">
                수정/삭제 수정/삭제
                <input
                  type="button"
                  value="로그아웃"
                  onClick={handleLogout}
                ></input>
              </th>
            </tr>
          </thead>
          <tbody>
            {boardlist.boardList.map((article) => {
              return (
                <BoardArticle
                  actionmode={actionmode}
                  article={article}
                  key={article.board_num}
                  handlelist={handlelist}
                  handledetail={handledetail}
                  handleupdateform={handleupdateform}
                />
              );
            })}
          </tbody>
        </table>
        <table align="center">
          <tr>
            <td align="center">
              {pagelink.map((page) => {
                return (
                  <PageLink page={page} key={page} handlepage={handlepage} />
                );
              })}
            </td>
          </tr>
        </table>
      </div>
    );
  }
};

export default BoradList;
