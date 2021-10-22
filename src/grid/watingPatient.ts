const watingPatientGrid = {
  name: 'watingPatientGrid',
  fields: [
    {
      fieldName: 'pid',
    },
    {
      fieldName: 'pt_nm',
    },
    {
      fieldName: 'sex_cd',
    },
    {
      fieldName: 'age',
    },
    {
      fieldName: 'pt_frrn',
    },
    {
      fieldName: 'mdcr_hm',
    },
    {
      fieldName: 'dept_hnm',
    },
    {
      fieldName: 'user_nm',
    },
    {
      fieldName: 'prsc_date',
    },
    {
      fieldName: 'cmcd_nm',
    },
    {
      fieldName: 'dept_hnm2',
    },
    {
      fieldName: 'state',
    },
    {
      fieldName: 'sexage', //진단검사 대기환자리스트 성별/나이 출력용 필드
    },
    {
      fieldName: 'rcpn_sqno', //접수일련번호:진단검사 리스트 조회 파라미터 용도
    },
  ],

  //그 아래 실제 컬럼들에 대한 명세
  columns: [
    {
      name: 'pid',
      fieldName: 'pid',
      header: '등록번호',
      width: '150',
      style: {
        textAlignment: 'far',
      },
    },
    {
      name: 'pt_nm',
      fieldName: 'pt_nm',
      header: '이름',
      width: '150',
    },
    {
      name: 'sexAge',
      fieldName: 'sexAge',
      header: '성별/나이',
      width: '80',
    },
    {
      name: 'mdcr_hm',
      fieldName: 'mdcr_hm',
      header: '접수시간',
      width: '130',
    },
    {
      name: 'dept_hnm',
      fieldName: 'dept_hnm',
      header: '검사실',
      width: '130',
    },
    {
      name: 'user_nm',
      fieldName: 'user_nm',
      header: '진료의',
      width: '130',
    },
    {
      name: 'state',
      fieldName: 'state',
      header: '상태',
      width: '120',
      styleName: 'bold',
      renderer: {
        type: 'html',
        callback: function (grid, cell, w, h) {
          const data = cell.value;
          let color;
          if (data === '대기') color = '#F5BD4E';
          else if (data === '진행중') color = '#EA5F5C';
          else if (data === '완료') color = '#4286EB';

          var html = `<div style="color: ${color};"> ${data}</div>`;

          return html;
        },
      },
    },
  ],
};

export default watingPatientGrid;
