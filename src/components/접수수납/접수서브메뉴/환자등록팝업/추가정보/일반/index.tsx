import {
  OBTFormPanel,
  OBTTextField,
  OBTDatePeriodPicker,
  OBTDatePicker,
  OBTTimePicker,
  OBTDropDownList2,
  OBTCheckBox,
} from "luna-orbit";
import { useState } from "react";
import "./style.css";
function GeneralInfo() {
  const [gExtend, setGExtend] = useState({
    contractorName: "",
    vip: false,
    foreignYN: true,
    foreign: "",
    passportNo: "",
    reduction: "",
    guardianName: "",
    phone1: "",
    phone2: "",
    phone3: "",
    pregnant: false,
    happyCard: "",
    calcRegiNo: "",
    calcDate: "",
    period: { from: "", to: "" },
  });
  return (
    <OBTFormPanel labelTextAlign={OBTFormPanel.Align.right} disabled={false}>
      <tbody>
        <tr>
          <th>계약자명</th>
          <td>
            <OBTDropDownList2
              displayType={OBTDropDownList2.DisplayType.text}
              list={[
                { value: "", text: "선택하세요." },
                { value: "1", text: "김더존." },
              ]}
              value={gExtend.contractorName}
              onChange={(e) =>
                setGExtend({
                  ...gExtend,
                  contractorName: e.value,
                })
              }
            />
          </td>
          <th>VIP 유무</th>
          <td>
            <OBTCheckBox
              value={gExtend.vip}
              labelText=""
              onChange={(e) => {
                setGExtend({ ...gExtend, vip: e.value });
              }}
            />
          </td>
        </tr>
        <tr>
          <th>국적</th>
          <td>
            <OBTCheckBox
              value={gExtend.foreignYN}
              labelText="외국인"
              onChange={(e) => {
                setGExtend({ ...gExtend, foreignYN: e.value });
              }}
              width={"100px"}
            />

            <OBTDropDownList2
              displayType={OBTDropDownList2.DisplayType.text}
              list={[
                { value: "", text: "선택하세요" },
                { value: "A", text: "미국" },
                { value: "B", text: "중국" },
                { value: "AB", text: "일본" },
                { value: "O", text: "기타" },
              ]}
              value={gExtend.foreign}
              onChange={(e) => setGExtend({ ...gExtend, foreign: e.value })}
              width={"120px"}
              disabled={!gExtend.foreignYN}
            />
          </td>
          <th>여권번호</th>
          <td>
            <OBTTextField
              value={gExtend.passportNo}
              onChange={(e) => setGExtend({ ...gExtend, passportNo: e.value })}
            />
          </td>
        </tr>
        <tr>
          <th>감면종류</th>
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
              value={gExtend.reduction}
              onChange={(e) => setGExtend({ ...gExtend, reduction: e.value })}
              width={"235px"}
            />
          </td>
        </tr>
        <tr>
          <th>보호자 정보</th>
          <td>
            <OBTTextField
              value={gExtend.guardianName}
              onChange={(e) =>
                setGExtend({ ...gExtend, guardianName: e.value })
              }
            />
          </td>
          <th>연락처</th>
          <td>
            <OBTTextField
              value={gExtend.phone1}
              onChange={(e) => setGExtend({ ...gExtend, phone1: e.value })}
              // maxLength={4}
              width={"60px"}
            />
            -
            <OBTTextField
              value={gExtend.phone2}
              onChange={(e) => setGExtend({ ...gExtend, phone2: e.value })}
              // maxLength={4}
              width={"60px"}
            />
            -
            <OBTTextField
              value={gExtend.phone3}
              onChange={(e) => setGExtend({ ...gExtend, phone3: e.value })}
              // maxLength={4}
              width={"60px"}
            />
          </td>
        </tr>
        <tr>
          <th>임신여부</th>
          <td>
            <label className="switch">
              <input type="checkbox" checked={gExtend.pregnant} />
              <span
                className="slider round"
                onClick={() =>
                  setGExtend({ ...gExtend, pregnant: !gExtend.pregnant })
                }
              ></span>
            </label>
          </td>
        </tr>
        {gExtend.pregnant ? (
          <>
            <tr>
              <th>국민행복카드</th>
              <td>
                <OBTTextField
                  value={gExtend.happyCard}
                  onChange={(e) =>
                    setGExtend({ ...gExtend, happyCard: e.value })
                  }
                  width={"235px"}
                />
              </td>
            </tr>
            <tr>
              <th>산정대상등록번호</th>
              <td>
                <OBTTextField
                  value={gExtend.calcRegiNo}
                  onChange={(e) =>
                    setGExtend({ ...gExtend, calcRegiNo: e.value })
                  }
                  width={"235px"}
                />
              </td>
              <th>산정진료날짜</th>
              <td>
                <OBTDatePicker
                  format={OBTDatePicker.Format.YYYYMMDD}
                  value={gExtend.calcDate}
                  onChange={(e) =>
                    setGExtend({ ...gExtend, calcDate: e.value })
                  }
                  inputStyle={{ width: "155px" }}
                />
              </td>
            </tr>
            <tr>
              <th>지원금적용기간</th>
              <td>
                <OBTDatePicker
                  type={OBTDatePicker.Type.period}
                  value={gExtend.period}
                  onChange={(e) => setGExtend({ ...gExtend, period: e.value })}
                  inputStyle={{ width: "90px" }}
                />
              </td>
            </tr>
          </>
        ) : (
          false
        )}
      </tbody>
    </OBTFormPanel>
  );
}
export default GeneralInfo;
