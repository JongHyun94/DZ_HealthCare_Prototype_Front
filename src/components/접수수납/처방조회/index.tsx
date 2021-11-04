import { OBTListGrid } from "luna-orbit";
import { useEffect } from "react";
import { useState } from "react";
import * as React from "react";
import { useRecoilValue } from "recoil";
import { selPatientDB } from "../../../atoms/접수_수납/Recoils_접수_수납DB";
import { initializePresGrid } from "../../../utils/Grid/grid-initialized";
import "./style.css";
import docIcon from "./docIcon.png";

function PrescriptionInquiry() {
  const selectedPatient = useRecoilValue(selPatientDB);

  const [presGrid] = useState(() => initializePresGrid());

  const [presStat,setPresStat] = useState("p");

  const selectState = (stat) => {
    setPresStat(stat);
  }

  const changeHandler = () => {};

  useEffect(() => {
    presGrid.readData();
  }, []);

  useEffect(() => {
    if (selectedPatient) {
      presGrid.setProvider({
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
      presGrid.readData();
    }
  }, [selectedPatient]);

  return (
    <>
      <div className="PrescriptionInquiry_header">
        <div className="PrescriptionInquiry_header_icon">
          <img src={docIcon} alt="icon" width="20px" height="20px" />
        </div>
        <div className="PrescriptionInquiry_header_content">처방조회</div>
      </div>
      <div className="PrescriptionInquiry_btnGroup">
      <button
            className={presStat === "p" ? "customBtn" : "customBtn2"}
            onClick={() => selectState("p")}
          >
          처방 
          </button>
          <button
            className={presStat === "i" ? "customBtn" : "customBtn2"}
            onClick={() => selectState("i")}
          >
            주사
          </button>
          <button
            className={presStat === "e" ? "customBtn" : "customBtn2"}
            onClick={() => selectState("e")}
          >
            검사
            </button>
      </div>
      <div className="PrescriptionInquiry_content">
        <OBTListGrid
          height="220px"
          interface={presGrid}
          onChange={() => changeHandler()}
        />
      </div>
    </>
  );
}
export default PrescriptionInquiry;
