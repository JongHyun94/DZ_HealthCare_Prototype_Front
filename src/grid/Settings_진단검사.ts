//첫행 header 에 대한 내용
const consignmentGrid = {
  name: 'consignmentGrid',
  fields: [
    {
      fieldName: 'prsc_sqno',
    },
    {
      fieldName: 'pid',
    },
    {
      fieldName: 'pt_nm',
    },
    {
      fieldName: 'sex_age',
    },
    {
      fieldName: 'prsc_date',
    },
    {
      fieldName: 'user_nm',
    },
    {
      fieldName: 'prsc_nm',
    },
    {
      fieldName: 'spcm_hnm',
    },
    {
      fieldName: 'bacode_nm',
    },
    {
      fieldName: 'dept_hnm',
    },
    {
      fieldName: 'state',
    },
    {
      fieldName: 'trans_date',
    },
    {
      fieldName: 'reply_date',
    },
  ],
  //그 아래 실제 컬럼들에 대한 명세
  columns: [
    {
      name: '등록번호',
      fieldName: 'pid', //fileds 에 정의한 필드네임과 매칭
      header: '등록번호',
      width: '100',
    },
    {
      name: '이름',
      fieldName: 'pt_nm',
      header: '이름',
      width: '100',
    },
    {
      name: '성별/나이',
      fieldName: 'sex_age',
      header: '성별/나이',
      width: '150',
    },
    {
      name: '검사일자',
      fieldName: 'prsc_date',
      header: '검사일자',
      width: '100',
      // datetimeFormat: 'yyyy-MM-dd',
    },
    {
      name: '진료의',
      fieldName: 'user_nm',
      header: '진료의',
      width: '100',
    },
    {
      name: '검사명',
      fieldName: 'prsc_nm',
      header: '검사명',
      width: '400',
      // styles: {
      //   textAlignment: 'near',
      // },
    },
    {
      name: '검체명',
      fieldName: 'spcm_hnm',
      header: '검체명',
      width: '100',
    },
    {
      name: '바코드번호',
      fieldName: 'bacode_nm',
      header: '바코드 번호',
      width: '100',
    },
    {
      name: '수탁기관',
      fieldName: 'dept_hnm',
      header: '수탁기관',
      width: '100',
    },
    {
      name: '상태',
      fieldName: 'state',
      header: '상태',
      width: '100',
    },
    {
      name: '전송일자',
      fieldName: 'trans_date',
      header: '전송일자',
      width: '100',
    },
    {
      name: '회신일자',
      fieldName: 'reply_date',
      header: '회신일자',
      width: '100',
    },
  ],
};

export default consignmentGrid;
