/// <reference types="bluebird" />
import * as Promise from 'bluebird';
import { InstrumentInterface } from '../interfaces/instrument.interface';
import { ScaleInterface } from '../interfaces/scale.interface';
import { ChordInterface } from '../interfaces/chord.interface';
import { NoteConstant } from '../constants/note.constant';
import { SearchResponseInterface } from '../interfaces/searchResponse.interface';
export declare class HauptstimmeJs {
    static getAvailableInstruments(): Promise<InstrumentInterface[]>;
    static getAvailableScales(): Promise<ScaleInterface[]>;
    static getAvailableChords(): Promise<ChordInterface[]>;
    static search(notesArray: NoteConstant[]): Promise<SearchResponseInterface>;
}
