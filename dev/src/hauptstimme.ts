import { InstrumentsData } from './data/instruments.data';
import { InstrumentInterface } from '..';
import { InstrumentTypeConstant } from '../constants/instrumentType.constant';

export class HauptstimmeJs {
    /**
     * This class provides a entry point for helper functions used in the module
     */
    public static getAvailableInstruments(): InstrumentInterface[] {
        return InstrumentsData.getAvailableInstruments();
    }

    public static demo(): any {
        const old: any = {

        };
        const newValues: InstrumentInterface[] = [];
        function capitalizeFirstLetter(string: string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        for (let key in old) {
            // check also if property is not inherited from prototype
            if (old.hasOwnProperty(key)) {
                newValues.push(
                    {
                        name: capitalizeFirstLetter(key),
                        rootNotes: old[key],
                        type: InstrumentTypeConstant.ALTERNATE_TUNING
                    }
                )
            }
        }
        return JSON.stringify(newValues);
    }

}