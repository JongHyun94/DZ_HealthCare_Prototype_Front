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
import { createNewRegister } from "../../../utils/Api/접수/ApiService_접수";
import { useEffect } from "react";
import docIcon from "./docIcon.png";

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
    { value: "1", text: "진료" },
    { value: "2", text: "상담" },
    { value: "3", text: "진료기록부 발급" },
    { value: "4", text: "대리접수" },
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
  const [newRegister, setNewRegister] = useState({
    regiDate: moment().format("YYYYMMDD"),
    regiTime: "",
    regiDoctor: "",
    regiState: "",
    regiInsureanceStae: "",
    regiSubInsureanceState: "",
    regiPurpose: "",
    regiWay: "",
    regiTextarea: "",
    regiHealthCheck: false,

    regiHsptCd: "",
    pid: "",
    rcpn_stat_cd: "",
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
      regiHealthCheck: !newRegister.regiHealthCheck,
    });
  };
  // 접수 초기화 버튼
  const initializeRegister = () => {
    console.log("접수초기화");
    setNewRegister({
      ...newRegister,
      regiDate: moment().format("YYYYMMDD"),
      regiTime: "",
      regiDoctor: "",
      regiState: "",
      regiInsureanceStae: "",
      regiSubInsureanceState: "",
      regiPurpose: "",
      regiWay: "",
      regiTextarea: "",
      regiHealthCheck: false,
    });
  };

  // 접수생성 버튼
  const createRegister = async (e) => {
    if (newRegister) {
      let validation = true;
      if (newRegister.regiDoctor === "") {
        validation = false;
        setWarnMsg("진료의를 선택해주세요.");
        setWarning(true);
      } else if (newRegister.regiDate !== moment().format("YYYYMMDD")) {
        validation = false;
        setWarnMsg("날짜를 정확히 선택해주세요.");
        setWarning(true);
      } else if (newRegister.regiTime === "") {
        validation = false;
        setWarnMsg("시간을 선택해주세요.");
        setWarning(true);
      } else if (newRegister.regiState === "") {
        validation = false;
        setWarnMsg("초/재진을 선택해주세요.");
        setWarning(true);
      } else if (newRegister.regiInsureanceStae === "") {
        validation = false;
        setWarnMsg("보험구분을 선택해주세요.");
        setWarning(true);
      } else if (newRegister.regiSubInsureanceState === "") {
        validation = false;
        setWarnMsg("보험보조유형을 선택해주세요.");
        setWarning(true);
      } else if (newRegister.regiPurpose === "") {
        validation = false;
        setWarnMsg("내원목적을 선택해주세요.");
        setWarning(true);
      } else if (newRegister.regiWay === "") {
        validation = false;
        setWarnMsg("외래경로를 선택해주세요.");
        setWarning(true);
      } else if (validation) {
        setWarnMsg("");
        if (newRegister.regiHealthCheck) {
          setSuccessMsg("건강검진 접수 완료");
        } else {
          setSuccessMsg("접수 완료");
        }
        let result = await createNewRegister(newRegister);
        console.log("접수완료: ", result);
        setCreateSuccessSnackbarState(true);
      }
      console.log("접수생성: ", newRegister);
    }
  };

  useEffect(() => {
    if (selectedPatient) {
      setNewRegister({
        ...newRegister,
        pid: selectedPatient.pid,
        regiHsptCd: selectedPatient.hspt_cd,
      });
    }
    console.log("useEffect: ", newRegister);
  }, [selectedPatient]);

  useEffect(() => {
    if (selectedRegister) {
      setNewRegister({
        ...newRegister,
        regiDate: selectedRegister.mdcr_date,
        regiTime: selectedRegister.mdcr_hm,
        regiDoctor: selectedRegister.mdcr_dr_id,
        regiState: "1",
        regiInsureanceStae: "2",
        regiSubInsureanceState: "2",
        regiPurpose: "2",
        regiWay: "1",
        regiTextarea: "",
        rcpn_stat_cd: selectedRegister.rcpn_stat_cd,
      });
    }
  }, selectedRegister);
  return (
    <>
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
                    value={newRegister.regiDoctor}
                    onChange={(e) =>
                      setNewRegister({ ...newRegister, regiDoctor: e.value })
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
                    value={newRegister.regiDate}
                    onChange={(e) =>
                      setNewRegister({ ...newRegister, regiDate: e.value })
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
                    value={newRegister.regiTime}
                    onChange={(e) =>
                      setNewRegister({ ...newRegister, regiTime: e.value })
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
                    value={newRegister.regiState}
                    onChange={(e) =>
                      setNewRegister({ ...newRegister, regiState: e.value })
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
                    value={newRegister.regiInsureanceStae}
                    onChange={(e) =>
                      setNewRegister({
                        ...newRegister,
                        regiInsureanceStae: e.value,
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
                    value={newRegister.regiSubInsureanceState}
                    onChange={(e) =>
                      setNewRegister({
                        ...newRegister,
                        regiSubInsureanceState: e.value,
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
                    value={newRegister.regiPurpose}
                    onChange={(e) =>
                      setNewRegister({ ...newRegister, regiPurpose: e.value })
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
                    value={newRegister.regiWay}
                    onChange={(e) =>
                      setNewRegister({ ...newRegister, regiWay: e.value })
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
                  value={newRegister.regiTextarea}
                  fixed={true}
                  onChange={(e) => {
                    setNewRegister({ ...newRegister, regiTextarea: e.value });
                  }}
                  width="505px"
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
            {newRegister.regiDate < moment().format("YYYYMMDD") ? (
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
                  {newRegister.regiDate === moment().format("YYYYMMDD") ? (
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
                        onClick={() => {}}
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
        </>
      ) : (
        false
      )}
    </>
  );
}
export default Register;
