import { ChordInterface } from '../../interfaces/chord.interface';
export declare class ChordPrimitivesData {
    private static moduloNoteIndex(noteIndex, step);
    static compileChordPrimitivesIntoChords(): ChordInterface[];
    private static getAvailableChordPrimitives();
}
