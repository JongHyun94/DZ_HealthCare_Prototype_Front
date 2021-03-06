import { atom } from 'recoil';
import { IPatient, IRegister } from '../../types/접수/Interface_접수';


//*********************************************
// 환자 목록 리스트
//*********************************************

export const patientListDB = atom<IPatient[] | undefined>({
    key: 'patientListDB',
    default: undefined,
});

//*********************************************
// 선택된 환자 정보
//*********************************************

export const selPatientDB = atom<IPatient | undefined>({
    key: 'selPatientDB',
    default: undefined,
});

//*********************************************
// 진료의 리스트
//*********************************************


//*********************************************
// 선택된 진료의 정보
//*********************************************


//*********************************************
// 진료 목록 리스트 
//*********************************************
export const regiListDB = atom({
    key: 'regiListDB',
    default: []
});

//*********************************************
// 선택된 진료 정보
//*********************************************
export const selRegiDB = atom<IRegister | undefined>({
    key: 'selRegiDB',
    default: undefined,
})
//*********************************************
// 진료 그리드 상태 정보
//*********************************************

//*********************************************
// 진료 날짜 정보
//*********************************************
export const regiStartDate = atom<Date>({
    key: 'regiStartDate',
    default: new Date()
});