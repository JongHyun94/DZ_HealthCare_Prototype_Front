import {
  OBTFormPanel,
  OBTTextField,
  OBTDatePeriodPicker,
  OBTDatePicker,
  OBTTimePicker,
  OBTDropDownList2,
} from "luna-orbit";
import { useState } from "react";
function SpecialCalcInfo() {
  const [sEntend, setSExtend] = useState({
    specialExtendNo: "",

    vCode: "",
    vCodeName: "",

    specialCode: "",

    specialName: "",
    nCode: "",

    adaptPeriod: { from: "", to: "" },
  });
  return (
    <OBTFormPanel labelTextAlign={OBTFormPanel.Align.right} disabled={false}>
      <tbody>
        <tr>
          <th>산정특례등록번호</th>
          <td>
            <OBTTextField
              value={sEntend.specialExtendNo}
              onChange={(e) =>
                setSExtend({ ...sEntend, specialExtendNo: e.value })
              }
              placeHolder={""}
            />
          </td>
        </tr>
        <tr>
          <th>특정기호(V코드)</th>
          <td>
            <OBTTextField
              value={sEntend.vCode}
              onChange={(e) => setSExtend({ ...sEntend, vCode: e.value })}
              placeHolder={""}
            />
          </td>
          <th>특정기호명</th>
          <td>
            <OBTTextField
              value={sEntend.vCodeName}
              onChange={(e) => setSExtend({ ...sEntend, vCodeName: e.value })}
              placeHolder={""}
            />
          </td>
        </tr>
        <tr>
          <th>산정특례상명기호</th>
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
              value={sEntend.specialCode}
              onChange={(e) => setSExtend({ ...sEntend, specialCode: e.value })}
            />
          </td>
        </tr>
        <tr>
          <th>산정특례자격명</th>
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
              value={sEntend.specialName}
              onChange={(e) => setSExtend({ ...sEntend, specialName: e.value })}
            />
          </td>
          <th>M코드(희귀난치)</th>
          <td>
            <OBTTextField
              value={sEntend.nCode}
              onChange={(e) => setSExtend({ ...sEntend, nCode: e.value })}
              placeHolder={""}
            />
          </td>
        </tr>
        <tr>
          <th>적용기간</th>
          <td>
            <OBTDatePicker
              type={OBTDatePicker.Type.period}
              value={sEntend.adaptPeriod}
              onChange={(e) => setSExtend({ ...sEntend, adaptPeriod: e.value })}
              inputStyle={{ width: "90px" }}
            />
          </td>
        </tr>
      </tbody>
    </OBTFormPanel>
  );
}
export default SpecialCalcInfo;
