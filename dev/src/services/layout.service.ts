import { LayoutSettingsInterface } from '../..';

export class LayoutService {
    public static getDefaultLayoutSettings(): LayoutSettingsInterface {
        return {
            ascendingStringOrder: true,
            containerPrefix: 'hauptstimme-',
            containerClass: 'hauptstimme-instrument',
            enableMultiColour: true,
            showSearchButton: true,
            showInstrumentTitle: true
        };
    }
}