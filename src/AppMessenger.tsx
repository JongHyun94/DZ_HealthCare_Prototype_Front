function AppMessenger(props: { msgOpen: any; chagneMsgState: any; }) {
  const { msgOpen, chagneMsgState } = props;
  return (
    <div className={msgOpen ?"AppMessenger open" : "AppMessenger"}>
      <div className="BtnArea">
        <div className="MsgOpnBtn" onClick={chagneMsgState}></div>
      </div>
      {msgOpen ? <div className="ContentArea"></div> : false}
    </div>
  );
}

export default AppMessenger;
