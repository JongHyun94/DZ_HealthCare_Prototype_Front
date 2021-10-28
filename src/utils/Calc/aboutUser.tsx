// 나이 계산하기
export const calcAge = (birth) => {
  if (!birth) {
    return 0;
  } else {
    let age =
      parseInt(String(new Date().getFullYear())) -
      parseInt(birth.substring(0, 4)) +
      1;
    return age;
  }
};

// 휴대폰 하이픈 - 넣기
export const phoneFormatFun = (origPhone) => {
  if (origPhone) {
    if (origPhone.length === 11) {
      let phoneFormat = origPhone.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
      return phoneFormat;
    }
  } else {
    return "전화 번호가 없습니다.";
  }
};

// 생년월일 하이픈 - 넣기
export const birthFormatFun = (origBirth) => {
  if (origBirth) {
    let birthFormat = origBirth.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
    return birthFormat;
  } else {
    return "생일이 없습니다.";
  }
};
