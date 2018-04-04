import { InstrumentsData } from './data/instruments.data';
import { InstrumentInterface } from '..';

export class HauptstimmeJs {
    /**
     * This class provides a entry point for helper functions used in the module
     */
    public static getAvailableInstruments(): InstrumentInterface[] {
        return InstrumentsData.getAvailableInstruments();
    }

    public static demo(): any {
        return JSON.stringify({});
    }

}