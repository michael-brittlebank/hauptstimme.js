import { ChordInterface, InstrumentInterface, NoteConstant, ScaleInterface, SearchResponseInterface } from '..';
export declare class HauptstimmeJs {
    /**
     * This class provides a entry point for helper functions used in the module
     */
    static getAvailableInstruments(): InstrumentInterface[];
    static getAvailableScales(): ScaleInterface[];
    static getAvailableChords(): ChordInterface[];
    static search(notesArray: NoteConstant[]): Promise<SearchResponseInterface>;
}
