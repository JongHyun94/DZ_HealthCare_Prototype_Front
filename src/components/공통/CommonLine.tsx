import '../../css/App.css';
import '../../init';
import LUXSearchBox from 'luna-rocket/LUXSearchBox';
import { useState } from 'react';

const CommonLine = () => {
  const [state, setState] = useState({
    value: '',
    totalCount: 0,
    selectCount: 0,
    isSearching: false,
  });

  // input영역에 입력되는 데이터를 외부와 내부 동기화를 위해 사용하는 함수.
  const onChange = (event, value) => {
    if (state.isSearching) {
      // 검색 중일 때 데이터 수정하면 관련 props를 초기화 시켜준다.
      setState({ value: value, totalCount: 0, selectCount: 0, isSearching: false });
    } else {
      setState({ ...state, value: value });
    }
  };

  // 검색버튼 클릭 시
  const onSearch = () => {
    // 검색 버튼 클릭 또는 enter 키 입력 시 동작
    // 1. 검색결과 도출을 위한 api 통신을 진행
    // 1-1. api 검색 결과가 0일 때는 기획대로 alert을 띄어주고,
    // this.setState({value: '', totalCount: null, selectCount: null, isSearching: false}); 로 해준다.
    // 1-2. 검색결과가 있을 때는 this.setState({totalCount: 10, selectCount: 1, isSearching: true}); 로 해준다.
    // 2. 해당 함수가 호출 되었을 때, isSearching이 true라는 것은 다음 검색을 요청한 것이기 때문에
    // selectCount에 +1을 해주고, selectCount가 증가하다가 totalCount와 동일한 값이 되면 루프처리를 해주면 된다.
    if (state.value) {
      if (state.isSearching) {
        if (state.totalCount == state.selectCount) {
          setState({ ...state, totalCount: 10, selectCount: 1, isSearching: true });
        } else {
          setState({ ...state, totalCount: 10, selectCount: state.selectCount + 1, isSearching: true });
        }
      } else {
        setState({ ...state, totalCount: 100, selectCount: 1, isSearching: true });
      }
    }
  };

  return (
    <div className="section" style={{ paddingLeft: '10px', height: '30px' }}>
      <div className="box">
        <div className="rowSort" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <LUXSearchBox
            boxStyle={{ height: '27px' }}
            value={state.value}
            totalCount={state.totalCount}
            selectCount={state.selectCount}
            isSearching={state.isSearching}
            hintText="이름을 입력하세요"
            onChange={onChange}
            onSearch={onSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default CommonLine;
