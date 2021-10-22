import { atom } from 'recoil';

export interface Patient {
    host_id: string | undefined,
    id: string | undefined,
    name: string | undefined,
    sex: string | undefined,
    ssn: string | undefined,
    age: number | undefined,
    birth: string | undefined,
    phone: string | undefined,
    mail: string | undefined,
    address: string | undefined,
};

export interface Doctor {
    host_id: string | undefined,
    id: string | undefined,
    name: string | undefined,
    sex: string | undefined,
    ssn: string | undefined,
    age: number | undefined,
    birth: string | undefined,
    phone: string | undefined,
    mail: string | undefined,
    address: string | undefined,
};

//*********************************************
//  가상 환자 정보
//*********************************************

let randPatientList = [
    {
        host_id: '001',
        id: '07412',
        name: '이종현',
        sex: 'M',
        ssn: '940606-1234567',
        age: 28,
        birth: '1994-06-06',
        phone: '010-9947-7430',
        mail: 'ant9406@naver.com',
        address: '서울시 양천구 신정동',
    },
    {
        host_id: '001',
        id: '07413',
        name: '이종현',
        sex: 'M',
        ssn: '960605-1234567',
        age: 26,
        birth: '1996-06-05',
        phone: '010-1234-3344',
        mail: 'abc@naver.com',
        address: '서울시 양천구 신월동',
    },
    {
        host_id: '001',
        id: '07414',
        name: '김더존',
        sex: 'M',
        ssn: '910401-1234567',
        age: 31,
        birth: '1991-04-01',
        phone: '010-1554-6644',
        mail: 'qwer@naver.com',
        address: '서울시 양천구 목4동',
    },
    
];

//*********************************************
//  가상 의사 정보
//*********************************************

let randDoctorList = [
    {
        host_id: '001',
        id: '001',
        name: '이종현',
        sex: 'M',
        ssn: '940606-1234567',
        age: 28,
        birth: '1994-06-06',
        phone: '010-9947-7430',
        mail: 'ant9406@naver.com',
        address: '서울시 양천구 신정동',
    },
    {
        host_id: '001',
        id: '002',
        name: '이종현',
        sex: 'M',
        ssn: '960605-1234567',
        age: 26,
        birth: '1996-06-05',
        phone: '010-1234-3344',
        mail: 'abc@naver.com',
        address: '서울시 양천구 신월동',
    },
    {
        host_id: '001',
        id: '003',
        name: '김더존',
        sex: 'M',
        ssn: '910401-1234567',
        age: 31,
        birth: '1991-04-01',
        phone: '010-1554-6644',
        mail: 'qwer@naver.com',
        address: '서울시 양천구 목4동',
    },
    
];

//*********************************************
// 환자 목록 리스트
//*********************************************

export const patientList = atom<Patient[]>({
    key: 'patientList',
    default: randPatientList,
});

// export const patientList = atom<Patient[]>({
//     key: 'patientList',
//     default: [
//         {
//             host_id: '',
//             id: '',
//             name: '',
//             sex: '',
//             ssn: '',
//             age: undefined,
//             birth: '',
//             phone: '',
//             mail: '',
//             address: '',
//         },
//     ],
// });

//*********************************************
// 선택된 환자 정보
//*********************************************

export const selPatient = atom<Patient | undefined>({
    key: 'selPatient',
    default: undefined,
});


//*********************************************
// 진료의 리스트
//*********************************************

export const doctorList = atom<Doctor[]>({
    key:'doctorList',
    default: randDoctorList,
})

//*********************************************
// 선택된 진료의 정보
//*********************************************

export const selDoctor = atom<string | undefined>({
    key: 'selDoctor',
    default: 'first'
});

//*********************************************
// 진료 목록 리스트 
//*********************************************


//*********************************************
// 선택된 진료 정보
//*********************************************