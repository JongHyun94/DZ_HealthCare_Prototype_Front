import "./style.css";
import { useRecoilValue } from "recoil";
import { IPatient } from "../../../types/접수/Interface_접수";
import { selPatientDB } from "../../../atoms/접수_수납/Recoils_접수_수납DB";
import { calcAge } from "../../../utils/Calc/aboutUser";
import VitalSign from "../신체사정";
import { OBTButton, OBTSnackbar } from "luna-orbit";
import patientInfoIcon from "./PatientInfo_ICON.png";
import blacklistIcon from "./BlackList_ICON.png";
import vipIcon from "./VIP_ICON.png";
import editPatientInfoIcon from "./EditPatientInfo_ICON.png";
import starIcon from "./STAR_ICON.png";
import React, { useState } from "react";
import PatientCreateForm from "../접수서브메뉴/환자등록팝업";

function PatientInfo() {
  // 선택된 환자 정보 local
  //const setSelectedPatient = useRecoilValue<Patient | undefined>(selPatient);
  // 선택된 환자 정보 DB
  const selectedPatientDB = useRecoilValue<IPatient | undefined>(selPatientDB);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="PatientInfo">
      {/* 윗부분 */}
      <div className="PatientInfo_upsdide">
        {/* 환자정보 제목 */}
        <div className="PatientInfo_upsdide_title">
          {/* 아이콘 */}
          <div className="PatientInfo_upsdide_title_icon">
            <img
              src={patientInfoIcon}
              alt="환자아이콘"
              width="20px"
              height="20px"
            />
          </div>
          {/* 환자정보 헤더 */}
          <div className="PatientInfo_upsdide_title_info">환자정보</div>
        </div>
        {/* 신규등록 버튼 */}
        <div className="PatientInfo_upsdide_newCreateBtn">
          <OBTButton
            type={OBTButton.Type.icon}
            imageUrl={{ normal: editPatientInfoIcon }}
            width="24px"
            height="24px"
            tooltip={{
              labelText: "환자정보 수정",
            }}
            onClick={() => openModal()}
          />
          <React.Fragment>
            <PatientCreateForm
              open={modalOpen}
              close={closeModal}
              header={"환자등록"}
            />
          </React.Fragment>
        </div>
      </div>
      {/* 본문부분 */}
      <div className="PatientInfo_centerside">
        {selectedPatientDB ? (
          <>
            {/* 환자 id + 버튼 기능들 */}
            <div className="PatientInfo_centerside_idWithBtns">
              <div className="PatientInfo_centerside_idWithBtns_id">
                {selectedPatientDB.pt_nm}
                <OBTButton
                  type={OBTButton.Type.icon}
                  imageUrl={{ normal: starIcon }}
                  width="20px"
                  height="20px"
                  tooltip={{
                    labelText: "즐겨찾기",
                  }}
                />
              </div>
              <div className="PatientInfo_centerside_idWithBtns_btns">
                <OBTButton
                  type={OBTButton.Type.icon}
                  imageUrl={{ normal: blacklistIcon }}
                  width="20px"
                  height="20px"
                  tooltip={{
                    labelText: "요주 인물 주의 요망!",
                  }}
                />
                <OBTButton
                  type={OBTButton.Type.icon}
                  imageUrl={{ normal: vipIcon }}
                  width="20px"
                  height="20px"
                  tooltip={{
                    labelText: "원장님 어머니!",
                  }}
                />
              </div>
            </div>
            {/* 환자 정보 1 */}
            <div className="PatientInfo_centerside_info1">
              <div className="PatientInfo_centerside_idWithBtns_id">
                No.{selectedPatientDB.pid} &#160; &#124;
              </div>
              <div className="PatientInfo_centerside_info1_age">
                ({selectedPatientDB.sex_cd}/{calcAge(selectedPatientDB.dobr)}
                세) &#160; &#124;
              </div>
              <div className="PatientInfo_centerside_info1_birth">
                {selectedPatientDB.pt_frrn}
              </div>
            </div>
            {/* 환자 정보 2 */}
            <div className="PatientInfo_centerside_info2">
              <div className="PatientInfo_centerside_info2_address">
                {selectedPatientDB.basc_addr}
              </div>
              <div className="PatientInfo_centerside_info2_phone">
                {selectedPatientDB.clph_no}
              </div>
            </div>
            <div className="PatientInfo_centerside_info3">
              {/* 신체사정 */}
              <VitalSign />
            </div>
          </>
        ) : (
          false
        )}
      </div>
    </div>
  );
}
export default PatientInfo;
