import { NoteConstant } from '../../constants/note.constant';
export declare class UtilService {
    static getLengthOfEnum(enumConstant: any): number;
    static getFormattedNoteString(note: NoteConstant): string;
    static getEnumFromStringKey(enumConstant: any, key: string): number;
    static modulo(number: number, modulus: number): number;
}
