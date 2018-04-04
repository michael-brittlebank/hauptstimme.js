import { InstrumentsData } from './data/instruments.data';
import { InstrumentInterface } from '..';
import { ScalePrimitivesData } from './data/scalePrimitives.data';
import { ChordPrimitivesData } from './data/chordPrimitives.data';

export class HauptstimmeJs {
    /**
     * This class provides a entry point for helper functions used in the module
     */
    public static getAvailableInstruments(): InstrumentInterface[] {
        return InstrumentsData.getAvailableInstruments();
    }

    public static demo(): any {
        return JSON.stringify(ChordPrimitivesData.compileChordPrimitivesIntoChords());
    }

}