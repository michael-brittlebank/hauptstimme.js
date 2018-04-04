import { NoteConstant } from '../../constants/note.constant';

export class UtilServices {

    public static getLengthOfEnum(enumConstant: any): number {
       return Object.keys(enumConstant).filter(key => typeof enumConstant[key as any] === 'number').length
    }

    public static getFormattedNoteString(note: NoteConstant){
        const sharpEntity: string = '&#9839;';
        const flatEntity: string = '&#9837;';
        let formattedNote: string = NoteConstant[note];
        switch (note) {
            case NoteConstant.AB:
                // b flat
                formattedNote = ['B', flatEntity].join('');
                break;
            case NoteConstant.CD:
                // c sharp
                formattedNote = ['C', sharpEntity].join('');
                break;
            case NoteConstant.DE:
                // e flat
                formattedNote = ['E', flatEntity].join('');
                break;
            case NoteConstant.FG:
                // f sharp
                formattedNote = ['F', sharpEntity].join('');
                break;
            case NoteConstant.GA:
                // a flat
                formattedNote = ['A', flatEntity].join('');
                break;
        }
        return formattedNote;
    }
}