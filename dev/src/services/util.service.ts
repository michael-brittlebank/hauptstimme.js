import { NoteConstant } from '../../constants/note.constant';

/**
 * Class for utility methods
 */
export class UtilService {

    /**
     * @param enumConstant any given enum
     * @returns length of given enum
     */
    public static getLengthOfEnum(enumConstant: any): number {
       return Object.keys(enumConstant).filter(key => typeof enumConstant[key as any] === 'number').length
    }

    /**
     * @param note the note to stringify
     * @param noteArray optional param to help determine whether to sharpen or flatten intermediate notes
     * @returns string representation of note constant
     */
    public static getFormattedNoteString(note: NoteConstant, noteArray: NoteConstant[] = []): string {
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

    /**
     * @param enumConstant enum containing key
     * @param key stringified enum key
     * @returns enum value from string key
     */
    public static getEnumFromStringKey(enumConstant: any, key: string): number {
       return parseInt(enumConstant[<any>key]);
    }

    /**
     * @param integer number to modulate
     * @param modulus number to modulate over
     * @returns modulo number consistent with other programming languages
     */
    public static modulo(integer: number, modulus: number): number {
        return ((integer % modulus) + modulus) % modulus;
    };

    /**
     * @param note note to modulate
     * @param halfSteps number of half steps to add to note
     * @returns noteConstant after adding half steps
     */
    public static addHalfStepsToNote(note: NoteConstant, halfSteps: number): NoteConstant {
        const noteLength: number = UtilService.getLengthOfEnum(NoteConstant);
        return UtilService.getEnumFromStringKey(NoteConstant, NoteConstant[UtilService.modulo(note + halfSteps, noteLength)]);
    }

    /**
     * @param note note to modulate
     * @param halfSteps number of half steps to remove from note
     * @returns noteConstant after subtracting half steps
     */
    public static subtractHalfStepsFromNote(note: NoteConstant, halfSteps: number): NoteConstant {
        const noteLength: number = UtilService.getLengthOfEnum(NoteConstant);
        return UtilService.getEnumFromStringKey(NoteConstant, NoteConstant[UtilService.modulo(note - halfSteps, noteLength)]);
    }
}