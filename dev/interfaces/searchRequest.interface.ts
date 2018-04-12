import { NoteConstant } from '../constants/note.constant';

export interface SearchRequestInterface {
    rootNote?: NoteConstant;
    notes: NoteConstant[];
}