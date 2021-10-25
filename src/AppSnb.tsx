import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectedMenu } from "./atoms/menu";

function AppSnb() {
  const [selectMenu, setSelectMenu] = useRecoilState(selectedMenu);
  const [menuList, setMenuList] = useState([
    { name: "원무", value: "register" },
    { name: "진료", value: "diagnosis" },
  ]);
  const [openSnb, setOpenSnb] = useState(false);
  // 메뉴 선택 함수
  const selectMenuFunction = (item: any) => {
    setSelectMenu(item);
  };

  // snb 마우스 오버 이벤트
  const mouseOverFun = () => {
    setOpenSnb(true);
  };
  const mouseOutFun = () => {
    setOpenSnb(false);
  };
  return (
    <div
      className="AppSnb"
      onMouseOver={() => {
        mouseOverFun();
      }}
      onMouseOut={() => {
        mouseOutFun();
      }}
    >
      <div className="fix"></div>
      <div className="items">
        {menuList.map((item) => {
          return (
            <Link key={item.value} to={"/" + item.value} className="menuLink">
              <div
                className={`${
                  selectMenu === item.value ? "checked" : false
                } menuItem`}
                onClick={() => {
                  selectMenuFunction(item.value);
                }}
              >
                <div className="menuItem_img">
                  <img
                    src={"menuIcon/" + item.value + ".png"}
                    alt={item.name}
                    width={36}
                    height={36}
                  />
                </div>
                <div className="menuItem_name">
                  {openSnb ? item.name : false}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default AppSnb;
