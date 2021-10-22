import React, { useState } from "react";
import ButtonGroupByLee from "../common_component/ButtonGroupByLee";
import SpecialCalcInfo from "./산정특례";
import GeneralInfo from "./일반";
import DisabledInfo from "./장애인정보";
function PatientExtendTable() {
  const [selectedExtend, setSelectedExtend] = useState(1);
  const [eInfo, setEInfo] = useState({

  });
  const clickHandler = (value) => {
    setSelectedExtend(value);
  };
  // 추가정보 버튼 상태
  const [eBtns,setEBtns] = useState();
  return (
    <div className="PatientQualificationTable">
      <div className="PatientQualificationTable_header">추가정보</div>
      <div className="PatientQualificationTable_menu">
        <ButtonGroupByLee 
          btnList={["일반","산정특례","장애인정보"]}
          clickBtn={eBtns}
          setClickBtn={setEBtns}
        />
      </div>
      <div className="PatientQualificationTable_content">
      {eBtns === "장애인정보"?
         <DisabledInfo/> : (eBtns === "산정특례" ? <SpecialCalcInfo/> : <GeneralInfo/>)}
      </div>
    </div>
  );
}
export default PatientExtendTable;
