import { OBTListGrid } from "luna-orbit";
import { useEffect } from "react";
import { useState } from "react";
import * as React from "react";
import { useRecoilValue } from "recoil";
import { selPatientDB } from "../../../atoms/접수_수납/Recoils_접수_수납DB";
import { initializeVisitGrid } from "../../../utils/Grid/grid-initialized";
import "./style.css";
import docIcon from "./docIcon.png";

function PatientVisitHistory() {
  const selectedPatient = useRecoilValue(selPatientDB);

  const [visitGrid, setVisitGrid] = useState(() => initializeVisitGrid());

  const changeHandler = () => {};

  useEffect(() => {
    visitGrid.readData();
  }, []);

  useEffect(() => {
    if (selectedPatient) {
      visitGrid.setProvider({
        read: () => {
          return new Promise((resolve) => {
            resolve([]);
          });
        },
        readPage: () => {
          return new Promise(async (resolve) => {
            resolve([]);
          });
        },
      });
      visitGrid.readData();
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
          height="220px"
          interface={visitGrid}
          onChange={() => changeHandler()}
        />
      </div>
    </>
  );
}
export default PatientVisitHistory;
