import { useRef, forwardRef } from 'react';
import { LUXDataGrid2, LUXGridView, LUXDataProvider } from '@luna-grid/luxdatagrid2-base/dist';
import { useCallback } from 'react';

//useEffect 오염
//null 체크
//다중 그리드 사용시 명확한 구분성
export interface GridInst {
  grid: LUXDataGrid2;
  view: LUXGridView;
  provider: LUXDataProvider;
}
interface GridProps {
  gridSetting: {
    name: string;
    fields: any[];
    columns: any[];
  };
}

const useGrid = () => {
  const gridRef = useRef<LUXDataGrid2>(null);
  const handler = useCallback((func: (grids: GridInst) => void) => {
    gridRef.current &&
      func({ grid: gridRef.current, view: gridRef.current.gridView, provider: gridRef.current.dataProvider });
  }, []);

  return { gridRef, handler };
};

const Grid = forwardRef((props: GridProps, ref: React.LegacyRef<LUXDataGrid2>) => {
  return (
    <div className="grid" style={{ height: '100%', width: '100%' }}>
      <LUXDataGrid2 ref={ref} gridSetting={props.gridSetting} />
    </div>
  );
});

export { Grid, useGrid };
