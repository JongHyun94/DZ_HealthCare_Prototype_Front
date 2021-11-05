import { OBTListGrid } from "luna-orbit";
import { useEffect } from "react";
import { useState } from "react";
import * as React from "react";
import { useRecoilValue } from "recoil";
import { selPatientDB, selRegiDB } from "../../../atoms/접수_수납/Recoils_접수_수납DB";
import { initializeVisitGrid } from "../../../utils/Grid/grid-initialized";
import "./style.css";
import docIcon from "./docIcon.png";

function PatientVisitHistory() {
  //const selectedPatient = useRecoilValue(selPatientDB);
  // 선택된 접수
  const selectedRegister = useRecoilValue<any | undefined>(selRegiDB);
  // 선택된 환자
  const selectedPatient = useRecoilValue<any | undefined>(selPatientDB);
  const [visitGrid, setVisitGrid] = useState(() => initializeVisitGrid());

  const changeHandler = () => {};

  useEffect(() => {
    visitGrid.readData();
  }, []);

  useEffect(() => {
    if (selectedPatient !== undefined) {
      visitGrid.setProvider({
        read: () => {
          return new Promise((resolve) => {
            resolve([]);
          });
        },
        readPage: () => {
          return new Promise(async (resolve) => {
            resolve([
              {
                a: "21-09-19",
                b: "13:45",
                c: "내과",
                d: "김의사",
                e: "Y",
                f: 53000,
                g: "건보",
                h: "일반",
                i: "E119",
                j: "당뇨",
                k: "-",
                l: "",
              },
              {
                a: "21-08-20",
                b: "13:45",
                c: "이비인후과",
                d: "김의사",
                e: "Y",
                f: 12000,
                g: "건보",
                h: "일반",
                i: "E119",
                j: "만성 중이염",
                k: "-",
                l: "",
              },
              {
                a: "21-07-20",
                b: "13:45",
                c: "이비인후과",
                d: "김의사",
                e: "Y",
                f: 0,
                g: "건보",
                h: "일반",
                i: "E119",
                j: "상세불명의 급성 상기도감염",
                k: "-",
                l: "",
              },
              {
                a: "21-05-20",
                b: "13:45",
                c: "이비인후과",
                d: "김의사",
                e: "Y",
                f: 0,
                g: "건보",
                h: "일반",
                i: "E119",
                j: "상세불명의 급성 상기도감염",
                k: "-",
                l: "",
              },
              {
                a: "21-02-20",
                b: "13:45",
                c: "이비인후과",
                d: "김의사",
                e: "Y",
                f: 0,
                g: "건보",
                h: "일반",
                i: "E119",
                j: "상세불명의 급성 상기도감염",
                k: "-",
                l: "",
              },
            ]);
          });
        },
      });
      visitGrid.readData();
    } else if (selectedPatient === undefined){
      visitGrid.clearData();
    }
  }, [selectedPatient]);

  return (
    <>
      <div className="PatientVisitHistory_header">
        <div className="PatientVisitHistory_header_icon">
          <img src={docIcon} alt="icon" width="20px" height="20px" />
        </div>
        <div className="PatientVisitHistory_header_content">내원이력</div>
      </div>
      <div className="PatientVisitHistory_content">
        <OBTListGrid
          height="215px"
          interface={visitGrid}
          onChange={() => changeHandler()}
        />
      </div>
    </>
  );
}
export default PatientVisitHistory;
