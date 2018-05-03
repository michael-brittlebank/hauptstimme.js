import { InstrumentInterface } from '../interfaces/instrument.interface';
import { ScaleInterface } from '../interfaces/scale.interface';
import { ChordInterface } from '../interfaces/chord.interface';
import { SearchResponseInterface } from '../interfaces/searchResponse.interface';
import { SearchRequestInterface } from '../interfaces/searchRequest.interface';
import { NoteConstant } from '../constants/note.constant';
export declare class HauptstimmeJs {
    static getAvailableInstruments(): Promise<InstrumentInterface[]>;
    static getAvailableScales(): Promise<ScaleInterface[]>;
    static getAvailableChords(): Promise<ChordInterface[]>;
    static search(searchRequest: SearchRequestInterface): Promise<SearchResponseInterface>;
    static getFormattedNoteString(note: NoteConstant, noteArray?: NoteConstant[]): string;
    static addHalfStepsToNote(note: NoteConstant, halfSteps: number): NoteConstant;
    static subtractHalfStepsFromNote(note: NoteConstant, halfSteps: number): NoteConstant;
}
