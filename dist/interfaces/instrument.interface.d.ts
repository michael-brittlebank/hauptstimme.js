import { NotesConstant } from '..';
import { InstrumentTypeConstant } from '../constants/instrumentType.constant';
export interface InstrumentInterface {
    id?: number;
    name: string;
    rootNotes: NotesConstant[];
    type: InstrumentTypeConstant;
}
