import { useRef, useState } from "react";
import axios from "axios";

const BoardWrite = ({ handlelist }) => {
  const titleRef = useRef();
  const writerRef = useRef();
  const contentRef = useRef();
  const imageRef = useRef();

  const [image_name, setImage_name] = useState("");

  function onImage(e) {
    setImage_name(e.target.files[0]);
  }

  const handleInsert = (e) => {
    console.log("handleInsert =>", titleRef.current.value);
    e.preventDefault();
    if (titleRef.current.value === "" || titleRef.current.value === undefined) {
      alert("제목을 입력하세요!!!");
      titleRef.current.focus();
      return false;
    }
    if (
      writerRef.current.value === "" ||
      writerRef.current.value === undefined
    ) {
      alert("글쓴이를 입력하세요!!!");
      writerRef.current.focus();
      return false;
    }
    if (
      contentRef.current.value === "" ||
      contentRef.current.value === undefined
    ) {
      alert("내용을 입력하세요!!!");
      contentRef.current.focus();
      return false;
    }
    if (imageRef.current.value === "" || imageRef.current.value === undefined) {
      alert("이미지를 선택하세요!!!");
      return false;
    }

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    // const formData = new FormData();
    // formData.append("image", imageRef.current.value);
    // alert(formData);
    axios
      .post(
        "http://localhost:8008/insert",
        {
          title: titleRef.current.value,
          writer: writerRef.current.value,
          content: contentRef.current.value,
          image: image_name,
        },
        config
      )
      // axios({
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      //   url: "http://localhost:8008/insert", // 파일 업로드 요청 URL
      //   method: "POST",
      //   data: {
      //     title: titleRef.current.value,
      //     writer: writerRef.current.value,
      //     content: contentRef.current.value,
      //     image: image_name,
      //   },
      // })
      .then((res) => {
        console.log("handleInsert =>", res);
        handlelist();
        titleRef.current.value = "";
        writerRef.current.value = "";
        contentRef.current.value = "";
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      <form encType="multipart/form-data">
        <table border="1" width="700px" align="center">
          <tr>
            <td width="100px">제목</td>
            <td align="left" width="550px">
              <input
                type="text"
                name="title"
                size="68"
                ref={titleRef}
                placeholder="제목을 입력하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td width="100px">글쓴이</td>
            <td align="left" width="550px">
              <input
                type="text"
                name="writer"
                size="68"
                ref={writerRef}
                placeholder="글쓴이를 입력하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td align="left">
              <textarea
                rows="5"
                cols="70"
                name="content"
                ref={contentRef}
                placeholder="내용을 입력하세요"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>이미지</td>
            <td align="left">
              <input
                type="file"
                name="image"
                ref={imageRef}
                accept="image/*"
                onChange={onImage}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <input
                type="submit"
                value="글쓰기"
                onClick={handleInsert}
              ></input>
              &nbsp;
              <input type="reset" value="취소"></input>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default BoardWrite;
