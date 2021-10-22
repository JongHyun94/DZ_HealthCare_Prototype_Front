import '../../css/App.css';
import '../../init';
import { LUXTabs, LUXTab } from 'luna-rocket/LUXTabs';
import { useState } from 'react';

export interface IUseTab {
  tab: string;
  renderTab: () => JSX.Element;
}

const useTab = (tabList: string[], count: number[]): IUseTab => {
  // Default : tabList[0] => 첫번째 항목은 전체 or 미전송
  const [tab, setTab] = useState<string>(tabList[0]);

  const tabClickEvent = (tab: string) => {
    setTab(tab);
  };

  const renderTab = () => (
    <div>
      <LUXTabs onChange={tabClickEvent} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        {tabList.map((list: string, index: number) => (
          <LUXTab label={list + '(' + count[index] + ')'} value={list} />
        ))}
      </LUXTabs>
    </div>
  );

  return { tab, renderTab };
};

export { useTab };
