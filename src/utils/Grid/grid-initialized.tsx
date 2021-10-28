import { OBTListGridInterface } from "luna-orbit";
import moment from "moment";
import { StandardDesign } from "luna-orbit/OBTDataGrid/OBTDataGridInterface";
import {
  getRegisterListByDate,
} from "../Api/접수/ApiService_접수";

export const initializeRegiGrid = () => {
  const grid = new OBTListGridInterface("grid", {
    useEmptySet: true, //초기 데이터 없는 경우, 조회 데이터 없는 경우 emptySet 표시 여부 → default : true
    emptyDataMsg: "데이터가 없습니다.", //초기 데이터 없는 경우 안내 문구 설정 → default : 데이터가 존재하지 않습니다.
    emptySearchMsg: "검색 결과가 없습니다.", //조회 데이터 없는 경우 안내 문구 설정 → default : 검색 결과가 없습니다.
    editable: false,
    indicator: true,
    eachRowResizable: false,
    columnMovable: false,
    columnResizable: false,
  })
    .setColumns([
      {
        name: "pid",
        header: "환자번호",
        type: "text",
        width: 40,
        alignment: "center",
        visible: false,
      },
      {
        name: "rcpn_sqno",
        header: "등록번호",
        type: "text",
        width: 40,
        alignment: "center",
      },
      {
        name: "pt_nm",
        header: "이름",
        type: "text",
        width: 40,
        alignment: "center",
      },
      {
        name: "mcrm_cd",
        header: "진료실",
        type: "text",
        width: 30,
        alignment: "center",
      },
      {
        name: "user_nm",
        header: "진료의",
        type: "text",
        width: 40,
        alignment: "center",
      },
      {
        name: "mdcr_hm",
        header: "진료시",
        type: "text",
        width: 40,
        alignment: "center",
      },
      {
        name: "pt_arvl_dt",
        header: "접수시",
        type: "text",
        width: 50,
        alignment: "center",
      },
      {
        name: "rcpn_stat",
        header: "상태",
        type: "text",
        width: 70,
        alignment: "center",
        useImageLabel: true,
        imageLabelBackgroundColor: (value) => {
          if (value === "예약") {
            return '#a708f1';
          } else if (value === "접수") {
            return '#02b4fa';
          } else if (value === "진료중") {
            return StandardDesign.MessageColorRGB.inProgress;
          } else if (value === "수납대기") {
            return StandardDesign.MessageColorRGB.pending1;
          } else if (value === "완료") {
            return StandardDesign.MessageColorRGB.neutral;
          } else if (value === "취소") {
            return StandardDesign.MessageColorRGB.negative1;
          } else if (value === "보류") {
            return StandardDesign.MessageColorRGB.negative2;
          } 
          return StandardDesign.MessageColorRGB.pending2;
        },
      },
              // maskType: "custom",
        // editMask: "string",
        // customMaskCallback: (value) => {
        //   if (value === "V") {
        //     return "예약";
        //   } else if (value === "R") {
        //     return "접수";
        //   } else if (value === "M") {
        //     return "진료중";
        //   } else if (value === "T") {
        //     return "수납대기";
        //   } else if (value === "D") {
        //     return "완료";
        //   } else if (value === "C") {
        //     return "취소";
        //   } else if (value === "W") {
        //     return "보류";
        //   } else {
        //     return "알수없는값"
        //   }
        // },
    ])
    .setProvider({
      // 데이터 관련 interface 사용 → * Interface 속성 참고 *
      read: (e) => {
        return new Promise((resolve) => {
          resolve([]);
        });
      },
      readPage: (e) => {
        return new Promise(async (resolve) => {
          resolve(getRegisterList(new Date()));
        });
      },
    });
  return grid;
}
// 접수 목록 Grid API
const getRegisterList = async (startDate) => {
  let data = await getRegisterListByDate(
    moment(startDate).format("YYYYMMDD")
  );
  console.log("first data", data)
  return data;
}
// 신체사정 Grid API
// const getVitalList = async (pid) => {
//   let result = await getVitalPatientLists(pid);
//   return result;
// };
export function initializeVitalGrid(): any {
  // console.log("init: db:", registerListForDB);
  const grid = new OBTListGridInterface("grid", {
    useEmptySet: true, //초기 데이터 없는 경우, 조회 데이터 없는 경우 emptySet 표시 여부 → default : true
    emptyDataMsg: "데이터가 없습니다.", //초기 데이터 없는 경우 안내 문구 설정 → default : 데이터가 존재하지 않습니다.
    emptySearchMsg: "검색 결과가 없습니다.", //조회 데이터 없는 경우 안내 문구 설정 → default : 검색 결과가 없습니다.
    editable: true,
    appendable: true,
    indicator: false,
    headerCheckVisible: true,
    eachRowResizable: false,
    columnMovable: false,
    columnResizable: false,
  })
    .setColumns([
      // 컬럼을 설정 → * IColumn 속성 참고 *
      {
        name: "inpt_dt",
        header: "입력일",
        type: "text",
        width: 45,
        alignment: "center",
      },
      {
        name: "sbp",
        header: "혈압",
        type: "number",
        width: 30,
        alignment: "center",
      },
      {
        name: "pr",
        header: "맥박",
        type: "number",
        width: 30,
        alignment: "center",
      },
      {
        name: "rr",
        header: "호흡",
        type: "number",
        width: 30,
        alignment: "center",
      },
      {
        name: "bt",
        header: "체온",
        type: "text",
        width: 30,
        alignment: "center",
      },
      {
        name: "fbs",
        header: "혈당",
        type: "number",
        width: 30,
        alignment: "center",
      },
      {
        name: "hght",
        header: "신장",
        type: "number",
        width: 30,
        alignment: "center",
      },
      {
        name: "wght",
        header: "체중",
        type: "number",
        width: 30,
        alignment: "center",
      },
      {
        name: "bmi",
        header: "BMI",
        type: "text",
        width: 30,
        alignment: "center",
      },
    ])
    .setProvider({
      // 데이터 관련 interface 사용 → * Interface 속성 참고 *
      read: (e) => {
        return new Promise((resolve) => {
          resolve([]);
        });
      },
      readPage: (e) => {
        return new Promise(async (resolve) => {
          resolve([]);
        });
      },
    });
  return grid;
}

// 내원 이력 그리드
export function initializeVisitGrid(): any {
  // console.log("init: db:", registerListForDB);
  const grid = new OBTListGridInterface("grid", {
    useEmptySet: true, //초기 데이터 없는 경우, 조회 데이터 없는 경우 emptySet 표시 여부 → default : true
    emptyDataMsg: "데이터가 없습니다.", //초기 데이터 없는 경우 안내 문구 설정 → default : 데이터가 존재하지 않습니다.
    emptySearchMsg: "검색 결과가 없습니다.", //조회 데이터 없는 경우 안내 문구 설정 → default : 검색 결과가 없습니다.
    editable: true,
    appendable: true,
    indicator: false,
    eachRowResizable: false,
    columnMovable: false,
    columnResizable: false,
  })
    .setColumns([
      // 컬럼을 설정 → * IColumn 속성 참고 *
      {
        name: "inpt_dt",
        header: "진료일",
        type: "text",
        width: 30,
        alignment: "center",
      },
      {
        name: "sbp",
        header: "진료시간",
        type: "number",
        width: 30,
        alignment: "center",
      },
      {
        name: "pr",
        header: "진료과",
        type: "number",
        width: 30,
        alignment: "center",
      },
      {
        name: "rr",
        header: "진료의",
        type: "number",
        width: 30,
        alignment: "center",
      },
      {
        name: "bt",
        header: "수납",
        type: "text",
        width: 30,
        alignment: "center",
      },
      {
        name: "fbs",
        header: "미수금",
        type: "number",
        width: 30,
        alignment: "center",
      },
      {
        name: "hght",
        header: "보험구분",
        type: "number",
        width: 30,
        alignment: "center",
      },
      {
        name: "wght",
        header: "보험보조유형",
        type: "number",
        width: 30,
        alignment: "center",
      },
      {
        name: "bmi",
        header: "주상병코드",
        type: "text",
        width: 30,
        alignment: "center",
      },
      {
        name: "bmi",
        header: "특정기호",
        type: "text",
        width: 30,
        alignment: "center",
      },
      {
        name: "bmi",
        header: "처방내역",
        type: "text",
        width: 30,
        alignment: "center",
      },
    ])
    .setProvider({
      // 데이터 관련 interface 사용 → * Interface 속성 참고 *
      read: (e) => {
        return new Promise((resolve) => {
          resolve([]);
        });
      },
      readPage: (e) => {
        return new Promise(async (resolve) => {
          resolve([]);
        });
      },
    });
  return grid;
}

// 처방조회 그리드
export function initializePresGrid(): any {
  // console.log("init: db:", registerListForDB);
  const grid = new OBTListGridInterface("grid", {
    useEmptySet: true, //초기 데이터 없는 경우, 조회 데이터 없는 경우 emptySet 표시 여부 → default : true
    emptyDataMsg: "데이터가 없습니다.", //초기 데이터 없는 경우 안내 문구 설정 → default : 데이터가 존재하지 않습니다.
    emptySearchMsg: "검색 결과가 없습니다.", //조회 데이터 없는 경우 안내 문구 설정 → default : 검색 결과가 없습니다.
    editable: true,
    appendable: true,
    indicator: false,
    headerCheckVisible: true,
    eachRowResizable: false,
    columnMovable: false,
    columnResizable: false,
    checkable: true,
  })
    .setColumns([
      // 컬럼을 설정 → * IColumn 속성 참고 *
      {
        name: "inpt_dt",
        header: "수납",
        type: "text",
        width: 30,
        alignment: "center",
      },
      {
        name: "sbp",
        header: "실시여부",
        type: "number",
        width: 30,
        alignment: "center",
      },
      {
        name: "pr",
        header: "D/C",
        type: "number",
        width: 30,
        alignment: "center",
      },
      {
        name: "rr",
        header: "처방코드",
        type: "number",
        width: 30,
        alignment: "center",
      },
      {
        name: "bt",
        header: "처방명",
        type: "text",
        width: 30,
        alignment: "center",
      },
      {
        name: "fbs",
        header: "용법",
        type: "number",
        width: 30,
        alignment: "center",
      },
      {
        name: "hght",
        header: "일수",
        type: "number",
        width: 30,
        alignment: "center",
      },
      {
        name: "wght",
        header: "횟수",
        type: "number",
        width: 30,
        alignment: "center",
      },
      {
        name: "bmi",
        header: "AST",
        type: "text",
        width: 30,
        alignment: "center",
      },
      {
        name: "bmi",
        header: "원외",
        type: "text",
        width: 30,
        alignment: "center",
      },
    ])
    .setProvider({
      // 데이터 관련 interface 사용 → * Interface 속성 참고 *
      read: (e) => {
        return new Promise((resolve) => {
          resolve([]);
        });
      },
      readPage: (e) => {
        return new Promise(async (resolve) => {
          resolve([]);
        });
      },
    });
  return grid;
}
