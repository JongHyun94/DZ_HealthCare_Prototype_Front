import style from "./style.module.css";
import { OBTButton, OBTSnackbar } from "luna-orbit";
import { useState } from "react";
import PatientInfoTable from "./기본정보";
import PatientQualificationTable from "./자격정보";
import PatientExtendTable from "./추가정보";
function PatientCreateForm(props) {
  const { open, close, header } = props;
  const [successSnackbar, setSuccessSnackbar] = useState(false);
  const createBtn = async () => {
    setSuccessSnackbar(true);
    close();
  };
  return (
    <>
      <div
        className={
          open ? `${style.openModal} ${style.modal}` : `${style.modal}`
        }
      >
        {open ? (
          <div className={style.PatientCreateForm_section}>
            <div className={style.PatientCreateForm_header}>
              {header}
              <div className={style.close}>
              <OBTButton  
                labelText={"X"} onClick={close}>
              </OBTButton>
              </div>
            </div>
            <div className={style.PatientCreateForm_main}>
             <PatientInfoTable/>
             <PatientQualificationTable/>
             <PatientExtendTable/>
            </div>
            <div className={style.PatientCreateForm_footer}>
              <OBTButton labelText={"취소"} onClick={close}></OBTButton>
              <OBTButton labelText={"등록"} onClick={createBtn} theme={OBTButton.Theme.blue}></OBTButton>
            </div>
          </div>
        ) : 
        null}
      </div>
      {successSnackbar === true && (
            <OBTSnackbar
              labelText={"등록이 되었습니다."}
              type={OBTSnackbar.Type.success}
              key="success"
              open={successSnackbar}
              onChange={(e) => setSuccessSnackbar(false)}
            />
      )}
    </>
  );
}
export default PatientCreateForm;
