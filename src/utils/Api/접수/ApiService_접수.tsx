import axios from "axios";

const Regist_API_URL = 'http://localhost:4000/regists';


// 환자 목록 불러오기
export const getPatientList = async () => {
  let list = await axios.get(Regist_API_URL+'/patients');
  return list.data;
};

// export const getRegisterList = async () => {
//   let list = await axios.get(Regist_API_URL+'/registers');
//   return list.data;
// };

export const getRegisterListByDate = async (date) => {
  console.log("date",date);
  let list = await axios.get(Regist_API_URL+'/registers', {params: {date}});
  return list.data;
};


// 조건(날짜, 상태)에 맞는 접수 목록 불러오기
// export const getRegisterListByDateAndState = async (date, state="") => {
//   let list = await axios.get(Regist_API_URL+'/registers', {params: {date, state}});
//   return list.data;
// };

// 접수 등록 (만들기)
export const createNewRegister = async (newRegister) => {
  console.log("newRegister:",newRegister);
  let list = await axios.post(Regist_API_URL+'/registers', newRegister);
  return list.data;
};

// 신체사정 불러오기
export const getVitalPatientLists = async (pid) => {
  let list = await axios.get(Regist_API_URL+'/vital', {params: {pid}});
  return list.data;
};