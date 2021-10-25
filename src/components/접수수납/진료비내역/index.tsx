import "./style.css";
import {
  OBTTextField,
  OBTFormPanel,
  OBTDropDownList2,
  OBTCheckBox,
  OBTDatePicker,
  OBTMultiLineTextField,
  OBTNumberField,
  OBTSplitButton,
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
      {selectedPatient ? (
          <>
      <div className="MedicalExpense_payment">
        <div className="MedicalExpense_payment_totalprice">
          <div className="MedicalExpense_payment_totalprice_left">
            납부할 금액
          </div>
          <div className="MedicalExpense_payment_totalprice_right">
            123,456원
          </div>
        </div>
        <div className="MedicalExpense_payment_btns">
          <div className="MedicalExpense_payment_btns_cancel">
            <button className="payCancelBtn">취소/환불</button>
          </div>
          <div className="MedicalExpense_payment_btns_pays">
            <div className="MedicalExpense_payment_btns_pays_pay">
              {/* <button className="payBtn">수납</button> */}
              <OBTSplitButton 
                value={[
                  {key: 0, labelText:"수납"},
                  {key: 1, labelText:"전체출력"},
                  {key: 2, labelText:"환자보관용"},
                  {key: 3, labelText:"약국제출용"}]} 
                motionType={OBTSplitButton.MotionType.dropDown} />
            </div>
            <div className="MedicalExpense_payment_btns_pays_receipt">
              <button className="receiptBtn">수납+영수증출력</button>
            </div>
          </div>
        </div>
        <div className="MedicalExpense_payment_extends">
        <div className="MedicalExpense_payment_extends_item">환자처방전</div>
        <div className="MedicalExpense_payment_extends_item">진단서</div>
        <div className="MedicalExpense_payment_extends_item">영수증</div>
        <div className="MedicalExpense_payment_extends_item">진료비 세부 산정내역</div>
        </div>
      </div>
      </>
      ): false}
    </div>
  );
}
export default MedicalExpense;
