import * as Promise from 'bluebird';
import { InstrumentsData } from './data/instruments.data';
import { SearchService } from './services/search.service';
import { ScalesData } from './data/scales.data';
import { ChordsData } from './data/chords.data';
import { InstrumentInterface } from '../interfaces/instrument.interface';
import { ScaleInterface } from '../interfaces/scale.interface';
import { ChordInterface } from '../interfaces/chord.interface';
import { NoteConstant } from '../constants/note.constant';
import { SearchResponseInterface } from '../interfaces/searchResponse.interface';

export class HauptstimmeJs {
    /**
     * This class provides a entry point for helper functions used in the module
     */
    public static getAvailableInstruments(): Promise<InstrumentInterface[]> {
        return new Promise((resolve, reject) => {
            resolve(InstrumentsData.getAvailableInstruments());
        });
    }

    public static getAvailableScales(): Promise<ScaleInterface[]> {
        return new Promise((resolve, reject) => {
            resolve(ScalesData.getAvailableScales());
        });
    }

    public static getAvailableChords(): Promise<ChordInterface[]> {
        return new Promise((resolve, reject) => {
            resolve(ChordsData.getAvailableChords());
        });
    }

    public static search(notesArray: NoteConstant[]): Promise<SearchResponseInterface> {
        return SearchService.getChordsAndScalesByNotes(notesArray);
    }

}