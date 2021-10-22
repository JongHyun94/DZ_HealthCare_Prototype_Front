import "./style.css";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  OBTComplete,
  OBTDatePicker,
  OBTButton,
  OBTDropDownList2,
} from "luna-orbit";
import { IPatient } from "../../../types/접수/Interface_접수";
import {
  patientListDB,
  regiListDB,
  regiStartDate,
  selPatientDB,
} from "../../../atoms/접수_수납/Recoils_접수_수납DB";
import { OBTListGrid } from "luna-orbit";
import { getRegisterListByDate } from "../../../utils/Api/접수/ApiService_접수";
import moment from "moment";
import { initializeRegiGrid } from "../../../utils/Grid/grid-initialized";
import { ReadPageEventArgs } from "../../../../../luna-orbit/OBTListGrid/OBTListGridEvents";

function RegistList() {
  // const [registerListForDB, setRegisterListForDB] = useState([]);
  const [registerListForDB, setRegisterListForDB] = useRecoilState(regiListDB);

  const setSelectedPatient = useSetRecoilState(selPatientDB);

  const [startDate, setStartDate] = useRecoilState(regiStartDate);

  const [regiState, setRegiState] = useState("");

  // 선택된 버튼 상태
  const [selectedBtn, setSelectedBtn] = useState("");

  const [regiCount, setRegiCount] = useState({
    V: 0,
    R: 0,
    M: 0,
    T: 0,
    D: 0,
    C: 0,
    W: 0,
  });

  const [searchCondition, setSearchCondition] = useState("");

  // const goToday = () => {
  //   setStartDate(new Date());
  // };

  const countRegisterState = (list) => {
    let count: number[] = [0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < list.length; i++) {
      // 예약
      if (list[i].rcpn_stat_cd === "V") {
        count[0]++;
      } else if (list[i].rcpn_stat_cd === "R") {
        count[1]++;
      } else if (list[i].rcpn_stat_cd === "M") {
        count[2]++;
      } else if (list[i].rcpn_stat_cd === "T") {
        count[3]++;
      } else if (list[i].rcpn_stat_cd === "D") {
        count[4]++;
      } else if (list[i].rcpn_stat_cd === "C") {
        count[5]++;
      } else if (list[i].rcpn_stat_cd === "W") {
        count[6]++;
      } else {
        continue;
      }
    }
    setRegiCount({
      ...regiCount,
      V: count[0],
      R: count[1],
      M: count[2],
      T: count[3],
      D: count[4],
      C: count[5],
      W: count[6],
    });
  };
  const getRegisterList = async (startDate) => {
    console.log("startDate: ",startDate);
    let data = await getRegisterListByDate(
      moment(startDate).format("YYYYMMDD")
    );
    console.log("dbData: ",data)
    // let data = await getRegisterListByDateAndState(moment(startDate).format("YYYYMMDD"), regiState)
    setRegisterListForDB(data);
    countRegisterState(data);
    return data;
  };

  const getSortingStateList = (state) => {
    if (state === "") {
      return registerListForDB;
    } else {
      let CopyList = JSON.parse(JSON.stringify(registerListForDB));
      let sortingList = CopyList.filter((item) => {
        if (item.rcpn_stat_cd === state) {
          return item;
        }
      });
      console.log("sort: ", sortingList);
      return sortingList;
    }
  };
  // 검색된 환자 리스트
  //const [filterPatientList, setFilterPatientList] = useRecoilState(patientList);
  // 검색된 환자 리스트 DB
  const [filterPatientListDB, setFilterPatientListDB] = useRecoilState<
    IPatient[] | undefined
  >(patientListDB);

  const [searchKeyword, setSerachKeyword] = useState("");

  const handleSearchChange = (event) => {
    setSerachKeyword(event.target.value);
  };

  const searchData = (keyword) => {
    return new Promise((resolve, reject) => {
      console.log(filterPatientListDB);
      let tempPatientList = JSON.parse(JSON.stringify(filterPatientListDB));
      let result = tempPatientList.filter(isMatch(keyword));
      resolve(result);
    });
  };
  const isMatch = (keyword) => {
    return (value) => {
      let result =
        value["pid"].indexOf(keyword) !== -1 ||
        value["pt_nm"].indexOf(keyword) !== -1 ||
        value["pt_frrn"].indexOf(keyword) !== -1;
      return result;
    };
  };
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

  const [regiGrid, setRegiGrid] = useState(() => initializeRegiGrid());

  regiGrid.onClicked.add((e) => {
    console.log("click event", e.values.pid);
    if (filterPatientListDB) {
      let selPatient = filterPatientListDB.find((person) => {
        if (person.pid === e.values.pid) {
          return true;
        }
        else{
          return false;
        }
      });
      console.log("선택된 환자: ", selPatient);
      setSelectedPatient(selPatient);
    }
  });

  const changeHandler = () => {};

  const getTotalRegisters = (key) => {
    setSelectedBtn(key);
    setRegiState(key);
  };

  // Hook
  useEffect(() => {
    console.log("first []")
    let data = getRegisterList(startDate);

    regiGrid.readData({
      readPageCallback(e: ReadPageEventArgs): Promise<any[] | null | undefined> {
          return Promise.resolve(data);
      }
  }
);
    countRegisterState(registerListForDB);
  }, []);

  useEffect(() => {
    regiGrid.setProvider({
      read: () => {
        return new Promise((resolve) => {
          resolve([]);
        });
      },
      readPage: () => {
        return new Promise(async (resolve) => {
          resolve(getRegisterList(startDate));
        });
      },
    });
    regiGrid.readData();
    setRegiState("");
    setSelectedBtn("");
  }, [startDate]);

  useEffect(() => {
    regiGrid.setProvider({
      read: () => {
        return new Promise((resolve) => {
          resolve([]);
        });
      },
      readPage: () => {
        return new Promise(async (resolve) => {
          resolve(getSortingStateList(regiState));
        });
      },
    });
    regiGrid.readData();
  }, [regiState]);

  return (
    <div className="RegistList">
      {/* 접수목록 제목 + 검색 옵션 */}
      <div className="RegistList_header">
        {/* 제목 */}
        <div className="RegistList_header_1">
          접수목록
          <OBTButton
            labelText="데이터 검색"
            onClick={() => {
              regiGrid.searchData(0, null, "13", true, false);
              if (filterPatientListDB) {
                let selPatient = filterPatientListDB.find((person) => {
                  if (person.pid === "17110023") {
                    return true;
                  }
                });
                console.log("선택된 환자: ", selPatient);
                setSelectedPatient(selPatient);
              }
            }}
          />
        </div>
        {/* yyyy-mm-dd today search */}
        <div className="RegistList_header_2">
          {/* <div className="RegistList_header_2_datepicker"> */}
          <OBTDatePicker
            value={startDate}
            onChange={(e) => setStartDate(e.value)}
            format={OBTDatePicker.Format.YYYYMMDD}
            width="150px"
            useControlButton={false}
            inputStyle={{ width: "85px" }}
            required
          />
          {/* </div> */}
          {/* <div className="RegistList_header_2_searchCondition"> */}
          {/* <OBTButton 
              labelText={"오늘"}
              onClick={goToday}/> */}
          <OBTDropDownList2
            displayType={OBTDropDownList2.DisplayType.text}
            list={[
              { value: "", text: "전체" },
              { value: "name", text: "환자이름" },
              { value: "room", text: "진료실" },
            ]}
            value={searchCondition}
            onChange={(e) => setSearchCondition(e.value)}
            width="100px"
          />
          {/* </div> */}
          {/* <div className="RegistList_header_2_complete"> */}
          <OBTComplete
            value={searchKeyword}
            onChange={handleSearchChange}
            onSearch={handleSearch}
            dataInfo={getDataInfo()}
            placeHolder="환자조회"
            width="150px"
          />
          {/* </div> */}
        </div>
        {/* filter */}
        <div className="RegistList_header_3">
          <button
            className={selectedBtn === "" ? "customBtn" : "customBtn2"}
            onClick={() => getTotalRegisters("")}
          >
            전체 {registerListForDB.length}
          </button>
          <button
            className={selectedBtn === "R" ? "customBtn" : "customBtn2"}
            onClick={() => getTotalRegisters("R")}
          >
            예약/당일 {regiCount.R}
          </button>
          <button
            className={selectedBtn === "M" ? "customBtn" : "customBtn2"}
            onClick={() => getTotalRegisters("M")}
          >
            진료 {regiCount.M}
          </button>
          <button
            className={selectedBtn === "T" ? "customBtn" : "customBtn2"}
            onClick={() => getTotalRegisters("T")}
          >
            수납대기 {regiCount.T}
          </button>
          <button
            className={selectedBtn === "D" ? "customBtn" : "customBtn2"}
            onClick={() => getTotalRegisters("D")}
          >
            완료 {regiCount.D}
          </button>
        </div>
      </div>
      {/* 접수 목록 grid 부분 */}
      <div className="RegistList_content">
        <OBTListGrid
          height="100%"
          interface={regiGrid}
          onChange={() => changeHandler()}
        />
      </div>
    </div>
  );
}

export default RegistList;
