import { render } from "@testing-library/react";
import { OBTListGrid } from "luna-orbit";
import React from "react";
import { Component, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { selPatientDB } from "../../../atoms/접수_수납/Recoils_접수_수납DB";
import { IPatient } from "../../../types/접수/Interface_접수";
import { getVitalPatientLists } from "../../../utils/Api/접수/ApiService_접수";
import { initializeVitalGrid } from "../../../utils/Grid/grid-initialized";
import "./style.css";

class VitalSign extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vitalGrid: () => initializeVitalGrid()
    };
    
  };

  render() {
    
    return (
      <>
        <div className="VitalSign_header">
          <div className="VitalSign_header_title">신체사정</div>
          <div className="VitalSign_header_buttons"></div>
        </div>
        <div className="VitalSign_content">
          {/* <OBTListGrid
            height="95px"
            interface={this.state.vitalGrid}
          /> */}
        </div>
      </>
    );
  }
}
export default VitalSign;
