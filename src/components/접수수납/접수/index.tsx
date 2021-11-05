import { useRecoilState } from "recoil";
import "./style.css";
import {
  OBTMultiLineTextField,
  OBTDropDownList2,
  OBTDatePicker,
  OBTButton,
  OBTSnackbar,
} from "luna-orbit";
import { useState } from "react";
import moment from "moment";
import {
  selPatientDB,
  selRegiDB,
} from "../../../atoms/접수_수납/Recoils_접수_수납DB";
import {
  createNewRegister,
  updateNewRegister,
} from "../../../utils/Api/접수/ApiService_접수";
import { useEffect } from "react";
import docIcon from "./docIcon.png";
import { IRegister } from "../../../types/접수/Interface_접수";

function Register() {
  // 선택된 환자
  const [selectedPatient, setSelectedPatient] = useRecoilState(selPatientDB);
  // 선택된 접수
  const [selectedRegister, setSelectedRegister] = useRecoilState<
    any | undefined
  >(selRegiDB);
  // 의사리스트 정보
  // const doctorLists = useRecoilValue<Doctor[]>(doctorList);
  const doctorLists = [
    { value: "", text: "선택하세요" },
    { value: "doctor1", text: "이기훈" },
    { value: "doctor2", text: "김의사" },
  ];
  // 선택된 의사 정보
  // const [selectedDoctor, setSelectedDoctor] = useRecoilState<any>(selDoctor);
  const timeList = [
    { value: "", text: "선택하세요" },
    { value: "0900", text: "09:00" },
    { value: "0930", text: "09:30" },
    { value: "1000", text: "10:00" },
    { value: "1030", text: "10:30" },
    { value: "1100", text: "11:00" },
    { value: "1130", text: "11:30" },
    { value: "1200", text: "12:00" },
    { value: "1230", text: "12:30" },
    { value: "1300", text: "13:00" },
    { value: "1330", text: "13:30" },
    { value: "1400", text: "14:00" },
    { value: "1430", text: "14:30" },
    { value: "1500", text: "15:00" },
    { value: "1530", text: "15:30" },
    { value: "1600", text: "16:00" },
    { value: "1630", text: "16:30" },
    { value: "1700", text: "17:00" },
    { value: "1730", text: "17:30" },
    { value: "1800", text: "18:00" },
  ];

  const regiList = [
    { value: "", text: "선택하세요" },
    { value: "1", text: "초진" },
    { value: "2", text: "재진" },
    { value: "3", text: "신환" },
    // { value: "4", text: "대리접수" },
  ];

  const insureList = [
    { value: "", text: "선택하세요" },
    { value: "1", text: "일반" },
    { value: "2", text: "국민건강보험" },
    { value: "3", text: "의료급여" },
    { value: "4", text: "국가보훈자" },
    { value: "5", text: "자동차보험" },
    { value: "6", text: "산재보험" },
    { value: "7", text: "산정특례" },
  ];

  const insureSubList = [
    { value: "", text: "선택하세요" },
    { value: "1", text: "일반" },
    { value: "2", text: "차상위C" },
    { value: "3", text: "차상위E" },
    { value: "4", text: "차상위F" },
  ];

  const purposeList = [
    { value: "", text: "선택하세요" },
    { value: "A", text: "진료" },
    { value: "B", text: "상담" },
    { value: "C", text: "진료기록부 발급" },
    { value: "D", text: "대리접수" },
  ];

  const wayList = [
    { value: "", text: "선택하세요" },
    { value: "1", text: "온라인" },
    { value: "2", text: "지역광고" },
    { value: "3", text: "지인소개" },
  ];

  // 진료일자
  // 진료시간
  // 진료의
  // 초/재진

  // 보험구분
  // 보험보조유형
  // 내원목적
  // 외래경로

  // 접수메모

  // 접수 상태
  const [newRegister, setNewRegister] = useState<IRegister>({
    // rcpn_sqno: undefined,
    // regiDate: moment().format("YYYYMMDD"),
    // regiTime: "",
    // regiDoctor: "",
    // regiState: "",
    // regiInsureanceState: "",
    // regiSubInsureanceState: "",
    // regiPurpose: "",
    // regiWay: "",
    // regiTextarea: "",
    // regiHealthCheck: false,

    // regiHsptCd: "10260084",
    // pid: "",
    // rcpn_stat_cd: "",

    hspt_cd: "10260084",
    rcpn_sqno: undefined,
    rcpn_dvcd: "",
    pid: "",
    pt_nm: "",
    mdcr_date: moment().format("YYYYMMDD"),
    mdcr_hm: "",
    mcrm_cd: "",
    mddp_cd: "",
    mdcr_dr_id: "",
    user_nm: "",
    pt_arvl_dt: "",
    rcpn_stat_cd: "",
    rcpn_stat: "",
    rcpn_memo: "",
    insn_tycd: "",
    type_asst_cd: "",
    cmhs_path_cd: "",
    fvnr_dvcd: "",
  });

  // 스낵바 상태
  const [createSuccessSnackbarState, setCreateSuccessSnackbarState] =
    useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const [warning, setWarning] = useState(false);
  const [warnMsg, setWarnMsg] = useState("");

  // 건강검진접수 체크
  const checkHealthRegister = async () => {
    console.log("건강검진접수");
    setNewRegister({
      ...newRegister,
      // regiHealthCheck: !newRegister.regiHealthCheck,
    });
  };
  // 접수 초기화 버튼
  const initializeRegister = () => {
    console.log("접수초기화");
    setNewRegister({
      ...newRegister,
      mdcr_date: moment().format("YYYYMMDD"),
      mdcr_hm: "",
      mdcr_dr_id: "",
      fvnr_dvcd: "",
      insn_tycd: "",
      type_asst_cd: "",
      rcpn_dvcd: "",
      cmhs_path_cd: "",
      rcpn_memo: "",
      // regiHealthCheck: false,
      rcpn_stat_cd: "",
    });
  };

  // 접수생성 버튼
  const createRegister = async (e) => {
    if (newRegister) {
      let validation = true;
      if (newRegister.mdcr_dr_id === "") {
        validation = false;
        setWarnMsg("진료의를 선택해주세요.");
        setWarning(true);
      } else if (newRegister.mdcr_date !== moment().format("YYYYMMDD")) {
        validation = false;
        setWarnMsg("날짜를 정확히 선택해주세요.");
        setWarning(true);
      } else if (newRegister.mdcr_hm === "") {
        validation = false;
        setWarnMsg("시간을 선택해주세요.");
        setWarning(true);
      } else if (newRegister.fvnr_dvcd === "") {
        validation = false;
        setWarnMsg("초/재진을 선택해주세요.");
        setWarning(true);
      } else if (newRegister.insn_tycd === "") {
        validation = false;
        setWarnMsg("보험구분을 선택해주세요.");
        setWarning(true);
      } else if (newRegister.type_asst_cd === "") {
        validation = false;
        setWarnMsg("보험보조유형을 선택해주세요.");
        setWarning(true);
      } else if (newRegister.rcpn_dvcd === "") {
        validation = false;
        setWarnMsg("내원목적을 선택해주세요.");
        setWarning(true);
      } else if (newRegister.cmhs_path_cd === "") {
        validation = false;
        setWarnMsg("외래경로를 선택해주세요.");
        setWarning(true);
      } else if (validation) {
        setWarnMsg("");
        // if (newRegister.regiHealthCheck) {
        //   setSuccessMsg("건강검진 접수 완료");
        // } else {
        //   setSuccessMsg("접수 완료");
        // }
        let result = await createNewRegister(newRegister);
        console.log("접수완료: ", result);
        setCreateSuccessSnackbarState(true);
      }
      console.log("접수생성: ", newRegister);
    }
  };
  const updateRegister = async (stat) => {
    console.log("업데이트", newRegister.rcpn_stat_cd);
    setNewRegister({
      ...newRegister,
      rcpn_stat_cd: stat,
    });
    let result = await updateNewRegister(newRegister);
    console.log("업데이트 완료");
    console.log("Update result", result);
  };
  const makeNewRegister = () => {
    // console.log("newRegister:", newRegister);
    if (selectedPatient) {
      setSelectedRegister(newRegister);
    } else {
      console.log(selectedPatient);
      setWarnMsg("환자를 선택해주세요.");
      setWarning(true);
    }
  };

  useEffect(() => {
    if (selectedPatient) {
      if(selectedRegister) {
        setNewRegister({
          ...newRegister,
          pid: selectedPatient.pid,
          hspt_cd: selectedPatient.hspt_cd,
          rcpn_sqno: selectedRegister.rcpn_sqno,
          mdcr_date: selectedRegister.mdcr_date,
          mdcr_hm: selectedRegister.mdcr_hm,
          mdcr_dr_id: selectedRegister.mdcr_dr_id,
          fvnr_dvcd: selectedRegister.fvnr_dvcd,
          insn_tycd: selectedRegister.insn_tycd,
          type_asst_cd: selectedRegister.type_asst_cd,
          rcpn_dvcd: selectedRegister.rcpn_dvcd,
          cmhs_path_cd: selectedRegister.cmhs_path_cd,
          rcpn_memo: selectedRegister.rcpn_memo,
          rcpn_stat_cd: selectedRegister.rcpn_stat_cd,
        });
      } else {
        setNewRegister({
          ...newRegister,
          pid: selectedPatient.pid,
          hspt_cd: selectedPatient.hspt_cd,
          rcpn_sqno: undefined,
          mdcr_date: moment().format("YYYYMMDD"),
          mdcr_hm: "",
          mdcr_dr_id: "",
          fvnr_dvcd: "",
          insn_tycd: "",
          type_asst_cd: "",
          rcpn_dvcd: "",
          cmhs_path_cd: "",
          rcpn_memo: "",
          rcpn_stat_cd: "",
        });
      }
    } 
    return () => {
      // initializeRegister();
    }
    // console.log("useEffect: ", newRegister);
  }, [selectedPatient]);

  useEffect(() => {
    if (selectedRegister) {
      setNewRegister({
        ...newRegister,
        rcpn_sqno: selectedRegister.rcpn_sqno,
        mdcr_date: selectedRegister.mdcr_date,
        mdcr_hm: selectedRegister.mdcr_hm,
        mdcr_dr_id: selectedRegister.mdcr_dr_id,
        fvnr_dvcd: selectedRegister.fvnr_dvcd,
        insn_tycd: selectedRegister.insn_tycd,
        type_asst_cd: selectedRegister.type_asst_cd,
        rcpn_dvcd: selectedRegister.rcpn_dvcd,
        cmhs_path_cd: selectedRegister.cmhs_path_cd,
        rcpn_memo: selectedRegister.rcpn_memo,
        rcpn_stat_cd: selectedRegister.rcpn_stat_cd,
      });
    }
  }, selectedRegister);
  return (
    <div className="Register">
      <div className="Register_header">
        <div className="Register_header_icon">
          <img src={docIcon} alt="icon" width="20px" height="20px" />
        </div>
        <div className="Register_header_title">접수</div>
      </div>
      {/* 본문 디테일 부분 */}
      {selectedRegister ? (
        <>
          <div className="Register_contents">
            <div className="Register_contents_line">
              {/* 진료의 */}
              <div className="Register_contents_line_item">
                <div className="Register_contents_line_item_label">진료의</div>
                <div className="Register_contents_line_item_selectbox">
                  <OBTDropDownList2
                    displayType={OBTDropDownList2.DisplayType.text}
                    list={doctorLists}
                    value={newRegister.mdcr_dr_id}
                    onChange={(e) =>
                      setNewRegister({ ...newRegister, mdcr_dr_id: e.value })
                    }
                    required
                  />
                </div>
              </div>
              {/* 진료일자 */}
              <div className="Register_contents_line_item">
                <div className="Register_contents_line_item_label">
                  진료일자
                </div>
                <div className="Register_contents_line_item_selectbox">
                  <OBTDatePicker
                    format={OBTDatePicker.Format.YYYYMMDD}
                    value={newRegister.mdcr_date}
                    onChange={(e) =>
                      setNewRegister({ ...newRegister, mdcr_date: e.value })
                    }
                    useControlButton={true}
                    inputStyle={{ width: "85px" }}
                    required
                  />
                </div>
              </div>
              {/* 진료시간 */}
              <div className="Register_contents_line_item">
                <div className="Register_contents_line_item_label">
                  진료시간
                </div>
                <div className="Register_contents_line_item_selectbox">
                  <OBTDropDownList2
                    displayType={OBTDropDownList2.DisplayType.text}
                    list={timeList}
                    value={newRegister.mdcr_hm}
                    onChange={(e) =>
                      setNewRegister({ ...newRegister, mdcr_hm: e.value })
                    }
                    required
                  />
                </div>
              </div>

              {/* 초/재진 */}
              <div className="Register_contents_line_item">
                <div className="Register_contents_line_item_label">
                  초 / 재진
                </div>
                <div className="Register_contents_line_item_selectbox">
                  <OBTDropDownList2
                    displayType={OBTDropDownList2.DisplayType.text}
                    list={regiList}
                    value={newRegister.fvnr_dvcd}
                    onChange={(e) =>
                      setNewRegister({ ...newRegister, fvnr_dvcd: e.value })
                    }
                    required
                  />
                </div>
              </div>
            </div>
            <div className="Register_contents_line">
              {/* 보험구분 */}
              <div className="Register_contents_line_item">
                <div className="Register_contents_line_item_label">
                  보험구분
                </div>
                <div className="Register_contents_line_item_selectbox">
                  <OBTDropDownList2
                    displayType={OBTDropDownList2.DisplayType.text}
                    list={insureList}
                    value={newRegister.insn_tycd}
                    onChange={(e) =>
                      setNewRegister({
                        ...newRegister,
                        insn_tycd: e.value,
                      })
                    }
                    required
                  />
                </div>
              </div>
              {/* 보험보조유형 */}
              <div className="Register_contents_line_item">
                <div className="Register_contents_line_item_label">
                  보험보조유형
                </div>
                <div className="Register_contents_line_item_selectbox">
                  <OBTDropDownList2
                    displayType={OBTDropDownList2.DisplayType.text}
                    list={insureSubList}
                    value={newRegister.type_asst_cd}
                    onChange={(e) =>
                      setNewRegister({
                        ...newRegister,
                        type_asst_cd: e.value,
                      })
                    }
                    required
                  />
                </div>
              </div>

              {/* 내원목적 */}
              <div className="Register_contents_line_item">
                <div className="Register_contents_line_item_label">
                  내원목적
                </div>
                <div className="Register_contents_line_item_selectbox">
                  <OBTDropDownList2
                    displayType={OBTDropDownList2.DisplayType.text}
                    list={purposeList}
                    value={newRegister.rcpn_dvcd}
                    onChange={(e) =>
                      setNewRegister({ ...newRegister, rcpn_dvcd: e.value })
                    }
                    required
                  />
                </div>
              </div>
              {/* 외래경로 */}
              <div className="Register_contents_line_item">
                <div className="Register_contents_line_item_label">
                  외래경로
                </div>
                <div className="Register_contents_line_item_selectbox">
                  <OBTDropDownList2
                    displayType={OBTDropDownList2.DisplayType.text}
                    list={wayList}
                    value={newRegister.cmhs_path_cd}
                    onChange={(e) =>
                      setNewRegister({ ...newRegister, cmhs_path_cd: e.value })
                    }
                    required
                  />
                </div>
              </div>
            </div>
            <div className="Register_contents_line">
              {/* 접수 메모 */}
              <div className="Register_contents_line_memo">
                <OBTMultiLineTextField
                  value={newRegister.rcpn_memo}
                  fixed={true}
                  onChange={(e) => {
                    setNewRegister({ ...newRegister, rcpn_memo: e.value });
                  }}
                  width="525px"
                  height="50px"
                  placeHolder="접수메모를 입력해주세요."
                />
              </div>
            </div>
          </div>
          <div className="Register_footer">
            {/* 접수 버튼 */}
            <div className="Register_footer_check">
              {/* <OBTButton
                labelText="건강검진접수"
                type={OBTButton.Type.small}
                theme={
                  newRegister.regiHealthCheck
                    ? OBTButton.Theme.skyBlue
                    : OBTButton.Theme.default
                }
                onClick={checkHealthRegister}
                width="80px"
              /> */}
            </div>
            {newRegister.mdcr_date < moment().format("YYYYMMDD") ? (
              false
            ) : (
              <>
                <div className="Register_footer_initBtn">
                  <OBTButton
                    labelText="초기화"
                    type={OBTButton.Type.small}
                    onClick={initializeRegister}
                    width="80px"
                  />
                </div>
                <div className="Register_footer_createBtn">
                  {newRegister.mdcr_date === moment().format("YYYYMMDD") ? (
                    newRegister.rcpn_stat_cd !== "R" ? (
                      <OBTButton
                        labelText="접수"
                        type={OBTButton.Type.small}
                        theme={OBTButton.Theme.skyBlue}
                        onClick={createRegister}
                        width="80px"
                      />
                    ) : (
                      <OBTButton
                        labelText="취소"
                        type={OBTButton.Type.small}
                        theme={OBTButton.Theme.default}
                        onClick={() => {
                          setNewRegister({
                            ...newRegister,
                            rcpn_stat_cd: "C",
                          });
                          updateRegister("C");
                        }}
                        width="80px"
                      />
                    )
                  ) : (
                    <OBTButton
                      labelText="예약"
                      type={OBTButton.Type.small}
                      theme={OBTButton.Theme.skyBlue}
                      onClick={createRegister}
                      width="80px"
                    />
                  )}
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="makeNewRegister">
            {/* <button className="makeNewRegisterBtn">신규 접수</button> */}
            <OBTButton
              width="120px"
              height="50px"
              labelText={"신규등록"}
              onClick={makeNewRegister}
            />
          </div>
        </>
      )}
      {warning === true && (
        <OBTSnackbar
          labelText={warnMsg}
          type={OBTSnackbar.Type.warning}
          open={warning}
          onChange={(e) => setWarning(false)}
        />
      )}
      {createSuccessSnackbarState === true && (
        <OBTSnackbar
          labelText={successMsg}
          type={OBTSnackbar.Type.success}
          open={createSuccessSnackbarState}
          onChange={(e) => setCreateSuccessSnackbarState(false)}
        />
      )}
    </div>
  );
}
export default Register;
