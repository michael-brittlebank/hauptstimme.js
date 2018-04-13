import { NoteConstant } from '../../constants/note.constant';

export class UtilService {

    public static getLengthOfEnum(enumConstant: any): number {
       return Object.keys(enumConstant).filter(key => typeof enumConstant[key as any] === 'number').length
    }

    public static getFormattedNoteString(note: NoteConstant, noteArray: NoteConstant[] = []) {
        const sharpEntity: string = '♯';
        const flatEntity: string = '♭';
        let formattedNote: string = NoteConstant[note];
        switch (note) {
            case NoteConstant.AB:
                if (noteArray.indexOf(NoteConstant.B) !== -1) {
                    // a sharp
                    formattedNote = ['A', sharpEntity].join('');
                } else {
                    // b flat
                    formattedNote = ['B', flatEntity].join('');
                }
                break;
            case NoteConstant.CD:
                if (noteArray.indexOf(NoteConstant.C) !== -1) {
                    // d flat
                    formattedNote = ['D', flatEntity].join('');
                } else {
                    // c sharp
                    formattedNote = ['C', sharpEntity].join('');
                }
                break;
            case NoteConstant.DE:
                if (noteArray.indexOf(NoteConstant.E) !== -1) {
                    // d sharp
                    formattedNote = ['D', sharpEntity].join('');
                } else {
                    // e flat
                    formattedNote = ['E', flatEntity].join('');
                }
                break;
            case NoteConstant.FG:
                if (noteArray.indexOf(NoteConstant.F) !== -1) {
                    // a sharp
                    formattedNote = ['G', flatEntity].join('');
                } else {
                    // f sharp
                    formattedNote = ['F', sharpEntity].join('');
                }
                break;
            case NoteConstant.GA:
                if (noteArray.indexOf(NoteConstant.A) !== -1) {
                    // a sharp
                    formattedNote = ['G', sharpEntity].join('');
                } else {
                    // a flat
                    formattedNote = ['A', flatEntity].join('');
                }
                break;
        }
        return formattedNote;
    }

    public static getEnumFromStringKey(enumConstant: any, key: string): number {
       return parseInt(enumConstant[<any>key]);
    }

    public static modulo(number: number, modulus: number) {
        return ((number % modulus) + modulus) % modulus;
    };
}