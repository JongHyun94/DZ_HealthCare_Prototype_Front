import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Lnb from './components/공통/Layout/Lnb';
import WehagoHeader from './components/공통/Layout/WehagoHeader';
import SubHeader from './components/공통/Layout/SubHeader';
import Snb from './components/공통/Layout/Snb';
import { openSnbState } from './atoms/Recoils_공통';
import Main from './components/메인화면';
import Regist from './components/접수수납';

const App = () => {
  const [openSnb, setOpenSnb] = useRecoilState<boolean>(openSnbState);
  return (
    <BrowserRouter>
      {/* 위하고 H 헤더 (이미지) */}
      <WehagoHeader />
      {/* 왼쪽 메뉴 아이콘 (이미지) */}
      <Lnb />
      <div className={`container ${openSnb ? 'open-snb' : ''}`}>
        {/* 서브 헤더 메뉴 */}
        <SubHeader />
        {/* 진료지원 서브 메뉴바 = 더보기(三) */}
        <Snb />
        <Switch>
          {/* 메인 화면 */}
          <Route exact path="/" component={Main} />
          {/* '판독 입력' 메뉴 화면 */}
          {/* <Route path="/interpretation" component={Interpretation} /> */}
          {/* '접수 수납 화면' */}
          <Route path="/Regist" component={Regist} />
        </Switch>
        <div className="dimmed" onClick={() => setOpenSnb(false)} />
      </div>
    </BrowserRouter>
  );
};

export default App;
