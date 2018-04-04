import { ScaleInterface } from '../../interfaces/scale.interface';
import { ChordOrScaleTypeConstant } from '../../constants/chordOrScaleType.constant';
import { NoteConstant } from '../../constants/note.constant';

export class ScalesData {
    public static getAvailableScales(): ScaleInterface[] {
        // do not directly modify. this data is compiled from the primitives array for ease of use/searching
        return [
            {
                name: 'A Major Ionian',
                notes: [
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A Dorian',
                notes: [
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A Phrygian',
                notes: [
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A Lydian',
                notes: [
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A Mixolydian',
                notes: [
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A Minor Aeolian',
                notes: [
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A Locrian',
                notes: [
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A Major Pentatonic',
                notes: [
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.E,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A Minor Pentatonic',
                notes: [
                    NoteConstant.A,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A Harmonic Minor',
                notes: [
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A Melodic Minor',
                notes: [
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A Blues',
                notes: [
                    NoteConstant.A,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A Mixo Blues',
                notes: [
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A Diminished Whole Half',
                notes: [
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A Diminished Half Whole',
                notes: [
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A Whole Tone',
                notes: [
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A Hungarian Minor',
                notes: [
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A Hungarian Gypsy',
                notes: [
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A Double Harmonic',
                notes: [
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A Enigmatic',
                notes: [
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A Altered',
                notes: [
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A Major Neapolitan',
                notes: [
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A Minor Neapolitan',
                notes: [
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A Persian',
                notes: [
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A Ukranian Dorian',
                notes: [
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A Yo',
                notes: [
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Major Ionian',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Dorian',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Phrygian',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Lydian',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Mixolydian',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Minor Aeolian',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Locrian',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Major Pentatonic',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.F,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Minor Pentatonic',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Harmonic Minor',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Melodic Minor',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Blues',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Mixo Blues',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Diminished Whole Half',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Diminished Half Whole',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Whole Tone',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Hungarian Minor',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Hungarian Gypsy',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Double Harmonic',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Enigmatic',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Altered',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Major Neapolitan',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Minor Neapolitan',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Persian',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Ukranian Dorian',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Yo',
                notes: [
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B Major Ionian',
                notes: [
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B Dorian',
                notes: [
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B Phrygian',
                notes: [
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B Lydian',
                notes: [
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B Mixolydian',
                notes: [
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B Minor Aeolian',
                notes: [
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B Locrian',
                notes: [
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B Major Pentatonic',
                notes: [
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.FG,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B Minor Pentatonic',
                notes: [
                    NoteConstant.B,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B Harmonic Minor',
                notes: [
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B Melodic Minor',
                notes: [
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B Blues',
                notes: [
                    NoteConstant.B,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B Mixo Blues',
                notes: [
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'B Diminished Whole Half',
                notes: [
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B Diminished Half Whole',
                notes: [
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B Whole Tone',
                notes: [
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B Hungarian Minor',
                notes: [
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B Hungarian Gypsy',
                notes: [
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B Double Harmonic',
                notes: [
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B Enigmatic',
                notes: [
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B Altered',
                notes: [
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B Major Neapolitan',
                notes: [
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B Minor Neapolitan',
                notes: [
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B Persian',
                notes: [
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B Ukranian Dorian',
                notes: [
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'B Yo',
                notes: [
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C Major Ionian',
                notes: [
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C Dorian',
                notes: [
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C Phrygian',
                notes: [
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C Lydian',
                notes: [
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C Mixolydian',
                notes: [
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C Minor Aeolian',
                notes: [
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C Locrian',
                notes: [
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C Major Pentatonic',
                notes: [
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.G,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C Minor Pentatonic',
                notes: [
                    NoteConstant.C,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C Harmonic Minor',
                notes: [
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C Melodic Minor',
                notes: [
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C Blues',
                notes: [
                    NoteConstant.C,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C Mixo Blues',
                notes: [
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C Diminished Whole Half',
                notes: [
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C Diminished Half Whole',
                notes: [
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C Whole Tone',
                notes: [
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C Hungarian Minor',
                notes: [
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C Hungarian Gypsy',
                notes: [
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C Double Harmonic',
                notes: [
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C Enigmatic',
                notes: [
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C Altered',
                notes: [
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C Major Neapolitan',
                notes: [
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C Minor Neapolitan',
                notes: [
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C Persian',
                notes: [
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C Ukranian Dorian',
                notes: [
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C Yo',
                notes: [
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Major Ionian',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Dorian',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Phrygian',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Lydian',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Mixolydian',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Minor Aeolian',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Locrian',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Major Pentatonic',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.GA,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Minor Pentatonic',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Harmonic Minor',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Melodic Minor',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Blues',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Mixo Blues',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Diminished Whole Half',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Diminished Half Whole',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Whole Tone',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Hungarian Minor',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Hungarian Gypsy',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Double Harmonic',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Enigmatic',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Altered',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Major Neapolitan',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Minor Neapolitan',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Persian',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Ukranian Dorian',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'C&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Yo',
                notes: [
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'D Major Ionian',
                notes: [
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'D Dorian',
                notes: [
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'D Phrygian',
                notes: [
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'D Lydian',
                notes: [
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'D Mixolydian',
                notes: [
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'D Minor Aeolian',
                notes: [
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'D Locrian',
                notes: [
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'D Major Pentatonic',
                notes: [
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.A,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'D Minor Pentatonic',
                notes: [
                    NoteConstant.D,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'D Harmonic Minor',
                notes: [
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'D Melodic Minor',
                notes: [
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'D Blues',
                notes: [
                    NoteConstant.D,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'D Mixo Blues',
                notes: [
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'D Diminished Whole Half',
                notes: [
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'D Diminished Half Whole',
                notes: [
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'D Whole Tone',
                notes: [
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'D Hungarian Minor',
                notes: [
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'D Hungarian Gypsy',
                notes: [
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'D Double Harmonic',
                notes: [
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'D Enigmatic',
                notes: [
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'D Altered',
                notes: [
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'D Major Neapolitan',
                notes: [
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'D Minor Neapolitan',
                notes: [
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'D Persian',
                notes: [
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'D Ukranian Dorian',
                notes: [
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'D Yo',
                notes: [
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Major Ionian',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Dorian',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Phrygian',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Lydian',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Mixolydian',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Minor Aeolian',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Locrian',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Major Pentatonic',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.AB,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Minor Pentatonic',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Harmonic Minor',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Melodic Minor',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Blues',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Mixo Blues',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Diminished Whole Half',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Diminished Half Whole',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Whole Tone',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Hungarian Minor',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Hungarian Gypsy',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Double Harmonic',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Enigmatic',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Altered',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Major Neapolitan',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Minor Neapolitan',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Persian',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Ukranian Dorian',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Yo',
                notes: [
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E Major Ionian',
                notes: [
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E Dorian',
                notes: [
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E Phrygian',
                notes: [
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E Lydian',
                notes: [
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E Mixolydian',
                notes: [
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E Minor Aeolian',
                notes: [
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E Locrian',
                notes: [
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E Major Pentatonic',
                notes: [
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.B,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E Minor Pentatonic',
                notes: [
                    NoteConstant.E,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E Harmonic Minor',
                notes: [
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E Melodic Minor',
                notes: [
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E Blues',
                notes: [
                    NoteConstant.E,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E Mixo Blues',
                notes: [
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'E Diminished Whole Half',
                notes: [
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E Diminished Half Whole',
                notes: [
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E Whole Tone',
                notes: [
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E Hungarian Minor',
                notes: [
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E Hungarian Gypsy',
                notes: [
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E Double Harmonic',
                notes: [
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E Enigmatic',
                notes: [
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E Altered',
                notes: [
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E Major Neapolitan',
                notes: [
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E Minor Neapolitan',
                notes: [
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E Persian',
                notes: [
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E Ukranian Dorian',
                notes: [
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'E Yo',
                notes: [
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F Major Ionian',
                notes: [
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F Dorian',
                notes: [
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F Phrygian',
                notes: [
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F Lydian',
                notes: [
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F Mixolydian',
                notes: [
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F Minor Aeolian',
                notes: [
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F Locrian',
                notes: [
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F Major Pentatonic',
                notes: [
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.C,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F Minor Pentatonic',
                notes: [
                    NoteConstant.F,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F Harmonic Minor',
                notes: [
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F Melodic Minor',
                notes: [
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F Blues',
                notes: [
                    NoteConstant.F,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F Mixo Blues',
                notes: [
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F Diminished Whole Half',
                notes: [
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F Diminished Half Whole',
                notes: [
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F Whole Tone',
                notes: [
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F Hungarian Minor',
                notes: [
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F Hungarian Gypsy',
                notes: [
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F Double Harmonic',
                notes: [
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F Enigmatic',
                notes: [
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F Altered',
                notes: [
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F Major Neapolitan',
                notes: [
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F Minor Neapolitan',
                notes: [
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F Persian',
                notes: [
                    NoteConstant.F,
                    NoteConstant.FG,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F Ukranian Dorian',
                notes: [
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F Yo',
                notes: [
                    NoteConstant.F,
                    NoteConstant.G,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Major Ionian',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Dorian',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Phrygian',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Lydian',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Mixolydian',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Minor Aeolian',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Locrian',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Major Pentatonic',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.CD,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Minor Pentatonic',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Harmonic Minor',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Melodic Minor',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Blues',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Mixo Blues',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Diminished Whole Half',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Diminished Half Whole',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Whole Tone',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Hungarian Minor',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Hungarian Gypsy',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Double Harmonic',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Enigmatic',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Altered',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Major Neapolitan',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Minor Neapolitan',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Persian',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.G,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Ukranian Dorian',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'F&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.FG; Yo',
                notes: [
                    NoteConstant.FG,
                    NoteConstant.GA,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'G Major Ionian',
                notes: [
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'G Dorian',
                notes: [
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'G Phrygian',
                notes: [
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'G Lydian',
                notes: [
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'G Mixolydian',
                notes: [
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'G Minor Aeolian',
                notes: [
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'G Locrian',
                notes: [
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'G Major Pentatonic',
                notes: [
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.D,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'G Minor Pentatonic',
                notes: [
                    NoteConstant.G,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'G Harmonic Minor',
                notes: [
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'G Melodic Minor',
                notes: [
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'G Blues',
                notes: [
                    NoteConstant.G,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'G Mixo Blues',
                notes: [
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'G Diminished Whole Half',
                notes: [
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'G Diminished Half Whole',
                notes: [
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'G Whole Tone',
                notes: [
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'G Hungarian Minor',
                notes: [
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'G Hungarian Gypsy',
                notes: [
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'G Double Harmonic',
                notes: [
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'G Enigmatic',
                notes: [
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'G Altered',
                notes: [
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'G Major Neapolitan',
                notes: [
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'G Minor Neapolitan',
                notes: [
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'G Persian',
                notes: [
                    NoteConstant.G,
                    NoteConstant.GA,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'G Ukranian Dorian',
                notes: [
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.AB,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'G Yo',
                notes: [
                    NoteConstant.G,
                    NoteConstant.A,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Major Ionian',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Dorian',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Phrygian',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Lydian',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Mixolydian',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Minor Aeolian',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Locrian',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Major Pentatonic',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.DE,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Minor Pentatonic',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Harmonic Minor',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Melodic Minor',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Blues',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Mixo Blues',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MAIN
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Diminished Whole Half',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.F,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Diminished Half Whole',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Whole Tone',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Hungarian Minor',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Hungarian Gypsy',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Double Harmonic',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Enigmatic',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Altered',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.C,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Major Neapolitan',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Minor Neapolitan',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.B,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.E,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Persian',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.A,
                    NoteConstant.C,
                    NoteConstant.CD,
                    NoteConstant.D,
                    NoteConstant.E,
                    NoteConstant.G
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Ukranian Dorian',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.B,
                    NoteConstant.D,
                    NoteConstant.DE,
                    NoteConstant.F,
                    NoteConstant.FG
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'A&#NoteConstant.FGNoteConstant.FNoteConstant.CNoteConstant.E; Yo',
                notes: [
                    NoteConstant.GA,
                    NoteConstant.AB,
                    NoteConstant.CD,
                    NoteConstant.DE,
                    NoteConstant.F
                ],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            }
        ];
    }
}