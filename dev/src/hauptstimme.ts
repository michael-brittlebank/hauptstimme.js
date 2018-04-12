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
import { ChordPrimitivesData } from './data/chordPrimitives.data';

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
            resolve(ChordPrimitivesData.compileChordPrimitivesIntoChords());
        });
    }

    public static search(searchRequest: SearchRequestInterface): Promise<SearchResponseInterface> {
        return SearchService.getChordsAndScalesByNotes(searchRequest);
    }

}