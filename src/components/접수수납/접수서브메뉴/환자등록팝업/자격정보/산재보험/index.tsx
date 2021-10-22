import {
  OBTFormPanel,
  OBTTextField,
  OBTDatePeriodPicker,
  OBTDatePicker,
  OBTTimePicker,
} from "luna-orbit";
import { useState } from "react";
import moment from "moment";

function IndustrialInsurance() {
  const [IndustInsur, setIndustInsur] = useState({
    companyName: "",
    adaptDate: "",
    expireDate: "",
    occurDate: "",
    approvalExtensionDate: "",
    approvalDate: "",
    approvalNo: "",
  });
  return (
    <OBTFormPanel labelTextAlign={OBTFormPanel.Align.right} disabled={false}>
      <tbody>
        <tr>
          <th>소속사업장명</th>
          <td>
            <OBTTextField
              value={IndustInsur.companyName}
              onChange={(e) =>
                setIndustInsur({ ...IndustInsur, companyName: e.value })
              }
              placeHolder={"회사명을 입력하세요."}
            />
          </td>
        </tr>
        <tr>
          <th>자격적용일자</th>
          <td>
            <OBTDatePicker
              value={IndustInsur.adaptDate}
              onChange={(e) =>
                setIndustInsur({ ...IndustInsur, adaptDate: e.value })
              }
              inputStyle={{ width: "110px" }}
            />
          </td>
          <th>자격만료일자</th>
          <td>
            <OBTDatePicker
              value={IndustInsur.expireDate}
              onChange={(e) =>
                setIndustInsur({ ...IndustInsur, expireDate: e.value })
              }
              inputStyle={{ width: "110px" }}
            />
          </td>
        </tr>
        <tr>
          <th>재해발생일자</th>
          <td>
            <OBTDatePicker
              value={IndustInsur.adaptDate}
              onChange={(e) =>
                setIndustInsur({ ...IndustInsur, adaptDate: e.value })
              }
              inputStyle={{ width: "110px" }}
            />
          </td>
        </tr>
        <tr>
          <th>승인연장일</th>
          <td>
            <OBTDatePicker
              value={IndustInsur.approvalExtensionDate}
              onChange={(e) =>
                setIndustInsur({
                  ...IndustInsur,
                  approvalExtensionDate: e.value,
                })
              }
              inputStyle={{ width: "110px" }}
            />
          </td>
          <th>승인일자</th>
          <td>
            <OBTDatePicker
              value={IndustInsur.approvalDate}
              onChange={(e) =>
                setIndustInsur({ ...IndustInsur, approvalDate: e.value })
              }
              inputStyle={{ width: "110px" }}
            />
          </td>
        </tr>
        <tr>
          <th>승인번호</th>
          <td>
            <OBTTextField
              value={IndustInsur.approvalNo}
              onChange={(e) =>
                setIndustInsur({ ...IndustInsur, approvalNo: e.value })
              }
              placeHolder={"회사명을 입력하세요."}
            />
          </td>
        </tr>
      </tbody>
    </OBTFormPanel>
  );
}
export default IndustrialInsurance;
