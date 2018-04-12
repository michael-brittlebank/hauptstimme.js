/// <reference types="bluebird" />
import { ChordInterface, InstrumentInterface, NoteConstant, ScaleInterface, SearchResponseInterface } from '..';
import * as Promise from 'bluebird';
export declare class HauptstimmeJs {
    static getAvailableInstruments(): Promise<InstrumentInterface[]>;
    static getAvailableScales(): Promise<ScaleInterface[]>;
    static getAvailableChords(): Promise<ChordInterface[]>;
    static search(notesArray: NoteConstant[]): Promise<SearchResponseInterface>;
    static demo(): string;
}
