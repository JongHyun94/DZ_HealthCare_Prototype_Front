import {
  OBTFormPanel,
  OBTTextField,
  OBTDatePeriodPicker,
  OBTDatePicker,
  OBTTimePicker,
  OBTDropDownList2,
} from "luna-orbit";
import { useState } from "react";
import moment from "moment";

function HealthInsurance() {
  const [healthInsur, setHealthInsur] = useState({
    eligibility: "",
    certificateNo: "",
    startDate: "",
    endDate: "",
    insuredName: "",
    selfPayClass: "",
    livingExpenses: "",
    secondUpperClass: "",
    subscribeClass: "",
    workplaceNo: "",
  });
  return (
    <OBTFormPanel labelTextAlign={OBTFormPanel.Align.right} disabled={false}>
      <tbody>
        <tr>
          <th>자격여부</th>
          <td>
            <OBTTextField
              value={healthInsur.eligibility}
              onChange={(e) =>
                setHealthInsur({ ...healthInsur, eligibility: e.value })
              }
              readonly
            />
          </td>
          <th>증번호</th>
          <td>
            <OBTTextField
              value={healthInsur.certificateNo}
              onChange={(e) =>
                setHealthInsur({ ...healthInsur, certificateNo: e.value })
              }
              readonly
            />
          </td>
        </tr>
        <tr>
          <th>자격취득일</th>
          <td>
            <OBTDatePicker
              value={healthInsur.startDate}
              onChange={(e) =>
                setHealthInsur({ ...healthInsur, startDate: e.value })
              }
              inputStyle={{ width: "110px" }}
              readonly
            />
          </td>
          <th>자격종료일</th>
          <td>
            <OBTDatePicker
              value={healthInsur.endDate}
              onChange={(e) =>
                setHealthInsur({ ...healthInsur, endDate: e.value })
              }
              inputStyle={{ width: "110px" }}
              readonly
            />
          </td>
        </tr>
        <tr>
          <th>피보험자명</th>
          <td>
            <OBTTextField
              value={healthInsur.insuredName}
              onChange={(e) =>
                setHealthInsur({ ...healthInsur, insuredName: e.value })
              }
            />
          </td>
          <th>본인부담구분</th>
          <td>
            <OBTDropDownList2
              displayType={OBTDropDownList2.DisplayType.text}
              list={[
                {value:"",text:"선택하세요."},
                {value:"1",text:"가나다."},
              ]}
              value={healthInsur.selfPayClass}
              onChange={(e) =>
                setHealthInsur({
                  ...healthInsur,
                  selfPayClass: e.value,
                })
              }
            />
          </td>
        </tr>
        <tr>
          <th>생활유지비잔액</th>
          <td>
            <OBTTextField
              value={healthInsur.livingExpenses}
              onChange={(e) =>
                setHealthInsur({ ...healthInsur, livingExpenses: e.value })
              }
            />
          </td>
          <th>차상위계층</th>
          <td>
            <OBTDropDownList2
              displayType={OBTDropDownList2.DisplayType.text}
              list={[
                {value:"",text:"선택하세요."},
                {value:"Y",text:"Y"},
                {value:"N",text:"N"},
              ]}
              value={healthInsur.secondUpperClass}
              onChange={(e) =>
                setHealthInsur({
                  ...healthInsur,
                  secondUpperClass: e.value,
                })
              }
            />
          </td>
        </tr>
        <tr>
          <th>가입자구분</th>
          <td>
            <OBTDropDownList2
              displayType={OBTDropDownList2.DisplayType.text}
              list={[
                {value:"",text:"선택하세요."},
                {value:"1",text:"가나다."},
              ]}
              value={healthInsur.subscribeClass}
              onChange={(e) =>
                setHealthInsur({
                  ...healthInsur,
                  subscribeClass: e.value,
                })
              }
            />
          </td>
          <th>사업장기호</th>
          <td>
            <OBTTextField
              value={healthInsur.workplaceNo}
              onChange={(e) =>
                setHealthInsur({ ...healthInsur, workplaceNo: e.value })
              }
            />
          </td>
        </tr>
      </tbody>
    </OBTFormPanel>
  );
}
export default HealthInsurance;
