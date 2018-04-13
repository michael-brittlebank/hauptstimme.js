import { NoteConstant } from '../constants/note.constant';

/**
 * Interface for search requests
 */
export interface SearchRequestInterface {
    rootNote?: NoteConstant;
    notes: NoteConstant[];
}