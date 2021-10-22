// import fakeImg from "./진료비내역.png"
import "./style.css";
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
import { useRecoilState } from "recoil";
import { selPatientDB } from "../../../atoms/접수_수납/Recoils_접수_수납DB";
function MedicalExpense() {
  const [price, setPrice] = useState({
    salePrice: 0,
  });
  const [selectedPatient, setSelectedPatient] = useRecoilState(selPatientDB);
  return (
    <div className="MedicalExpense">
      <div className="MedicalExpense_header">
        <div className="MedicalExpense_header_left">진료비 내역</div>
        <div className="MedicalExpense_header_right">
          <div>진료비확인번호</div>
          <div>{selectedPatient ? "1123-4432-1123" : false}</div>
        </div>
      </div>
      <div className="MedicalExpense_content">
        {selectedPatient ? (
          <>
            <OBTFormPanel
              labelTextAlign={OBTFormPanel.Align.right}
              disabled={false}
            >
              <tbody>
                <tr>
                  <th rowSpan={2}>급여</th>
                  <th>본인부담금액</th>
                  <td>123456789원</td>
                </tr>
                <tr>
                  <th>공단부담금액</th>
                  <td>123456789원</td>
                </tr>
                <tr>
                  <th rowSpan={2}>선별급여</th>
                  <th>본인부담금액</th>
                  <td>123456789원</td>
                </tr>
                <tr>
                  <th>공단부담금액</th>
                  <td>123456789원</td>
                </tr>
                <tr>
                  <th colSpan={2}>본인부담상한금액</th>
                  <td>123456789원</td>
                </tr>
                <tr>
                  <th colSpan={2}>전액본인부담 총금액</th>
                  <td>123456789원</td>
                </tr>
                <tr>
                  <th colSpan={2}>비급여 총금액</th>
                  <td>123456789원</td>
                </tr>
                <tr>
                  <th colSpan={2}>공단부담 총액</th>
                  <td>123456789원</td>
                </tr>
                <tr>
                  <th colSpan={2}>진료비 총액</th>
                  <td>123456789원</td>
                </tr>
                <tr>
                  <th colSpan={2}>환자부담 총액</th>
                  <td>123456789원</td>
                </tr>
                <tr>
                  <th rowSpan={4}>지원금</th>
                  <th>임신출산지원금잔액</th>
                  <td>123456789원</td>
                </tr>
                <tr>
                  <th>지원금(희귀/결핵)</th>
                  <td>123456789원</td>
                </tr>
                <tr>
                  <th>장애인의료비</th>
                  <td>123456789원</td>
                </tr>
                <tr>
                  <th>예방접종지원금</th>
                  <td>123456789원</td>
                </tr>
                <tr>
                  <th colSpan={2}>총미수액</th>
                  <td>123456789원</td>
                </tr>
                <tr>
                  <th colSpan={2}>이미 납부한 금액</th>
                  <td>123456789원</td>
                </tr>
                <tr>
                  <th colSpan={2}>건강생활유지비</th>
                  <td>123456789원</td>
                </tr>
                <tr>
                  <th colSpan={2}>건강생활유지비잔액</th>
                  <td>123456789원</td>
                </tr>
                <tr>
                  <th colSpan={2}>감액금액</th>
                  <td>
                    <OBTNumberField
                      value={price.salePrice}
                      onChange={(e) =>
                        setPrice({
                          ...price,
                          salePrice: parseInt("" + e.value),
                        })
                      }
                      placeHolder={"감액금액을 입력하세요."}
                    />
                  </td>
                </tr>
              </tbody>
            </OBTFormPanel>
          </>
        ) : (
          false
        )}
      </div>
    </div>
  );
}
export default MedicalExpense;
