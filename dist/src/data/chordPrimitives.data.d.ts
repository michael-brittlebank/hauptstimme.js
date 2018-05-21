import { ChordInterface } from '../../interfaces/chord.interface';
import { ScaleInterface } from '../../interfaces/scale.interface';
export declare class ChordPrimitivesData {
    private static getScaleNoteIndex(step, rootScaleLength);
    static compileChordPrimitivesIntoChords(scales: ScaleInterface[]): ChordInterface[];
    private static getAvailableChordPrimitives();
}
