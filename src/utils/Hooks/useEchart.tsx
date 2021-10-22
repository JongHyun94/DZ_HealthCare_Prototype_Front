import '../../css/App.css';
import '../../init';
import ReactEcharts from 'echarts-for-react';

export interface IUseTab {
  renderEchart: () => JSX.Element;
}

const useEchart = (tabList: string[], count: number[]): IUseTab => {
  let waitNum = 0;
  const temp: any = tabList.map((list: string, index: number) => {
    if (list === '대기' || list === '결과 대기') {
      waitNum = count[index];
    }
    return {
      value: count[index],
      name: list,
    };
  });
  temp.shift();

  const chartOption = {
    // color: ['#f1c131', '#EA5F5C','#4286EB', '#1fc47c'],
    color: ['#F5BD4E', '#EA5F5C', '#4286EB'],
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '18%',
      orient: 'vertical',
      left: '60%',
      // 왜 주석해도 잘 나오는거지...?
      // data: ['대기', '진행중', '완료'],
      // data: tabList,
      formatter: function (name) {
        if (name === '대기' || name === '결과 대기') return '       ' + name + ' ' + temp[0].value + '건';
        else if (name === '진행중') return '       ' + name + ' ' + temp[1].value + '건';
        else if (name === '완료' || name === '최종보고') return '       ' + name + ' ' + temp[2].value + '건';
      },
      itemGap: 40,
      itemWidth: 25,
      itemHeight: 25,
    },
    series: [
      // 실제 차트 설정 (outer)
      {
        name: '진단검사 접수 현황',
        type: 'pie',
        radius: ['45%', '70%'],
        label: {
          position: 'inner',
          fontSize: 17,
          formatter: '{c}건',
        },
        data: temp,
        left: '-40%',
      },
      // center 텍스트를 위한 설정 (inner)
      {
        color: ['#ffffff'],
        name: '진단검사 대기환자 현황',
        type: 'pie',
        radius: ['0%', '30%'],
        label: {
          position: 'center',
          fontSize: 17,
          formatter: '{c}건\n대기중',
        },
        data: [{ value: waitNum }],
        left: '-40%',
      },
    ],
  };

  const renderEchart = () => (
    <div>
      <ReactEcharts option={chartOption} style={{ height: '250px' }} />
    </div>
  );

  return { renderEchart };
};

export { useEchart };
