import React, { useEffect, useState } from "react";
import "./style.css";
import { useRecoilState, useSetRecoilState } from "recoil";
import { selDoctor } from "../../../atoms/접수_수납/Recoils_접수_수납";
import { OBTButton, OBTComplete } from "luna-orbit";
import { getPatientList } from "../../../utils/Api/접수/ApiService_접수";
import {
  patientListDB,
  selPatientDB,
  selRegiDB,
} from "../../../atoms/접수_수납/Recoils_접수_수납DB";
import { IPatient } from "../../../types/접수/Interface_접수";
import { calcAge } from "../../../utils/Calc/aboutUser";
import patientInfoIcon from "./PatientInfo_ICON.png";
import loupe from "./loupe.png";
import undo from "./undo.png";
function PatientSearchBar() {
  // 검색된 환자 리스트 DB
  const [filterPatientListDB, setFilterPatientListDB] = useRecoilState<
    IPatient[] | undefined
  >(patientListDB);
  // 선택된 접수
  const [selectedRegister, setSelectedRegister] = useRecoilState<
    any | undefined
  >(selRegiDB);
  // 선택된 환자 정보 DB
  const [selectedPatientDB, setSelectedPatientDB] = useRecoilState<
    IPatient | undefined
  >(selPatientDB);
  // 검색창 상태
  const [searchKeyword, setSerachKeyword] = useState("");

  // 선택된 진료의 상태
  const setSelectedDoctor = useSetRecoilState(selDoctor);

  const handleSearchChange = (event) => {
    setSerachKeyword(event.target.value);
  };

  const searchData = (keyword) => {
    return new Promise(async (resolve, reject) => {
      // let tempPatientList = JSON.parse(JSON.stringify(filterPatientListDB));
      // let result = tempPatientList.filter(isMatch(keyword));
      let result = await getPatientList(keyword);
      setFilterPatientListDB(result);
      resolve(result);
    });
  };
  // const isMatch = (keyword) => {
  //   return (value) => {
  //     let result =
  //       value['pid'].indexOf(keyword) !== -1 ||
  //       value['pt_nm'].indexOf(keyword) !== -1 ||
  //       value['pt_frrn'].indexOf(keyword) !== -1;
  //     return result;
  //   };
  // };
  const handleSearch = (keyword) => {
    return searchData(keyword);
  };
  const getDataInfo = () => {
    return {
      columnWidths: ["100%", "100%", "100%"],
      itemInfo: [
        {
          key: "pid",
          column: 0,
          isKeyValue: true,
        },
        {
          key: "pt_nm",
          column: 1,
        },
        {
          key: "pt_frrn",
          column: 2,
        },
      ],
    };
  };

  const initSelectedPatient = () => {
    setSerachKeyword("");
    setSelectedPatientDB(undefined);
    setSelectedDoctor("first");
    setSelectedRegister(undefined);
  };

  // const getPatients = async(keyword) => {
  //   let dbPatientList = await getPatientList(keyword);
  //   setFilterPatientListDB(dbPatientList);
  // };
  // 나이 계산하기
  // const calcAge = (birth) => {
  //   let age = parseInt(String(new Date().getFullYear())) - parseInt(birth.substring(0,4)) + 1;
  //   return age;
  // };

  // Hook
  useEffect(() => {
    // 전체 환자를 가져오는건 아니라 취소
    // const getPatients = async() => {
    //   let dbPatientList = await getPatientList();
    //   setFilterPatientListDB(dbPatientList);
    // };
    // getPatients();
  }, []);

  useEffect(() => {
    // if(searchKeyword.length >= 2){
    //   getPatients(searchKeyword);
    // }
    if (filterPatientListDB) {
      let selPatient = filterPatientListDB.find((patient) => {
        if (patient.pid === searchKeyword) {
          return true;
        }
      });
      if (selPatient) {
        setSelectedPatientDB(selPatient);
      }
    }
  }, [searchKeyword]);
  return (
    <div className="PatientSearchBar">
      {/* 환자 정보 창 */}
      <div className="PatientSearchBar_PatientInfo">
        {selectedPatientDB !== undefined ? (
          <div className="PatientSearchBar_PatientInfo_info">
            <div className="PatientSearchBar_PatientInfo_info_icon">
              <img
                src={patientInfoIcon}
                alt="환자아이콘"
                width="20px"
                height="20px"
              />
            </div>
            <div className="PatientSearchBar_PatientInfo_info_name">
              {selectedPatientDB.pt_nm}
            </div>
            <div className="PatientSearchBar_PatientInfo_info_id">
              no.{selectedPatientDB.pid}
            </div>
            <div className="PatientSearchBar_PatientInfo_info_sexAge">
              ({selectedPatientDB.sex_cd}&#47;{calcAge(selectedPatientDB.dobr)}
              세)
            </div>
            {/* <div className="PatientSearchBar_PatientInfo_info_birth">{selectedPatientDB.pt_frrn}</div> */}
            <div className="PatientSearchBar_PatientInfo_info_detail">
              <OBTButton
                labelText={"감염정보 " + 3}
                width="90px"
                type="small"
                // style={{ backgroundColor:'white', width: '60px', color: 'black', border: '1px solid #0a0a0a', borderRadius: '13px', fontSize: 1, padding: 0 }}
              />
            </div>
            <div className="PatientSearchBar_PatientInfo_info_detail">
              <OBTButton
                labelText={"알러지 정보" + " Y"}
                width="90px"
                type="small"
                // style={{backgroundColor:'white', width: '70px', color: 'black', border: '1px solid #0a0a0a', borderRadius: '13px', fontSize: 1, padding: 0 }}
              />
            </div>
            <div
              style={{
                borderRight: "black 1px solid",
                width: 3,
                paddingRight: 1,
              }}
            >
              &nbsp;
            </div>
          </div>
        ) : (
          false
        )}
      </div>
      {/* 환자검색 (상세검색) 및 초기화 */}
      <div className="PatientSearchBar_SearchBox">
        <div className="PatientSearchBar_SearchBox_searchBox">
          {/* 환자 검색부분  */}
          <OBTComplete
            value={searchKeyword}
            onChange={handleSearchChange}
            onSearch={handleSearch}
            dataInfo={getDataInfo()}
            placeHolder="환자검색"
            // style={{ display: 'inline-block', width: '150px', height: '', boxSizing: 'content-box' }}
          />
          <img
            src={loupe}
            alt="search"
            width="15px"
            height="15px"
            style={{ position: "absolute", left: 1690, top: 18 }}
          />
        </div>
        <div className="PatientSearchBar_SearchBox_searchBtn">
          {/* 환자 상세검색  */}
          <OBTButton labelText="상세검색" width="70px" />
        </div>
        <div className="PatientSearchBar_SearchBox_initBtn">
          {/* 환자 초기화부분 */}
          <OBTButton
            labelText={"초기화"}
            width="80px"
            onClick={initSelectedPatient}
            imageUrl={undo}
          />
        </div>
      </div>
    </div>
  );
}
export default PatientSearchBar;
