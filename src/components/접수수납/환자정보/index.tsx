import "./style.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { IPatient } from "../../../types/접수/Interface_접수";
import { selPatientDB } from "../../../atoms/접수_수납/Recoils_접수_수납DB";
import { birthFormatFun, calcAge, phoneFormatFun } from "../../../utils/Calc/aboutUser";
import VitalSign from "../신체사정";
import { OBTButton, OBTMultiLineTextField, OBTTooltip } from "luna-orbit";
import patientInfoIcon from "./PatientInfo_ICON.png";
import blacklistIcon from "./warning.png";
import vipIcon from "./VIP_ICON.png";
import editPatientInfoIcon from "./EditPatientInfo_ICON.png";
import React, { useState } from "react";
import PatientCreateForm from "../접수서브메뉴/환자등록팝업";
import callIcon from "./call.png";
import placeIcon from "./place.png";
import patientMemoIcon from "./writing.png";
import wonFillIcon from "./won_fill.png";
import wonUnfillIcon from "./won_unfill.png";

function PatientInfo() {
  // 선택된 환자 정보 DB
  const [selectedPatientDB, setSelectedPatientDB] = useRecoilState<
    IPatient | undefined
  >(selPatientDB);

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
                {/* 
                <OBTButton
                  type={OBTButton.Type.icon}
                  imageUrl={{ normal: starIcon }}
                  width="20px"
                  height="20px"
                  tooltip={{
                    labelText: "즐겨찾기",
                  }}
                /> 
                */}
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
                <OBTButton
                  type={OBTButton.Type.icon}
                  imageUrl={{ normal: wonFillIcon }}
                  width="20px"
                  height="20px"
                  tooltip={{
                    labelText: "미수금발생",
                  }}
                />
                <OBTTooltip
                  labelText={
                    <>
                      <div
                        style={{
                          textAlign: "center",
                          margin: "0 auto",
                          width: "200px",
                        }}
                      >
                        <span>환자 메모</span>
                        <div style={{ height: "20px" }} />
                        <OBTMultiLineTextField
                          value={selectedPatientDB.pMemo}
                          fixed={true}
                          onChange={(e) => {
                            setSelectedPatientDB({
                              ...selectedPatientDB,
                              pMemo: e.value,
                            });
                          }}
                          width="190px"
                          height="50px"
                          placeHolder="환자메모를 입력해주세요."
                        />
                      </div>
                    </>
                  }
                >
                  <OBTButton
                    type={OBTButton.Type.icon}
                    imageUrl={{ normal: patientMemoIcon }}
                    width="20px"
                    height="20px"
                    // tooltip={{
                    //   labelText: "환자메모",
                    // }}
                  />
                </OBTTooltip>
              </div>
            </div>
            {/* 환자 정보 1 */}
            <div className="PatientInfo_centerside_info1">
              <div className="PatientInfo_centerside_info1_id">
                No.{selectedPatientDB.pid} &#160; &#124;
              </div>
              <div className="PatientInfo_centerside_info1_age">
                ({selectedPatientDB.sex_cd}/{calcAge(selectedPatientDB.dobr)}
                세) &#160; &#124;
              </div>
              <div className="PatientInfo_centerside_info1_birth">
                {birthFormatFun(selectedPatientDB.dobr)}
              </div>
            </div>
            {/* 환자 정보 2 */}
            <div className="PatientInfo_centerside_info2">
              <div className="PatientInfo_centerside_info2_address">
                <div className="PatientInfo_centerside_info2_address_icon">
                  <OBTButton
                    type={OBTButton.Type.icon}
                    imageUrl={{ normal: placeIcon }}
                    width={"16px"}
                    height={"16px"}
                    tooltip={{
                      labelText: "주소",
                    }}
                  />
                </div>
                <div className="PatientInfo_centerside_info2_address_content">
                  {selectedPatientDB.basc_addr ? selectedPatientDB.basc_addr : "주소가 없습니다."}
                </div>
              </div>
              <div className="PatientInfo_centerside_info2_phone">
                <div className="PatientInfo_centerside_info2_phone_icon">
                  <OBTButton
                    type={OBTButton.Type.icon}
                    imageUrl={{ normal: callIcon }}
                    width={"16px"}
                    height={"16px"}
                    tooltip={{
                      labelText: "전화번호",
                    }}
                  />
                </div>
                <div className="PatientInfo_centerside_info2_phone_content">
                  {phoneFormatFun(selectedPatientDB.clph_no)}
                </div>
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
      <React.Fragment>
        <PatientCreateForm
          open={modalOpen}
          close={closeModal}
          header={"환자등록"}
        />
      </React.Fragment>
    </div>
  );
}
export default PatientInfo;
