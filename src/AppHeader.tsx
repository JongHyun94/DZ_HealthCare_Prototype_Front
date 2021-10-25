import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectedMenu } from "./atoms/menu";

function AppHeader() {
  const goHome = () => {
    setSelectMenu("");
  };
  const [selectMenu, setSelectMenu] = useRecoilState(selectedMenu);
  return (
    <div className="AppHeader">
      <Link to={"/"} className="MainIcon">
        <img
          src={"menuIcon/wehago_b.svg"}
          alt={"wehago"}
          width={144}
          height={48}
          onClick={goHome}
        />
      </Link>
    </div>
  );
}
export default AppHeader;
