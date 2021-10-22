import React, { useState } from "react";
import ButtonGroupByLee from "../common_component/ButtonGroupByLee";
import "./style.css";
import HealthInsurance from "./건강보험&의료급여";
import IndustrialInsurance from "./산재보험";
import CarInsurance from "./자동차보험";
function PatientQualificationTable() {
  const [selectedQualification, setSelectedQualification] = useState(1);
  const [Qinfo, setQInfo] = useState({

  });
  const clickHandler = (value) => {
    setSelectedQualification(value);
  };
  // 자격정보 버튼 상태
  const [qBtns,setQBtns] = useState();
  return (
    <div className="PatientQualificationTable">
      <div className="PatientQualificationTable_header">자격정보</div>
      <div className="PatientQualificationTable_menu">
        <ButtonGroupByLee 
          btnList={["건강보험/의료급여","산재보험","자동차보험"]}
          clickBtn={qBtns}
          setClickBtn={setQBtns}
        />
      </div>
      <div className="PatientQualificationTable_content">
        {qBtns === "자동차보험"?
         <CarInsurance/> : (qBtns === "산재보험" ? <IndustrialInsurance/> : <HealthInsurance/>)}
      </div>
    </div>
  );
}
export default PatientQualificationTable;
