import { NotesConstant } from '..';
import { ChordOrScaleTypeConstant } from '../constants/chordOrScaleType.constant';
export interface ScaleInterface {
    name: string;
    notes: NotesConstant[];
    type: ChordOrScaleTypeConstant;
}
