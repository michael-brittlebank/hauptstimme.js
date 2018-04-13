import * as Promise from 'bluebird';
import { InstrumentsData } from './data/instruments.data';
import { SearchService } from './services/search.service';
import { ScalesData } from './data/scales.data';
import { ChordsData } from './data/chords.data';
import { InstrumentInterface } from '../interfaces/instrument.interface';
import { ScaleInterface } from '../interfaces/scale.interface';
import { ChordInterface } from '../interfaces/chord.interface';
import { SearchResponseInterface } from '../interfaces/searchResponse.interface';
import { SearchRequestInterface } from '../interfaces/searchRequest.interface';

/**
 * Entry point for exposed public API methods
 */
export class HauptstimmeJs {
    /**
     * @returns list of available instruments
     */
    public static getAvailableInstruments(): Promise<InstrumentInterface[]> {
        return new Promise((resolve, reject) => {
            resolve(InstrumentsData.getAvailableInstruments());
        });
    }

    /**
     * @returns list of available scales
     */
    public static getAvailableScales(): Promise<ScaleInterface[]> {
        return new Promise((resolve, reject) => {
            resolve(ScalesData.getAvailableScales());
        });
    }

    /**
     * @returns list of available chords
     */
    public static getAvailableChords(): Promise<ChordInterface[]> {
        return new Promise((resolve, reject) => {
            resolve(ChordsData.getAvailableChords());
        });
    }

    /**
     * @param searchRequest selected notes and optional root note to search for
     * @returns list of scales and chords that match the search request parameters
     */
    public static search(searchRequest: SearchRequestInterface): Promise<SearchResponseInterface> {
        return SearchService.getChordsAndScalesByNotes(searchRequest);
    }

}