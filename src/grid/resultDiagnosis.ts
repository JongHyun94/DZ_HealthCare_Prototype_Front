//첫행 header 에 대한 내용
const resultDiagnosis = {
  name: 'resultDiagnosis',
  fields: [
    {
      fieldName: 'prsc_cd',
    },
    {
      fieldName: 'prsc_nm',
    },
    {
      fieldName: 'spcm_hnm',
    },
    {
      fieldName: 'ctnr_nm',
    },
    {
      fieldName: 'pid',
    },
    {
      fieldName: 'prsc_date',
    },
    {
      fieldName: 'exmn_date',
    },
    {
      fieldName: 'prsc_sqno',
    },
    {
      fieldName: 'state',
    },
    {
      fieldName: 'rcpn_sqno', //접수일련번호:진단검사 리스트 조회 파라미터 용도
    },
    {
      fieldName: 'exmn_rslt1',
    },
    {
      fieldName: 'judgment',
    },
    {
      fieldName: 'nots',
    },
    {
      fieldName: 'nots_low',
    },
    {
      fieldName: 'nots_high',
    },
  ],
  //그 아래 실제 컬럼들에 대한 명세
  columns: [
    {
      name: 'prsc_cd',
      fieldName: 'prsc_cd', //fileds 에 정의한 필드네임과 매칭
      header: '검사코드',
      width: '100',
      editable: false,
    },
    {
      name: 'prsc_nm',
      fieldName: 'prsc_nm',
      header: '검사명',
      width: '400',
      editable: false,
    },
    {
      name: 'spcm_hnm',
      fieldName: 'spcm_hnm',
      header: '검체명',
      width: '150',
      editable: false,
    },
    {
      name: 'exmn_rslt1',
      fieldName: 'exmn_rslt1',
      header: '결과치',
      width: '100',
      editable: true,
      // styleCallback: function (grid, dataCell) {
      //   var ret = {};
      //   ret.editable = false;

      //   return ret;
      // },
    },
    {
      name: 'judgment',
      fieldName: 'judgment',
      header: '판정',
      width: '100',
      editable: false,
      // renderer: {
      //   type: 'html',
      //   callback: function (grid, cell, w, h) {
      //     const data = cell.value;
      //     let color;
      //     if (data === '▼') color = 'SlateBlue';
      //     else if (data === '▲') color = 'red';
      //     else color = 'black';

      //     var html = `<div style="color: ${color};"> ${data}</div>`;

      //     return html;
      //   },
      // },
    },
    {
      name: 'nots',
      fieldName: 'nots',
      header: '참고치',
      width: '100',
      editable: false,
    },
    {
      name: 'state',
      fieldName: 'state',
      header: '상태',
      width: '100',
      editable: false,
      // 진단검사 결과 화면에서는 상태값은 색표시 안하는 듯 보임
      // renderer: {
      //   type: 'html',
      //   callback: function (grid, cell, w, h) {
      //     const data = cell.value;
      //     let color;
      //     if (data === '결과 대기') color = 'orange';
      //     else if (data === '진행중') color = 'red';
      //     else if (data === '최종보고') color = 'blue';

      //     var html = `<div style="color: ${color};"> ○${data}</div>`;

      //     return html;
      //   },
      // },
    },
  ],
};

export default resultDiagnosis;
