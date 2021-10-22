import { useEffect } from "react";
import style from "./style.module.css";

function ButtonGroupByLee(props) {
  const {btnList, clickBtn, setClickBtn} = props;
  useEffect(() => {
    setClickBtn(btnList[0]);
  },[])
  return (
    <>
      {btnList.map((btn)=>{
        return(
          <button 
            className={btn===clickBtn? `${style.normal} ${style.clicked}` : `${style.normal}`}
            onClick={()=>{
              setClickBtn(btn)
            }}
          >
            {btn}
          </button>
        );
      })}
    </>
  );
};
export default ButtonGroupByLee;