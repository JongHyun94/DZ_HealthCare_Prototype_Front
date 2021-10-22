import {
  OBTFormPanel,
  OBTTextField,
  OBTDatePeriodPicker,
  OBTDatePicker,
  OBTTimePicker,
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

    adaptPeriod: {from: "", to: ""}
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
    </tbody>
  </OBTFormPanel>
  );
};
export default SpecialCalcInfo;