import { ChordOrScaleTypeConstant } from '../constants/chordOrScaleType.constant';
import { NoteConstant } from '../constants/note.constant';

/**
 * Interface for chords
 */
export interface ChordInterface {
    name: string;
    notes: NoteConstant[];
    type: ChordOrScaleTypeConstant;
    description: string;
}