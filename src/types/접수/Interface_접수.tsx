/*
  Cbptbainmt.hspt_cd,
  Cbptbainmt.del_yn,
  Cbptbainmt.pid,
  Cbptbainmt.pt_nm,
  Cbptbainmt.pt_frrn,
  Cbptbainmt.pt_srrn,
  Cbptbainmt.sex_cd,
  Cbptbainmt.cntc_tel,
  Cbptbainmt.clph_no,
  Cbptbainmt.basc_addr
*/
interface IPatient {
  hspt_cd: string;
  del_yn: string;
  pid: string;
  pt_nm: string;
  pt_frrn: string;
  pt_srrn: string;
  dobr: string;
  sex_cd: string;
  cntc_tel: string;
  clph_no: string;
  basc_addr: string;
  pMemo: string;
}

/*
  `hspt_cd` varchar(10) NOT NULL COMMENT '병원코드',
  `rcpn_sqno` int(11) NOT NULL COMMENT '접수일련번호',
  `rcpn_dvcd` varchar(1) DEFAULT NULL COMMENT '접수구분코드',
  `pid` varchar(10) DEFAULT NULL COMMENT '환자등록번호',
  `pt_nm` varchar(50) DEFAULT NULL COMMENT '환자성명',
  `mdcr_date` varchar(8) DEFAULT NULL COMMENT '진료일자',
  `mdcr_hm` varchar(4) DEFAULT NULL COMMENT '진료시분',
  `mcrm_cd` varchar(10) DEFAULT NULL COMMENT '진찰실코드',
  `mddp_cd` varchar(10) DEFAULT NULL COMMENT '진료과코드',
  `mdcr_dr_id` varchar(20) DEFAULT NULL COMMENT '진료의사ID',
  `user_nm` varchar(50) DEFAULT NULL COMMENT '성명',
  `pt_arvl_dt` varchar(50) DEFAULT NULL COMMENT '환자도착일시',
  `rcpn_stat_cd` varchar(2) DEFAULT NULL COMMENT '접수상태코드',
*/

interface IRegister {
  hspt_cd: string;
  rcpn_sqno: number | undefined;
  rcpn_dvcd: string;
  pid: string;
  pt_nm: string;
  mdcr_date: string;
  mdcr_hm: string;
  mcrm_cd: string;
  mddp_cd: string;
  mdcr_dr_id: string;
  user_nm: string;
  pt_arvl_dt: string;
  rcpn_stat_cd: string;
  rcpn_stat: string;
  rcpn_memo: string;
  insn_tycd: string;
  type_asst_cd: string;
  cmhs_path_cd: string;
  fvnr_dvcd: string;
}

/*
CREATE TABLE IF NOT EXISTS `cxusemngmt` (
  `hspt_cd` varchar(13) NOT NULL COMMENT '병원코드',
  `frst_rgst_usid` varchar(20) NOT NULL COMMENT '최초등록사용자ID',
  `frst_rgdt` datetime NOT NULL DEFAULT '2000-00-06 00:00:00' COMMENT '최초등록일시',
  `last_updt_usid` varchar(20) NOT NULL COMMENT '최종수정사용자ID',
  `last_uddt` datetime NOT NULL DEFAULT '2000-00-06 00:00:00' COMMENT '최종수정일시',
  `usid` varchar(20) NOT NULL COMMENT '사용자ID',
  `gvod_date` varchar(8) DEFAULT NULL COMMENT '발령일자',
  `user_nm` varchar(50) DEFAULT NULL COMMENT '성명',
  `user_enm` varchar(50) DEFAULT NULL COMMENT '영문명',
  `rrno` varchar(20) DEFAULT NULL COMMENT '주민등록번호',
  `pw` varchar(100) DEFAULT NULL COMMENT '비밀번호',
  `octy_cd` varchar(20) DEFAULT NULL COMMENT '직종구분코드',
  `ocrs_cd` varchar(20) DEFAULT NULL COMMENT '직책코드',
  `ocps_cd` varchar(20) DEFAULT NULL COMMENT '직위코드',
  `lcno` varchar(35) DEFAULT NULL COMMENT '면허번호',
  `dr_lcno` varchar(35) DEFAULT NULL COMMENT '의사면허번호',
  `spsb_fiel_cnts` varchar(600) DEFAULT NULL COMMENT '전문분야내용',
  `otpt_mdcr_dr_yn` varchar(1) DEFAULT NULL COMMENT '외래진료의사여부',
  `hlof_stat_dvcd` varchar(20) DEFAULT NULL COMMENT '재직상태구분코드',
  `dr_nurs_dvcd` varchar(20) DEFAULT NULL COMMENT '의사간호사구분코드',
  `tel` varchar(30) DEFAULT NULL COMMENT '전화번호',
  `clph_no` varchar(30) DEFAULT NULL COMMENT '휴대폰번호',
  `aply_endy` varchar(50) DEFAULT NULL COMMENT '적용종료일자',
  `emal_addr` varchar(320) DEFAULT NULL COMMENT '이메일주소',
  `del_yn` varchar(1) DEFAULT NULL COMMENT '삭제여부',
  `sign_img` varchar(256) DEFAULT NULL COMMENT '서명이미지',
  `sex_cd` varchar(1) DEFAULT NULL COMMENT '성별코드',
  `trial149` char(1) DEFAULT NULL COMMENT 'TRIAL',
  PRIMARY KEY (`usid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='사용자마스터';
*/
interface IUser {
  hspt_cd: string;
  usid: string;
  user_nm: string;
  octy_cd: string;
  ocrs_cd: string;
  ocps_cd: string;
  lcno: string;
  dr_lcno: string;
  spsb_fiel_cnts: string;
  otpt_mdcr_dr_yn: string;
  hlof_stat_dvcd: string;
  dr_nurs_dvcd: string;
  tel: string;
  clph_no: string;
  emal_addr: string;
  del_yn: string;
  sign_img: string;
  sex_cd: string;
}

export type { IPatient, IRegister, IUser };
