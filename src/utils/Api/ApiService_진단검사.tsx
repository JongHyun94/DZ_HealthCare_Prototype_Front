import axios from 'axios';
import { ICheckedList, IConsCheckedList, IResultCheckedList } from '../../types/Interface_진단검사';

// 진담검사 접수 API_URL
const RECEIPT_API_URL = 'http://localhost:4000/receipt';
// 위탁 의뢰 API_URL
const CONSIGNMENT_API_URL = 'http://localhost:4000/consignment';
// 진담검사 결과 API_URL
const RESULT_API_URL = 'http://localhost:4000/result';

//날짜형식 Return 함수 ex)20210629
let current_date = new Date();
const formatDate = (current_date) => {
  let year = current_date.getFullYear().toString();
  let tempMonth = (current_date.getMonth() + 1).toString();
  let month = tempMonth.length < 2 ? '0' + tempMonth : tempMonth;
  let tempDay = current_date.getDate().toString();
  let day = tempDay.length < 2 ? '0' + tempDay : tempDay;

  return year + month + day;
};

//get post patch delete

// class ApiService {
/*********************** 진담검사 접수 API_URL ***********************/
// 진단검사 접수 대기환자리스트 조회
const getWatingPatientList = async (date: Date) => {
  let list = await axios.get(RECEIPT_API_URL, {
    params: {
      hspt_cd: '10260084',
      prsc_date: formatDate(date),
    },
  });
  return list.data;
};

// 진단검사 리스트 조회
const getDiagnosisList = async (rcpn_sqno: string) => {
  let list = await axios.get(RECEIPT_API_URL + '/diagnosis', {
    params: {
      hspt_cd: '10260084',
      prsc_date: formatDate(current_date),
      rcpn_sqno: rcpn_sqno,
    },
  });
  return list.data;
};

// 진단검사 상태 업데이트
const patchDiagnosisList = async (state: string, list: ICheckedList[]) => {
  return await axios.patch(RECEIPT_API_URL + '/edit', {
    prsc_prgr_stat_cd: state,
    checkedList: list,
  });
};

/*********************** 위탁 의뢰 API_URL ***********************/
// 진단검사 완료 => 위탁의뢰 목록에 추가
const postConsignment = async (list: ICheckedList[]) => {
  return await axios.post(CONSIGNMENT_API_URL + '/insert', {
    // return await axios.put(CONSIGNMENT_API_URL + '/insert', {
    checkedList: list,
  });
};

// 위탁 의뢰 목록 조회
const getConsignmentList = async (fromDate: Date, toDate: Date, inqryDvsn: string) => {
  // 일자조회조건이 선택되지 않은경우 '' 세팅
  if (inqryDvsn === undefined) {
    inqryDvsn = '';
  }

  let list = await axios.get(CONSIGNMENT_API_URL + '/consignment', {
    params: {
      hspt_cd: '10260084',
      inqryDvsn: inqryDvsn,
      fromDate: formatDate(fromDate),
      toDate: formatDate(toDate),
    },
  });
  return list.data;
};

const getConsignmentYN = async (list: IConsCheckedList[]) => {
  return await axios.get(CONSIGNMENT_API_URL + '/selectYN', {
    params: {
      checkedList: list,
    },
  });
};

// 위탁 의뢰 전송/취소
const patchConsignmentList = async (dept_hnm: string, state: string, list: IConsCheckedList[]) => {
  return await axios.patch(CONSIGNMENT_API_URL + '/edit', {
    dept_hnm: dept_hnm,
    state: state,
    trans_date: state === '전송' ? formatDate(current_date) : '',
    checkedList: list,
  });
};

/*********************** 진담검사 결과 API_URL ***********************/
// 진단검사 결과 대기환자리스트 조회
const getResultWatingList = async (fromDate: Date, toDate: Date) => {
  let list = await axios.get(RESULT_API_URL, {
    params: {
      hspt_cd: '10260084',
      fromDate: formatDate(fromDate),
      toDate: formatDate(toDate),
    },
  });
  return list.data;
};

// 진단검사 리스트 조회
const getResultDiagnosisList = async (rcpn_sqno: string) => {
  let list = await axios.get(RESULT_API_URL + '/diagnosis', {
    params: {
      hspt_cd: '10260084',
      prsc_date: formatDate(current_date),
      rcpn_sqno: rcpn_sqno,
    },
  });
  return list.data;
};

// 저장 버튼 클릭 이벤트 (결과대기 => 의뢰회신)
const patchResultDiagnosisList = async (state: string, list: IResultCheckedList[]) => {
  return await axios.patch(RESULT_API_URL + '/edit', {
    prsc_prgr_stat_cd: state,
    checkedList: list, //처방순번, 접수일련번호, index, 결과치
  });
};

// }

export {
  getWatingPatientList,
  getDiagnosisList,
  patchDiagnosisList,
  postConsignment,
  getConsignmentList,
  getConsignmentYN,
  patchConsignmentList,
  getResultWatingList,
  getResultDiagnosisList,
  patchResultDiagnosisList,
};
// export default new ApiService();
