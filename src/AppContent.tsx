import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AppMessenger from "./AppMessenger";
import Main from "./components/메인화면";
import Regist from "./components/접수수납";

function AppContent() {
  const [msgOpen, setMsgOpen] = useState(true);
  const chagneMsgState = () => {
    setMsgOpen(!msgOpen);
  };
  return (
    <div className="AppContent">
      <div className={msgOpen?"PagesOpen" : "PagesClose"}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/register" exact component={Regist} />
          <Route path="/diagnosis" exact component={Main} />
          <Redirect to="/" />
        </Switch>
      </div>
      <AppMessenger msgOpen={msgOpen} chagneMsgState={chagneMsgState}/>
    </div>
  );
}

export default AppContent;
