import { InstrumentsData } from './data/instruments.data';
import {
    ChordInterface,
    InstrumentInterface,
    NoteConstant,
    ScaleInterface,
    SearchResponseInterface
} from '..';
import { SearchService } from './services/search.service';
import { ScalesData } from './data/scales.data';
import { ChordsData } from './data/chords.data';

export class HauptstimmeJs {
    /**
     * This class provides a entry point for helper functions used in the module
     */
    public static getAvailableInstruments(): Promise<InstrumentInterface[]> {
        return InstrumentsData.getAvailableInstruments();
    }

    public static getAvailableScales(): Promise<ScaleInterface[]> {
        return ScalesData.getAvailableScales();
    }

    public static getAvailableChords(): Promise<ChordInterface[]> {
        return ChordsData.getAvailableChords();
    }

    public static search(notesArray: NoteConstant[]): Promise<SearchResponseInterface> {
        return SearchService.getChordsAndScalesByNotes(notesArray);
    }

}