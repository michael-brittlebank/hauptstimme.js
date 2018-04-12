import { ChordOrScaleTypeConstant } from '../constants/chordOrScaleType.constant';
import { NoteConstant } from '../constants/note.constant';
export interface ChordInterface {
    name: string;
    notes: NoteConstant[];
    type: ChordOrScaleTypeConstant;
    description: string;
}
