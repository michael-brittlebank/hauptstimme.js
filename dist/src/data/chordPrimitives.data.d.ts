import { ChordInterface } from '../../interfaces/chord.interface';
export declare class ChordPrimitivesData {
    private static moduloChordNoteIndex(noteIndex, lengthOfScale);
    static compileChordPrimitivesIntoChords(): ChordInterface[];
    private static getAvailableChordPrimitives();
}
