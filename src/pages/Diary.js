//라이브러리가 만든 사용자정의 커스텀 훅스
import { useParams } from "react-router-dom";

const Diary = () => {
  // ✏️패스 베리어블(id)을 꺼내쓸수있음
  // ✏️페이지 번호가 1 이면 1을 꺼냄
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Diary</h1>
      <p>이곳은 일기 상세 페이지 입니다.</p>
    </div>
  );
};

export default Diary;
