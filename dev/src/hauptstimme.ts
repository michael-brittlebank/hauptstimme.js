import { InstrumentsData } from './data/instruments.data';
import { SearchService } from './services/search.service';
import { InstrumentInterface } from '../interfaces/instrument.interface';
import { ScaleInterface } from '../interfaces/scale.interface';
import { ChordInterface } from '../interfaces/chord.interface';
import { SearchResponseInterface } from '../interfaces/searchResponse.interface';
import { SearchRequestInterface } from '../interfaces/searchRequest.interface';
import { NoteConstant } from '../constants/note.constant';
import { UtilService } from './services/util.service';
import { ChordPrimitivesData } from './data/chordPrimitives.data';
import { ScalePrimitivesData } from './data/scalePrimitives.data';

/**
 * Entry point for exposed public API methods
 */
export class HauptstimmeJs {

    private availableScales: ScaleInterface[] = [];
    private availableChords: ChordInterface[] = [];
    private availableInstruments: InstrumentInterface[] = [];

    constructor() {
        this.availableScales = ScalePrimitivesData.compileScalePrimitivesIntoScales();
        this.availableChords = ChordPrimitivesData.compileChordPrimitivesIntoChords(this.availableScales);
        this.availableInstruments = InstrumentsData.getAvailableInstruments();
    }

    /**
     * @returns list of available instruments
     */
    public getAvailableInstruments(): Promise<InstrumentInterface[]> {
        return new Promise((resolve, reject) => {
            resolve(this.availableInstruments);
        });
    }

    /**
     * @returns list of available scales
     */
    public getAvailableScales(): Promise<ScaleInterface[]> {
        return new Promise((resolve, reject) => {
            resolve(this.availableScales);
        });
    }

    /**
     * @returns list of available chords
     */
    public getAvailableChords(): Promise<ChordInterface[]> {
        return new Promise((resolve, reject) => {
            resolve(this.availableChords);
        });
    }

    /**
     * @param searchRequest selected notes and optional root note to search for
     * @returns list of scales and chords that match the search request parameters
     */
    public search(searchRequest: SearchRequestInterface): Promise<SearchResponseInterface> {
        return SearchService.getChordsAndScalesByNotes(searchRequest, this.availableScales, this.availableChords);
    }

    /**
     * @param note the note to stringify
     * @param noteArray optional param to help determine whether to sharpen or flatten intermediate notes
     * @returns string representation of note constant
     */
    public static getFormattedNoteString(note: NoteConstant, noteArray: NoteConstant[] = []): string {
        return UtilService.getFormattedNoteString(note, noteArray);
    }

    /**
     * @param note note to modulate
     * @param halfSteps number of half steps to add to note
     * @returns noteConstant after adding half steps
     */
    public static addHalfStepsToNote(note: NoteConstant, halfSteps: number): NoteConstant {
        return UtilService.addHalfStepsToNote(note, halfSteps);
    }

    /**
     * @param note note to modulate
     * @param halfSteps number of half steps to add to note
     * @returns noteConstant after adding half steps
     */
    public static subtractHalfStepsFromNote(note: NoteConstant, halfSteps: number): NoteConstant {
        return UtilService.subtractHalfStepsFromNote(note, halfSteps);
    }

}