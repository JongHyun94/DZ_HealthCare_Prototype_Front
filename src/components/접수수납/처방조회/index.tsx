import {
  OBTListGrid,
} from "luna-orbit";
import { useEffect } from "react";
import { useState } from "react";
import * as React from "react";
import { useRecoilValue } from "recoil";
import { selPatientDB } from "../../../atoms/접수_수납/Recoils_접수_수납DB";
import { initializePresGrid } from "../../../utils/Grid/grid-initialized";
import "./style.css";

function PrescriptionInquiry() {

  const selectedPatient = useRecoilValue(selPatientDB);

  const [presGrid] = useState(() => initializePresGrid());
  
  const changeHandler = () => {};

  useEffect(() => {
    presGrid.readData();
  },[]);
  
  useEffect(() => {
    if(selectedPatient){
      presGrid.setProvider({
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
      presGrid.readData();
    }
  },[selectedPatient]);

  return (
    <>
      <div className="PrescriptionInquiry_header">
        처방조회
      </div>
      <div className="PrescriptionInquiry_content">
        <OBTListGrid 
          height="220px" 
          interface={presGrid} 
          onChange={()=>changeHandler()}
        />
      </div>
    </>
  );
};
export default PrescriptionInquiry;
