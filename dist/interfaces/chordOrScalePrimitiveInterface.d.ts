import { ChordOrScaleTypeConstant } from '../constants/chordOrScaleType.constant';
export interface ChordOrScalePrimitiveInterface {
    name: string;
    steps: string[];
    type: ChordOrScaleTypeConstant;
}
