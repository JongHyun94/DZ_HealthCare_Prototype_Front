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
function DisabledInfo() {
  const [dExtend, setDExtend] = useState({
    dCardNo: "",
    dDistCd: "",
    dDegree: "",
    period: { from: "", to: "" },
  });
  return (
    <OBTFormPanel labelTextAlign={OBTFormPanel.Align.right} disabled={false}>
      <tbody>
        <tr>
          <th>장애인카드번호</th>
          <td>
            <OBTTextField
              value={dExtend.dCardNo}
              onChange={(e) => setDExtend({ ...dExtend, dCardNo: e.value })}
            />
          </td>
        </tr>
        <tr>
          <th>장애구분</th>
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
              value={dExtend.dDistCd}
              onChange={(e) => setDExtend({ ...dExtend, dDistCd: e.value })}
            />
          </td>
          <th>장애정도</th>
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
              value={dExtend.dDegree}
              onChange={(e) => setDExtend({ ...dExtend, dDegree: e.value })}
            />
          </td>
        </tr>
        <tr>
          <th>적용기간</th>
          <td>
            <OBTDatePicker
              type={OBTDatePicker.Type.period}
              value={dExtend.period}
              onChange={(e) => setDExtend({ ...dExtend, period: e.value })}
              inputStyle={{ width: "90px" }}
            />
          </td>
        </tr>
      </tbody>
    </OBTFormPanel>
  );
}
export default DisabledInfo;
