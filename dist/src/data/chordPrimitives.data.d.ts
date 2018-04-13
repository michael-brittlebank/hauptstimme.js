import { ChordInterface } from '../../interfaces/chord.interface';
export declare class ChordPrimitivesData {
    private static getScaleNoteIndex(step, rootScaleLength);
    private static getNoteToAdd(note, adjustment, rootScaleLength);
    static compileChordPrimitivesIntoChords(): ChordInterface[];
    private static getAvailableChordPrimitives();
}
