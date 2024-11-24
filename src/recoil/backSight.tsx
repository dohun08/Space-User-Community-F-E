import {atom} from 'recoil';

interface BackSight {
    before:string | null
}

export const backSightAtom = atom<BackSight>({
    key:'backSight',
    default:{
        'before':''
    }
})