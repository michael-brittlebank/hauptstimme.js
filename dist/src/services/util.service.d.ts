import { NoteConstant } from '../../constants/note.constant';
export declare class UtilService {
    static getLengthOfEnum(enumConstant: any): number;
    static getFormattedNoteString(note: NoteConstant, noteArray?: NoteConstant[]): string;
    static getEnumFromStringKey(enumConstant: any, key: string): number;
    static modulo(integer: number, modulus: number): number;
    static addHalfStepsToNote(note: NoteConstant, halfSteps: number): NoteConstant;
    static subtractHalfStepsFromNote(note: NoteConstant, halfSteps: number): NoteConstant;
}
