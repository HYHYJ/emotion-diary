import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  // 📘Page Moving : useNavigate = Link태그 안쓰고 넘어가게하기
  const navigate = useNavigate();
  // ✏️useSearchParams :배열을 반환한다.
  const [searchParams, setsearchParams] = useSearchParams();
  //✏️get을 써서 전달받은 쿼리 스크링을 전달 받을 수 있다.
  const id = searchParams.get("id");

  const mode = searchParams.get("mode");

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지 입니다.</p>
      {/* ✏️setsearchParams로 주소값 바꾸기*/}
      <button onClick={() => setsearchParams({ who: "winterlood" })}>
        QS바꾸기
      </button>
      {/* 📘Page Moving 으로 홈페이지로 넘어간다. */}
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        HOME으로 가기
      </button>
      {/* 📘뒤로가기 버튼 : 뒤로 한번가서 -1 */}
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
