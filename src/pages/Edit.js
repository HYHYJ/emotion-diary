import { useSearchParams } from "react-router-dom";

const Edit = () => {
  // ✏️useSearchParams :배열을 반환한다.
  const [searchParams, setsearchParams] = useSearchParams();
  //✏️get을 써서 전달받은 쿼리 스크링을 전달 받을 수 있다.
  const id = searchParams.get("id");
  console.log(id);

  const mode = searchParams.get("mode");
  console.log(mode);
  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지 입니다.</p>
      {/* ✏️setsearchParams로 주소값 바꾸기*/}
      <button onClick={() => setsearchParams({ who: "winterlood" })}>
        QS바꾸기
      </button>
    </div>
  );
};

export default Edit;
