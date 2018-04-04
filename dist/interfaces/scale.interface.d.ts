import { NoteConstant } from '../constants/note.constant';
import { ChordOrScaleTypeConstant } from '../constants/chordOrScaleType.constant';
export interface ScaleInterface {
    name: string;
    notes: NoteConstant[];
    type: ChordOrScaleTypeConstant;
}
