import { OBTListGrid } from "luna-orbit";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { selPatientDB } from "../../../atoms/접수_수납/Recoils_접수_수납DB";
import { IPatient } from "../../../types/접수/Interface_접수";
import { getVitalPatientLists } from "../../../utils/Api/접수/ApiService_접수";
import { initializeVitalGrid } from "../../../utils/Grid/grid-initialized";
import "./style.css";
function VitalSign() {
  const selectedPatient = useRecoilValue<IPatient | undefined>(selPatientDB);
  const [vitalGrid, setVitalGrid] = useState(() => initializeVitalGrid());

  const changeHandler = () => {};

  const getVitalList = async (pid) => {
    let result = await getVitalPatientLists(pid);
    return result;
  };
  useEffect(() => {
    vitalGrid.readData();
  }, []);

  useEffect(() => {
    if(selectedPatient){
      vitalGrid.setProvider({
        read: () => {
          return new Promise((resolve) => {
            resolve([]);
          });
        },
        readPage: () => {
          return new Promise(async (resolve) => {
            resolve(getVitalList(selectedPatient.pid));
          })
        }
      });
      vitalGrid.readData();
    }
  },[selectedPatient]);

  return (
    <>
      <div className="VitalSign_header">
        <div className="VitalSign_header_title">
          신체사정
        </div>
        <div className="VitalSign_header_buttons">

        </div>
      </div>
      <div className="VitalSign_content">
        <OBTListGrid
          height="95px"
          interface={vitalGrid}
          onChange={() => changeHandler()}
        />
      </div>
    </>
  );
};
export default VitalSign;