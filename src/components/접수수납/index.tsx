import PatientVisitHistory from "./내원이력";
import RegistList from "./접수목록";
import MedicalExpense from "./진료비내역";
import PrescriptionInquiry from "./처방조회";
import PatientInfo from "./환자정보";
import "./Regist.css";
import Register from "./접수";
import SideMessenger from "../공통/메신저";
import PatientSearchBar from "./환자검색바";
import SubHeader from "../공통/Layout/SubHeader";

function Regist() {
  return (
    <>
      <div className="his-content">
        {/* 상단 */}
        {/* 환자검색 및 선택바 */}
        {/* <div className="Regist_upside">
          <SubHeader />
        </div> */}
        {/* 하단 */}
        <div className="Regist_downside">
          {/* 접수목록 */}
          <div className="Regist_downside_RegistList">
            <RegistList />
          </div>
          {/* 본문 */}
          <div className="Regist_downside_mainside">
            <div className="Regist_downside_mainside_main">
              <div className="Regist_downside_mainside_main_leftside">
                <div className="Regist_downside_mainside_main_leftside_1">
                  <div className="Regist_downside_mainside_main_leftside_1_1">
                    {/* 환자정보 */}
                    <PatientInfo />
                  </div>
                  {/* 접수 및 예약 */}
                  <div className="Regist_downside_mainside_main_leftside_1_2">
                    <Register />
                  </div>
                </div>
                {/* 내원이력 */}
                <div className="Regist_downside_mainside_main_leftside_2">
                  <PatientVisitHistory />
                </div>
                {/* 처방조회 */}
                <div className="Regist_downside_mainside_main_leftside_3">
                  <PrescriptionInquiry />
                </div>
              </div>
              {/* 진료비 내역 */}
              <div className="Regist_downside_mainside_main_rightside">
                <MedicalExpense />
              </div>
            </div>
            {/* 메신저 사이드바 */}
            <div className="Regist_downside_mainside_side">
              <SideMessenger />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Regist;
