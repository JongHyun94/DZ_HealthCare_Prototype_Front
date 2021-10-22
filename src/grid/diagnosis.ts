//첫행 header 에 대한 내용
const diagnosisGrid = {
  name: 'diagnosisGrid',
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
      fieldName: 'user_nm',
    },
    {
      fieldName: 'user_nm2',
    },
    {
      fieldName: 'pid',
    },
    {
      fieldName: 'prsc_date',
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
  ],
  //그 아래 실제 컬럼들에 대한 명세
  columns: [
    {
      name: 'prsc_cd',
      fieldName: 'prsc_cd', //fileds 에 정의한 필드네임과 매칭
      header: '검사코드',
      width: '100',
    },
    {
      name: 'prsc_nm',
      fieldName: 'prsc_nm',
      header: '검사명',
      width: '400',
    },
    {
      name: 'spcm_hnm',
      fieldName: 'spcm_hnm',
      header: '검체명',
      width: '150',
    },
    {
      name: 'ctnr_nm',
      fieldName: 'ctnr_nm',
      header: '용기',
      width: '100',
      styleName: 'bold',
      renderer: {
        type: 'html',
        callback: function (grid, cell, w, h) {
          const data = cell.value;
          let color;
          if (data === 'EDTA') color = 'SlateBlue';
          else if (data === 'SST') color = '#EA5F5C';
          else if (data === 'Sodium Citrate') color = 'DodgerBlue';

          var html = `<div style="color: ${color};"> ${data}</div>`;

          return html;
        },
      },
    },
    {
      name: 'user_nm',
      fieldName: 'user_nm',
      header: '진료의',
      width: '100',
    },
    {
      name: 'user_nm2',
      fieldName: 'user_nm2',
      header: '검사담당자',
      width: '100',
    },
    {
      name: 'state',
      fieldName: 'state',
      header: '상태',
      width: '100',
      styleName: 'bold',
      renderer: {
        type: 'html',
        callback: function (grid, cell, w, h) {
          const data = cell.value;
          let color;
          if (data === '대기') color = '#F5BD4E';
          else if (data === '진행중') color = '#EA5F5C';
          else if (data === '완료') color = '#4286EB';

          var html = `<div style="color: ${color};"> ○${data}</div>`;

          return html;
        },
      },
    },
  ],
};

export default diagnosisGrid;
