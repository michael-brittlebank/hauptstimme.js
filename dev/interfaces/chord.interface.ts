import { ChordOrScaleTypeConstant } from '../constants/chordOrScaleType.constant';
import { NotesConstant } from '..';

export interface ChordInterface {
    name: string;
    notes: NotesConstant[];
    type: ChordOrScaleTypeConstant
}