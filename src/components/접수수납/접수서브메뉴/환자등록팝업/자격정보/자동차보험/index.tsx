import { OBTFormPanel, OBTTextField } from "luna-orbit";
import { useState } from "react";

function CarInsurance() {
  const [carInsur, setCarInsur] = useState({
      companyName: "",

  });
  return (
    <OBTFormPanel
      labelTextAlign={OBTFormPanel.Align.right}
      disabled={false}
    >
      <tbody>
        <tr>
          <th>자보회사명</th>
          <td>
            <OBTTextField
              value={carInsur.companyName}
              onChange={(e) => setCarInsur({ ...carInsur, companyName: e.value })}
              
              readonly
            />
          </td>
        </tr>
        <tr>
          <th>자격적용기간</th>
          <td>
            <OBTTextField
              value={carInsur.companyName}
              onChange={(e) => setCarInsur({ ...carInsur, companyName: e.value })}
              readonly
            />
          </td>
        </tr>
        <tr>
          <th>차량번호</th>
          <td>
            <OBTTextField
              value={carInsur.companyName}
              onChange={(e) => setCarInsur({ ...carInsur, companyName: e.value })}
              readonly
            />
          </td>
        </tr>
      </tbody>
    </OBTFormPanel>
  );
}
export default CarInsurance;
