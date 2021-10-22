import { atom } from 'recoil';
import { ICategory } from '../types/Interface_공통';

const openSnbState = atom<boolean>({
  key: 'openSnb',
  default: false,
});

const subMenuListState = atom<string[]>({
  key: 'menuList',
  default: ['메뉴1', '메뉴2'],
});

const categoryListState = atom<ICategory[]>({
  key: 'categoryList',
  default: [
    {
      title: '접수/수납',
      menuList: [
        { key: 'regist', title: '접수/수납' },
      ],
    },
  ],
});

const openMenuListState = atom<string[]>({
  key: 'openMenuKeys',
  default: ['register'],
});

const subHeaderText = atom<string>({
  key: 'subHeaderText',
  default: '접수/수납',
});

export { subMenuListState, openSnbState, categoryListState, openMenuListState, subHeaderText };
