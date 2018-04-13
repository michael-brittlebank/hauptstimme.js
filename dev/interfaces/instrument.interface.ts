import { NoteConstant } from '../constants/note.constant';
import { InstrumentTypeConstant } from '../constants/instrumentType.constant';

/**
 * Interface for instruments
 */
export interface InstrumentInterface {
    id?: number;
    name: string;
    rootNotes: NoteConstant[];
    type: InstrumentTypeConstant;
}