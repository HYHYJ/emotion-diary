import { useEffect, useState } from "react";

const sortOPtionList = [
  { value: "lastest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const filterOptionList = [
  { value: "all", name: "전부다" },
  { value: "good", name: "좋은 감정만" },
  { value: "bad", name: "안좋은 감정만" },
];

const ControlMenu = ({ value, onChage, optionList }) => {
  return (
    <select value={value} onChange={(e) => onChage(e.target.value)}>
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  const [sortType, setSortType] = useState("lastest");
  const [filter, setFilter] = useState("all");

  const getProcessdDiaryList = () => {
    const filterCallBack = (item) => {
      if (filter === "good") {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };
    const compare = (a, b) => {
      if (sortType === "lastest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };
    //배열 깊은 복사
    const copyList = JSON.parse(JSON.stringify(diaryList));

    const filterList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));
    const sortedList = filterList.sort(compare);
    return sortedList;
  };
  return (
    <div>
      <ControlMenu
        value={sortType}
        onChage={setSortType}
        optionList={sortOPtionList}
      />
      <ControlMenu
        value={filter}
        onChage={setFilter}
        optionList={filterOptionList}
      />
      {getProcessdDiaryList().map((it) => (
        <div key={it.id}>
          {it.content} {it.emotion}
        </div>
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
