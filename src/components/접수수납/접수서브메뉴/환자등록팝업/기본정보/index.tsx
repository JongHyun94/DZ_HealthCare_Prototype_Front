import {
  OBTTextField,
  OBTFormPanel,
  OBTDropDownList2,
  OBTCheckBox,
  OBTDatePicker,
  OBTMultiLineTextField,
  OBTNumberField,
  OBTButton,
} from "luna-orbit";
import React, { useState } from "react";
import { DaumAddrPop } from "./DaumAddrPop";
import "./style.css";
function PatientInfoTable() {
  const [info, setInfo] = useState({
    pid: "",
    name: "",
    sex: "",
    blood: "",
    rh: false,
    ssnPre: "",
    ssnPost: "",
    birth: new Date(),
    tel1: "",
    tel2: "",
    tel3: "",
    phone1: "",
    phone2: "",
    phone3: "",
    email1: "",
    email2: "",
    addr1: "",
    addr2: "",
    addr3: "",
    addr4: "",
    memo: "",
    smsCheck: true,
    emailCheck: true,
  });

  const [opneDaumApi, setOpenDaumApi] = useState(false);
  const openDaumApi = () => {
    //event.preventDefault();
    setOpenDaumApi(true);
  };
  const closeDaumApi = () => {
    setOpenDaumApi(false);
  };

  const sendModal = (data) => {
    setOpenDaumApi(false);
    setInfo({
      ...info,
      addr1: data.zonecode,
      addr2: data.address,
    });
    if (data.buildingName === "") {
      setInfo((prevInfo) => {
        return {
          ...prevInfo,
          addr2: prevInfo.addr2 + " ( " + data.bname + " )",
        };
      });
    } else {
      setInfo((prevInfo) => {
        return {
          ...prevInfo,
          addr2:
            prevInfo.addr2 +
            " ( " +
            data.bname +
            ", " +
            data.buildingName +
            " )",
        };
      });
    }
  };

  return (
    <div className="PatientInfoTable">
      <div className="PatientInfoTable_header">기본정보</div>
      <div className="PatientInfoTable_content">
        <OBTFormPanel
          labelTextAlign={OBTFormPanel.Align.right}
          disabled={false}
          // width={"760px"}
        >
          <tbody>
            <tr>
              <th>환자등록번호</th>
              <td>
                <OBTTextField
                  value={info.pid}
                  onChange={(e) => setInfo({ ...info, pid: e.value })}
                  readonly
                />
              </td>
            </tr>
            <tr>
              <th>성명</th>
              <td>
                <OBTTextField
                  value={info.name}
                  onChange={(e) => setInfo({ ...info, name: e.value })}
                />
              </td>
              <th>성별</th>
              <td>
                <OBTDropDownList2
                  displayType={OBTDropDownList2.DisplayType.text}
                  list={[
                    { value: "", text: "선택하세요" },
                    { value: "M", text: "남성" },
                    { value: "F", text: "여성" },
                    { value: "U", text: "중성" },
                  ]}
                  value={info.sex}
                  onChange={(e) => setInfo({ ...info, sex: e.value })}
                />
              </td>
            </tr>
            <tr>
              <th>혈액형</th>
              <td>
                <OBTDropDownList2
                  displayType={OBTDropDownList2.DisplayType.text}
                  list={[
                    { value: "", text: "선택하세요" },
                    { value: "A", text: "A형" },
                    { value: "B", text: "B형" },
                    { value: "AB", text: "AB형" },
                    { value: "O", text: "O형" },
                  ]}
                  value={info.blood}
                  onChange={(e) => setInfo({ ...info, blood: e.value })}
                  width={"120px"}
                />
                <OBTCheckBox
                  value={info.rh}
                  labelText="RH-"
                  onChange={(e) => {
                    setInfo({ ...info, rh: e.value });
                  }}
                />
              </td>
            </tr>
            <tr>
              <th>주민번호</th>
              <td>
                <OBTTextField
                  value={info.ssnPre}
                  onChange={(e) => setInfo({ ...info, ssnPre: e.value })}
                />
                -
                <OBTTextField
                  value={info.ssnPost}
                  onChange={(e) => setInfo({ ...info, ssnPost: e.value })}
                />
              </td>
              <th>생년월일</th>
              <td>
                <OBTDatePicker
                  format={OBTDatePicker.Format.YYYYMMDD}
                  value={info.birth}
                  onChange={(e) => setInfo({ ...info, birth: e.value })}
                  inputStyle={{ width: "170px" }}
                />
              </td>
            </tr>
            <tr>
              <th>전화번호</th>
              <td>
                <OBTDropDownList2
                  displayType={OBTDropDownList2.DisplayType.text}
                  list={[
                    { value: "", text: "지역" },
                    { value: "02", text: "02" },
                    { value: "031", text: "031" },
                    { value: "032", text: "032" },
                    { value: "033", text: "033" },
                    { value: "041", text: "041" },
                    { value: "042", text: "042" },
                    { value: "043", text: "043" },
                    { value: "044", text: "044" },
                    { value: "051", text: "051" },
                    { value: "052", text: "052" },
                    { value: "O53", text: "053" },
                    { value: "054", text: "054" },
                    { value: "055", text: "055" },
                    { value: "061", text: "061" },
                    { value: "062", text: "062" },
                    { value: "063", text: "063" },
                    { value: "064", text: "064" },
                  ]}
                  value={info.tel1}
                  onChange={(e) => setInfo({ ...info, tel1: e.value })}
                  width={"60px"}
                />
                -
                <OBTTextField
                  value={info.tel2}
                  onChange={(e) => setInfo({ ...info, tel2: e.value })}
                  width={"60px"}
                />
                -
                <OBTTextField
                  value={info.tel3}
                  onChange={(e) => setInfo({ ...info, tel3: e.value })}
                  width={"60px"}
                />
              </td>
              <th>핸드폰번호</th>
              <td>
                <OBTDropDownList2
                  displayType={OBTDropDownList2.DisplayType.text}
                  list={[
                    { value: "", text: "선택" },
                    { value: "010", text: "010" },
                    { value: "011", text: "011" },
                    { value: "016", text: "016" },
                    { value: "017", text: "017" },
                    { value: "018", text: "018" },
                    { value: "019", text: "019" },
                  ]}
                  value={info.phone1}
                  onChange={(e) => setInfo({ ...info, phone1: e.value })}
                  width={"60px"}
                />
                -
                <OBTTextField
                  value={info.phone2}
                  onChange={(e) => setInfo({ ...info, phone2: e.value })}
                  // maxLength={4}
                  width={"60px"}
                />
                -
                <OBTTextField
                  value={info.phone3}
                  onChange={(e) => setInfo({ ...info, phone3: e.value })}
                  // maxLength={4}
                  width={"60px"}
                />
              </td>
            </tr>
            <tr>
              <th>이메일주소</th>
              <td colSpan={2}>
                <OBTTextField
                  value={info.email1}
                  onChange={(e) => setInfo({ ...info, email1: e.value })}
                  width={"110px"}
                />
                @
                <OBTTextField
                  value={info.email2}
                  onChange={(e) => setInfo({ ...info, email2: e.value })}
                  width={"100px"}
                />
                <OBTDropDownList2
                  displayType={OBTDropDownList2.DisplayType.text}
                  list={[
                    { value: "", text: "선택하세요" },
                    { value: "gmail.com", text: "gmail.com" },
                    { value: "naver.com", text: "naver.com" },
                    { value: "daum.com", text: "daum.com" },
                    { value: "hanmail.net", text: "hanmail.net" },
                    { value: "직접입력", text: "직접입력" },
                  ]}
                  value={info.email2}
                  onChange={(e) => setInfo({ ...info, email2: e.value })}
                  width={"100px"}
                />
              </td>
            </tr>
            <tr>
              <th rowSpan={2}>주소</th>
              <td>
                <OBTTextField
                  placeHolder={"우편번호"}
                  value={info.addr1}
                  onChange={(e) => setInfo({ ...info, addr1: e.value })}
                  width={"100px"}
                />
                <React.Fragment>
                  <OBTButton
                    labelText="주소검색"
                    type={OBTButton.Type.small}
                    theme={OBTButton.Theme.default}
                    onClick={openDaumApi}
                    width="80px"
                  />
                  <DaumAddrPop
                    open={opneDaumApi}
                    close={closeDaumApi}
                    send={sendModal}
                  />
                </React.Fragment>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <OBTTextField
                  placeHolder={"주소"}
                  value={info.addr2}
                  onChange={(e) => setInfo({ ...info, addr2: e.value })}
                />
              </td>
              <td colSpan={2}>
                <OBTTextField
                  placeHolder={"상세주소"}
                  value={info.addr3}
                  onChange={(e) => setInfo({ ...info, addr3: e.value })}
                />
              </td>
            </tr>
            <tr>
              <th>환자메모</th>
              <td>
                <OBTMultiLineTextField
                  value={info.memo}
                  fixed={true}
                  onChange={(e) => {
                    setInfo({ ...info, memo: e.value });
                  }}
                  maxByte={100}
                  placeHolder={"환자메모를 입력하세요."}
                />
              </td>
            </tr>
            <tr>
              <th>수신동의</th>
              <td>
                <OBTCheckBox
                  value={info.smsCheck}
                  labelText="SMS"
                  onChange={(e) => {
                    setInfo({ ...info, smsCheck: e.value });
                  }}
                />
                <OBTCheckBox
                  value={info.emailCheck}
                  labelText="이메일"
                  onChange={(e) => {
                    setInfo({ ...info, emailCheck: e.value });
                  }}
                />
              </td>
            </tr>
          </tbody>
        </OBTFormPanel>
      </div>
    </div>
  );
}
export default PatientInfoTable;
