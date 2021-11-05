import { OBTListGrid } from "luna-orbit";
import { useEffect } from "react";
import { useState } from "react";
import * as React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  selPatientDB,
  selRegiDB,
} from "../../../atoms/접수_수납/Recoils_접수_수납DB";
import { initializePresGrid } from "../../../utils/Grid/grid-initialized";
import "./style.css";
import docIcon from "./docIcon.png";

function PrescriptionInquiry() {
  const selectedPatient = useRecoilValue(selPatientDB);
  // 선택된 접수
  const selectedRegister = useRecoilValue<any | undefined>(selRegiDB);
  const [presGrid] = useState(() => initializePresGrid());

  const [presStat, setPresStat] = useState("p");

  const selectState = (stat) => {
    setPresStat(stat);
  };

  const changeHandler = () => {};

  useEffect(() => {
    presGrid.readData();
  }, []);

  useEffect(() => {
    if (selectedRegister) {
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
  }, [selectedRegister]);

  useEffect(() => {
    if (selectedRegister) {
      if (presStat === "p") {
        presGrid.setProvider({
          read: () => {
            return new Promise((resolve) => {
              resolve([]);
            });
          },
          readPage: () => {
            return new Promise(async (resolve) => {
              resolve([
                {
                  inpt_dt: "Y",
                  sbp: "",
                  pr: "Y",
                  rr: "D3022",
                  bt: "토브라마이신주 250mg",
                  fbs: "PO",
                  hght: 1,
                  wght: 3,
                  ast: "1.5",
                  bmi: "원내",
                },
                {
                  inpt_dt: "Y",
                  sbp: "",
                  pr: "Y",
                  rr: "D3022",
                  bt: "앨도신캡슐 1정",
                  fbs: "PO",
                  hght: 28,
                  wght: 3,
                  ast: "1.5",
                  bmi: "원외",
                },
                {
                  inpt_dt: "Y",
                  sbp: "",
                  pr: "Y",
                  rr: "D3022",
                  bt: "프로르에어프캡슐 500mg",
                  fbs: "PO",
                  hght: 1,
                  wght: 3,
                  ast: "1.5",
                  bmi: "원내",
                },
              ]);
            });
          },
        });
        presGrid.readData();
      } else if (presStat === "i") {
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
      } else if (presStat === "e") {
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
    } else if (selectedRegister === undefined){
      presGrid.clearData();
    }
  }, [presStat, selectedRegister]);

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
