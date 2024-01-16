const MyButton = ({text, type, onClick})=> {

    //타입 값에 이상한 값이 들어오는 것을 막기
    const btnType = ['positive', 'negative'].includes(type)? type : "default";

    return (
        <button className={["MyButton", `MyButton_${btnType}`].join(" ")} onClick={onClick}>
            {text}
        </button>
    )
}

MyButton.defaultProps = {
    type: "default"
}

export default MyButton;