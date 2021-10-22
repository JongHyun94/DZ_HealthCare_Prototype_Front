/*

컬럼 목록 

no
등록번호
이름
진료실
진료의
진료시
접수시
상태

*/
const RegistListGrid = {
  name: 'RegistListGrid',
  fields: [
    {
      fieldName: 'rcpn_sqno',
      dataType: 'text',
    },
    {
      fieldName: 'pt_nm',
      dataType: 'text',
    },
    {
      fieldName: 'mcrm_cd',
      dataType: 'text',
    },
    {
      fieldName: 'mdcr_dr_id',
      dataType: 'text',
    },
    {
      fieldName: 'mdcr_hm_start',
      dataType: 'text',
    },
    {
      fieldName: 'mdcr_hm',
      dataType: 'text',
    },
    {
      fieldName: 'state',
      dataType: 'text',
    },
  ],
  colums: [
    {
      name: 'rcpn_sqno',
      fieldName: 'rcpn_sqno',
      width: '30',
      header: '등록번호',
      editable: false,
    },
    {
      name: 'pt_nm',
      fieldName: 'pt_nm',
      width: '30',
      header: '이름',
      editable: false,
    },
    {
      name: 'mcrm_cd',
      fieldName: 'mcrm_cd',
      width: '30',
      header: '진료실',
      editable: false,
    },
    {
      name: 'mdcr_dr_id',
      fieldName: 'mdcr_dr_id',
      width: '30',
      header: '진료의',
      editable: false,
    },
    {
      name: 'mdcr_hm_start',
      fieldName: 'mdcr_hm_start',
      width: '30',
      header: '진료시',
      editable: false,
    },
    {
      name: 'mdcr_hm',
      fieldName: 'mdcr_hm',
      width: '30',
      header: '접수시',
      editable: false,
    },
    {
      name: 'state',
      fieldName: 'state',
      width: '30',
      header: '상태',
      editable: false,
    },
  ],
};
export default RegistListGrid;

