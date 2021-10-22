// 나이 계산하기
export const calcAge = (birth) => {
  let age = parseInt(String(new Date().getFullYear())) - parseInt(birth.substring(0,4)) + 1;
  return age;
};