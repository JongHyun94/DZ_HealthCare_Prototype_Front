import {
  OBTListGrid,
} from "luna-orbit";
import { useEffect } from "react";
import { useState } from "react";
import * as React from "react";
import { useRecoilValue } from "recoil";
import { selPatientDB } from "../../../atoms/접수_수납/Recoils_접수_수납DB";
import { initializeVisitGrid } from "../../../utils/Grid/grid-initialized";
import "./style.css";

function PatientVisitHistory() {

  const selectedPatient = useRecoilValue(selPatientDB);

  const [visitGrid, setVisitGrid] = useState(() => initializeVisitGrid());
  
  const changeHandler = () => {};

  useEffect(() => {
    visitGrid.readData();
  },[]);
  
  useEffect(() => {
    if(selectedPatient){
      visitGrid.setProvider({
        read: () => {
          return new Promise((resolve) => {
            resolve([]);
          });
        },
        readPage: () => {
          return new Promise(async (resolve) => {
            resolve([]);
          })
        }
      });
      visitGrid.readData();
    }
  },[selectedPatient]);

  return (
    <>
      <div className="PatientVisitHistory_header">
        내원이력
      </div>
      <div className="PatientVisitHistory_content">
        <OBTListGrid 
          height="220px" 
          interface={visitGrid} 
          onChange={()=>changeHandler()}
        />
      </div>
    </>
  );
};
export default PatientVisitHistory;
