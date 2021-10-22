import {
  OBTFormPanel,
  OBTTextField,
  OBTDatePeriodPicker,
  OBTDatePicker,
  OBTTimePicker,
} from "luna-orbit";
import { useState } from "react";
import moment from "moment";

function CarInsurance() {
  const [carInsur, setCarInsur] = useState({
    companyName: "",
    period: {
      from: moment().format("YYYYMMDD"),
      to: moment().format("YYYYMMDD"),
    },
    carName: "",
    carAccidentDate: moment().format("YYYYMMDD"),
    carAccidentTime: "",
    carAccidentId: "",
    guaranteeNo: "",
  });
  return (
    <OBTFormPanel labelTextAlign={OBTFormPanel.Align.right} disabled={false}>
      <tbody>
        <tr>
          <th>자보회사명</th>
          <td>
            <OBTTextField
              value={carInsur.companyName}
              onChange={(e) =>
                setCarInsur({ ...carInsur, companyName: e.value })
              }
              placeHolder={"회사명을 입력하세요."}
            />
          </td>
        </tr>
        <tr>
          <th>자격적용기간</th>
          <td>
            <OBTDatePicker
              type={OBTDatePicker.Type.period}
              value={carInsur.period}
              onChange={(e) => setCarInsur({ ...carInsur, period: e.value })}
              inputStyle={{ width: "90px" }}
            />
          </td>
        </tr>
        <tr>
          <th>차량번호</th>
          <td>
            <OBTTextField
              value={carInsur.carName}
              onChange={(e) => setCarInsur({ ...carInsur, carName: e.value })}
              placeHolder={"차량번호를 입력하세요."}
            />
          </td>
        </tr>
        <tr>
          <th>사고일시</th>
          <td>
            <OBTDatePicker
              format={OBTDatePicker.Format.YYYYMMDD}
              value={carInsur.carAccidentDate}
              onChange={(e) =>
                setCarInsur({ ...carInsur, carAccidentDate: e.value })
              }
              inputStyle={{ width: "100px" }}
            />
            <OBTTimePicker
              value={carInsur.carAccidentTime}
              onChange={(e) =>
                setCarInsur({ ...carInsur, carAccidentTime: e.value })
              }
            />
          </td>
          <th>사고접수번호</th>
          <td>
            <OBTTextField
              value={carInsur.carAccidentId}
              onChange={(e) => setCarInsur({ ...carInsur, carAccidentId: e.value })}
              placeHolder={"사고접수번호를 입력하세요."}
              width={"120px"}
            />
          </td>
        </tr>
        <tr>
          <th>지급보증번호</th>
          <td>
            <OBTTextField
              value={carInsur.guaranteeNo}
              onChange={(e) => setCarInsur({ ...carInsur, guaranteeNo: e.value })}
              placeHolder={"지급보증번호를 입력하세요."}
            />
          </td>
        </tr>
      </tbody>
    </OBTFormPanel>
  );
}
export default CarInsurance;
