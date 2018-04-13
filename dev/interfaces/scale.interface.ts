import { NoteConstant } from '../constants/note.constant';
import { ChordOrScaleTypeConstant } from '../constants/chordOrScaleType.constant';

/**
 * Interface for scales
 */
export interface ScaleInterface {
    name: string;
    notes: NoteConstant[];
    type: ChordOrScaleTypeConstant;
    description: string;
}