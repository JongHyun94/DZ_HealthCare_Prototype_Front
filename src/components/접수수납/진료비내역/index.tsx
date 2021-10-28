import "./style.css";
import {
  OBTFormPanel,
  OBTNumberField,
  OBTSplitButton,
  OBTTextField,
} from "luna-orbit";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { selPatientDB } from "../../../atoms/접수_수납/Recoils_접수_수납DB";
import docIcon from "./docIcon.png";
import { useEffect } from "react";
function MedicalExpense() {
  const [price, setPrice] = useState({
    price1: 0,
    price2: 0,
    price3: 0,
    price4: 0,
    price5: 0,
    price6: 0,
    price7: 0,
    // price8: 0,(2+4)
    // price9: 0,
    // price10: 0,
    // price11: 0,
    price12: 0,
    price13: 0,
    price14: 0,
    price15: 0,
  });
  const [price11, setPrice11] = useState({
    p1: 1000000,
    p1_: 0,
    p2: 1000000,
    p2_: 0,
    p3: 1000000,
    p3_: 0,
    p4: 1000000,
    p4_: 0,
  });
  const [selectedPatient, setSelectedPatient] = useRecoilState(selPatientDB);
  const [payOpen, setPayOpen] = useState(false);
  const openHandler = () => {
    setPayOpen(!payOpen);
  };
  const [payment, setPayment] = useState({
    card: 0,
    cardNo: "",
    letter: 0,
    letterNo: "",
    bank: 0,
  });
  
  useEffect(()=>{
    setPrice({
      price1: 10000,
      price2: 2000,
      price3: 0,
      price4: 0,
      price5: 0,
      price6: 0,
      price7: 0,
      // price8: 2000,
      // price9: 12000,
      // price10: 10000,
      // price11: 0,
      price12: 0,
      price13: 0,
      price14: 0,
      price15: 0,
    })
  },[selectedPatient]);
  return (
    <div className="MedicalExpense">
      <div className="MedicalExpense_header">
        <div className="MedicalExpense_header_left">
          <div className="MedicalExpense_header_left_icon">
            <img src={docIcon} alt="icon" width="20px" height="20px" />
          </div>
          <div className="MedicalExpense_header_left_content">진료비 내역</div>
        </div>
        <div className="MedicalExpense_header_right">
          <div className="MedicalExpense_header_right_title">
            진료비확인번호
          </div>
          <div className="MedicalExpense_header_right_no">
            {selectedPatient ? "1123-4432-1123" : false}
          </div>
        </div>
      </div>
      <div
        className={
          payOpen ? "MedicalExpense_content_Open" : "MedicalExpense_content"
        }
      >
        {selectedPatient ? (
          <>
            <OBTFormPanel
              labelTextAlign={OBTFormPanel.Align.center}
              disabled={false}
              width={"100%"}
            >
              <tbody>
                <tr>
                  <th rowSpan={2}>급여</th>
                  <th>①본인부담금액</th>
                  <td colSpan={2}>
                    <div className="prices">{price.price1}원</div>
                  </td>
                </tr>
                <tr>
                  <th>②공단부담금액</th>
                  <td colSpan={2}>
                    <div className="prices">{price.price2}원</div>
                  </td>
                </tr>
                <tr>
                  <th rowSpan={2}>선별급여</th>
                  <th>③본인부담금액</th>
                  <td colSpan={2}>
                    <div className="prices">{price.price3}원</div>
                  </td>
                </tr>
                <tr>
                  <th>④공단부담금액</th>
                  <td colSpan={2}>
                    <div className="prices">{price.price4}원</div>
                  </td>
                </tr>
                <tr>
                  <th colSpan={2}>⑤본인부담상한금액</th>
                  <td colSpan={2}>
                    <div className="prices">{price.price5}원</div>
                  </td>
                </tr>
                <tr>
                  <th colSpan={2}>⑥전액본인부담 총금액</th>
                  <td colSpan={2}>
                    <div className="prices">{price.price6}원</div>
                  </td>
                </tr>
                <tr>
                  <th colSpan={2}>⑦비급여 총금액</th>
                  <td colSpan={2}>
                    <div className="prices">{price.price7}원</div>
                  </td>
                </tr>
                <tr>
                  <th colSpan={2}>
                    <div className="numbers_group">
                      <div className="numbers_title">⑧공단부담 총액</div>
                      <div className="numbers">(②+④)</div>
                    </div>
                  </th>
                  <td colSpan={2}>
                    <div className="prices">{price.price2 + price.price4}원</div>
                  </td>
                </tr>
                <tr>
                  <th colSpan={2}>
                    <div className="numbers_group">
                      <div className="numbers_title">⑨진료비 총액</div>
                      <div className="numbers">(①+②+③+④+⑥+⑦)</div>
                    </div>
                  </th>
                  <td colSpan={2}>
                    <div className="prices">{price.price1 + price.price2 + price.price3 + price.price4 + price.price6 + price.price7}원</div>
                  </td>
                </tr>
                <tr>
                  <th colSpan={2}>
                    <div className="numbers_group">
                      <div className="numbers_title">⑩환자부담 총액</div>
                      <div className="numbers">(((①+③)-⑤)+⑥+⑦)</div>
                    </div>
                  </th>
                  <td colSpan={2}>
                    <div className="prices">{price.price1 + price.price3 - price.price5 + price.price6 + price.price7}원</div>
                  </td>
                </tr>
                <tr>
                  <th rowSpan={8}>⑪지원금</th>
                  <th>임신출산지원금잔액</th>
                  <td colSpan={2}>
                    <div className="prices">{price11.p1 - price11.p1_}원</div>
                  </td>
                </tr>
                <tr>
                  <th>사용금액</th>
                  <td colSpan={2}>
                    <OBTNumberField
                      value={price11.p1_}
                      onChange={(e) =>
                        {
                        setPrice11({
                          ...price11,
                          p1_: (isNaN(parseInt("" + e.value))) ? 0 : parseInt("" + e.value),
                        })
                        console.log(e.value);
                      }
                      }
                      placeHolder={"사용금액을 입력하세요."}
                    />
                  </td>
                </tr>
                <tr>
                  <th>지원금(희귀/결핵)</th>
                  <td colSpan={2}>
                    <div className="prices">{price11.p2 - price11.p2_}원</div>
                  </td>
                </tr>
                <tr>
                  <th>사용금액</th>
                  <td colSpan={2}>
                    <OBTNumberField
                      value={price11.p2_}
                      onChange={(e) =>
                        {
                        setPrice11({
                          ...price11,
                          p2_: (isNaN(parseInt("" + e.value))) ? 0 : parseInt("" + e.value),
                        })
                        console.log(e.value);
                      }
                      }
                      placeHolder={"사용금액을 입력하세요."}
                    />
                  </td>
                </tr>
                <tr>
                  <th>장애인의료비</th>
                  <td colSpan={2}>
                    <div className="prices">{price11.p3 - price11.p3_}원</div>
                  </td>
                </tr>
                <tr>
                  <th>사용금액</th>
                  <td colSpan={2}>
                    <OBTNumberField
                      value={price11.p3_}
                      onChange={(e) =>
                        {
                        setPrice11({
                          ...price11,
                          p3_: (isNaN(parseInt("" + e.value))) ? 0 : parseInt("" + e.value),
                        })
                        console.log(e.value);
                      }
                      }
                      placeHolder={"사용금액을 입력하세요."}
                    />
                  </td>
                </tr>
                <tr>
                  <th>예방접종지원금</th>
                  <td colSpan={2}>
                    <div className="prices">{price11.p4 - price11.p4_}원</div>
                  </td>
                </tr>
                <tr>
                  <th>사용금액</th>
                  <td colSpan={2}>
                    <OBTNumberField
                      value={price11.p4_}
                      onChange={(e) =>
                        {
                        setPrice11({
                          ...price11,
                          p4_: (isNaN(parseInt("" + e.value))) ? 0 : parseInt("" + e.value),
                        })
                        console.log(e.value);
                      }
                      }
                      placeHolder={"사용금액을 입력하세요."}
                    />
                  </td>
                </tr>
                <tr>
                  <th colSpan={2}>⑫총미수액</th>
                  <td colSpan={2}>
                    <div className="prices">{price.price12}원</div>
                  </td>
                </tr>
                <tr>
                  <th colSpan={2}>⑬이미 납부한 금액</th>
                  <td colSpan={2}>
                    <div className="prices">{price.price13}원</div>
                  </td>
                </tr>
                <tr>
                  <th colSpan={2}>⑭건강생활유지비</th>
                  <td colSpan={2}>
                    <div className="prices">{price.price14}원</div>
                  </td>
                </tr>
                <tr>
                  <th colSpan={2}>건강생활유지비잔액</th>
                  <td colSpan={2}>
                    <div className="prices">1,000,000원</div>
                  </td>
                </tr>
                <tr>
                  <th colSpan={2}>⑮감액금액</th>
                  <td colSpan={2}>
                    <OBTNumberField
                      value={price.price15}
                      onChange={(e) =>
                        {
                        setPrice({
                          ...price,
                          price15: (isNaN(parseInt("" + e.value))) ? 0 : parseInt("" + e.value),
                        })
                        console.log(e.value);
                      }
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
          <div
            className={
              payOpen ? "MedicalExpense_payment_Open" : "MedicalExpense_payment"
            }
          >
            <div className="MedicalExpense_payment_btnArea">
              <div
                className="MedicalExpense_payment_btnArea_openBtn"
                onClick={openHandler}
              >
                <div
                  className={
                    payOpen
                      ? "MedicalExpense_payment_btnArea_openBtn_triangleDown"
                      : "MedicalExpense_payment_btnArea_openBtn_triangleUp"
                  }
                ></div>
              </div>
            </div>
            <div className="MedicalExpense_payment_totalprice">
              <div className="MedicalExpense_payment_totalprice_left">
                <div className="MedicalExpense_payment_totalprice_left_title">
                  납부할 금액
                </div>
                <div className="MedicalExpense_payment_totalprice_left_calc">
                  (⑩-⑪+⑫-⑬-⑭-⑮)
                </div>
              </div>
              <div className="MedicalExpense_payment_totalprice_right">
                {parseInt(
                  String(
                      (price.price1 + price.price3 - price.price5 + price.price6 + price.price7) -
                      (price11.p1_ + price11.p2_ + price11.p3_ + price11.p4_) + 
                      price.price12 -
                      price.price13 -
                      price.price14 -
                      price.price15
                  )
                )}
                원
              </div>
            </div>

            <div
              className={
                payOpen
                  ? "MedicalExpense_payment_extend_open"
                  : "MedicalExpense_payment_extend_close"
              }
            >
              <div className="MedicalExpense_payment_extend_1">
                <div className="MedicalExpense_payment_itemGroup">
                  <div className="MedicalExpense_payment_itemGroup_item">
                    <div className="MedicalExpense_payment_itemGroup_item_label">
                      카드결제 금액
                    </div>
                    <div className="MedicalExpense_payment_itemGroup_item_textForm">
                      <OBTNumberField
                        placeHolder={"결제금액을 입력하세요."}
                        value={payment.card}
                        onChange={(e) =>
                          setPayment({
                            ...payment,
                            card: (isNaN(parseInt("" + e.value))) ? 0 : parseInt("" + e.value),
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="MedicalExpense_payment_itemGroup_item">
                    <div className="MedicalExpense_payment_itemGroup_item_label">
                      카드승인번호
                    </div>
                    <div className="MedicalExpense_payment_itemGroup_item_textForm">
                      <OBTTextField
                        value={payment.cardNo}
                        onChange={(e) =>
                          setPayment({
                            ...payment,
                            cardNo: e.value,
                          })
                        }
                        readonly
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="MedicalExpense_payment_extend_1">
                <div className="MedicalExpense_payment_itemGroup">
                  <div className="MedicalExpense_payment_itemGroup_item">
                    <div className="MedicalExpense_payment_itemGroup_item_label">
                      현금수납 금액
                    </div>
                    <div className="MedicalExpense_payment_itemGroup_item_textForm">
                      <OBTNumberField
                        placeHolder={"결제금액을 입력하세요."}
                        value={payment.letter}
                        onChange={(e) =>
                          setPayment({
                            ...payment,
                            letter: (isNaN(parseInt("" + e.value))) ? 0 : parseInt("" + e.value),
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="MedicalExpense_payment_itemGroup_item">
                    <div className="MedicalExpense_payment_itemGroup_item_label">
                      현금영수증 승인번호
                    </div>
                    <div className="MedicalExpense_payment_itemGroup_item_textForm">
                      <OBTTextField
                        value={payment.letterNo}
                        onChange={(e) =>
                          setPayment({
                            ...payment,
                            letterNo: e.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="MedicalExpense_payment_extend_2">
                <div className="MedicalExpense_payment_itemGroup_item">
                  <div className="MedicalExpense_payment_itemGroup_item_label">
                    계좌이체 금액
                  </div>
                  <div className="MedicalExpense_payment_itemGroup_item_textForm">
                    <OBTNumberField
                      placeHolder={"수납금액을 입력하세요."}
                      value={payment.bank}
                      onChange={(e) =>
                        setPayment({
                          ...payment,
                          bank: parseInt("" + e.value),
                        })
                      }
                      width={"240px"}
                    />
                  </div>
                </div>
              </div>
              <div className="MedicalExpense_payment_extend_3">
                <div className="MedicalExpense_payment_itemGroup_item_label">
                  납부한 금액
                </div>
                <div className="MedicalExpense_payment_itemGroup_item_label">
                  {parseInt(String(payment.card + payment.letter))} 원
                </div>
              </div>
              <div className="MedicalExpense_payment_extend_3">
                <div className="MedicalExpense_payment_itemGroup_item_label">
                  미수금
                </div>
                <div className="MedicalExpense_payment_itemGroup_item_label">
                  - 원
                </div>
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
                      { key: 0, labelText: "수납" },
                      { key: 1, labelText: "전체출력" },
                      { key: 2, labelText: "환자보관용" },
                      { key: 3, labelText: "약국제출용" },
                    ]}
                    motionType={OBTSplitButton.MotionType.dropDown}
                    theme={OBTSplitButton.Theme.blue}
                  />
                </div>
                <div className="MedicalExpense_payment_btns_pays_receipt">
                  <button className="receiptBtn">수납+영수증출력</button>
                </div>
              </div>
            </div>
            <div className="MedicalExpense_payment_extends">
              <div className="MedicalExpense_payment_extends_item">
                환자처방전
              </div>
              <div className="MedicalExpense_payment_extends_item">진단서</div>
              <div className="MedicalExpense_payment_extends_item">영수증</div>
              <div className="MedicalExpense_payment_extends_item">
                진료비 세부 산정내역
              </div>
            </div>
          </div>
        </>
      ) : (
        false
      )}
    </div>
  );
}
export default MedicalExpense;
