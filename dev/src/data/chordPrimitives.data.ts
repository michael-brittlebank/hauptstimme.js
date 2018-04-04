import { ChordOrScalePrimitiveInterface } from '../../interfaces/chordOrScalePrimitiveInterface';
import { ChordOrScaleTypeConstant } from '../../constants/chordOrScaleType.constant';

export class ChordPrimitivesData {
    public static getAvailableChordPrimitives(): ChordOrScalePrimitiveInterface[] {
        return [
            {
                name: 'Major',
                steps:  ['1', '3', '5'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Sixth',
                steps:  ['1', '3', '5', '6'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Six Nine',
                steps:  ['1', '3', '5', '6', '9'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Added Ninth',
                steps:  ['1', '3', '5', '9'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Seventh',
                steps:  ['1', '3', '5', '7'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Seventh Flat Five',
                steps:  ['1', '3', 'b5', '7'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Seventh Sharp Five',
                steps:  ['1', '3', '#5', '7'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Ninth',
                steps:  ['1', '3', '5', '7', '9'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Eleventh',
                steps:  ['1', '3', '5', '7', '(9)', '11'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Thirteenth',
                steps:  ['1', '3', '5', '7', '(9)', '(11)', '13'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Seven Sharp Eleventh',
                steps:  ['1', '3', '5', '7', '#11'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Major Flat Five',
                steps:  ['1', '3', 'b5'],
                type: ChordOrScaleTypeConstant.MAJOR
            },
            {
                name: 'Minor',
                steps:  ['1', 'b3', '5'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Sixth',
                steps:  ['1', 'b3', '5', '6'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Seventh',
                steps:  ['1', 'b3', '5', 'b7'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Added Ninth',
                steps:  ['1', 'b3', '5', '9'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Six Add Nine',
                steps:  ['1', 'b3', '5', '6', '9'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Ninth',
                steps:  ['1', 'b3', '5', 'b7', '9'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Eleventh',
                steps:  ['1', 'b3', '5', 'b7', '(9)', '11'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Thirteenth',
                steps:  ['1', 'b3', '5', 'b7', '(9)', '(11)', '13'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Major Seventh',
                steps:  ['1', 'b3', '5', '7'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Major Ninth',
                steps:  ['1', 'b3', '5', '7', '9'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Major Eleventh',
                steps:  ['1', 'b3', '5', '7', '(9)', '11'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Major Thirteenth',
                steps:  ['1', 'b3', '5', '7', '(9)', '(11)', '13'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Minor Seven Flat Fifth',
                steps:  ['1', 'b3', 'b5', 'b7'],
                type: ChordOrScaleTypeConstant.MINOR
            },
            {
                name: 'Seventh',
                steps:  ['1', '3', '5', 'b7'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Ninth',
                steps:  ['1', '3', '5', 'b7', '9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Eleventh',
                steps:  ['1', '(3)', '5', 'b7', '(9)', '11'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Thirteenth',
                steps:  ['1', '3', '5', 'b7', '(9)', '(11)', '13'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Sharp Five',
                steps:  ['1', '3', '#5', 'b7'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Flat Five',
                steps:  ['1', '3', 'b5', 'b7'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Flat Ninth',
                steps:  ['1', '3', '5', 'b7', 'b9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Sharp Ninth',
                steps:  ['1', '3', '5', 'b7', '#9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Nine Sharp Five',
                steps:  ['1', '3', '#5', 'b7', '9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Nine Flat Five',
                steps:  ['1', '3', 'b5', 'b7', '9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Sharp Five Sharp Nine',
                steps:  ['1', '3', '#5', 'b7', '#9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Sharp Five Flat Nine',
                steps:  ['1', '3', '#5', 'b7', 'b9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Flat Five Sharp Nine',
                steps:  ['1', '3', 'b5', 'b7', '#9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Flat Five Flat Nine',
                steps:  ['1', '3', 'b5', 'b7', 'b9'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Seven Sharp Eleven',
                steps:  ['1', '3', '5', 'b7', '#11'],
                type: ChordOrScaleTypeConstant.DOMINANT
            },
            {
                name: 'Diminished',
                steps:  ['1', 'b3', 'b5'],
                type: ChordOrScaleTypeConstant.SYMMETRICAL
            },
            {
                name: 'Diminished Seventh',
                steps:  ['1', 'b3', 'b5', 'bb7'],
                type: ChordOrScaleTypeConstant.SYMMETRICAL
            },
            {
                name: 'Half Diminished',
                steps:  ['1', 'b3', 'b5', 'b7'],
                type: ChordOrScaleTypeConstant.SYMMETRICAL
            },
            {
                name: 'Augmented',
                steps:  ['1', '3', '#5'],
                type: ChordOrScaleTypeConstant.SYMMETRICAL
            },
            {
                name: 'Augmented Seventh',
                steps:  ['1', '3', '#5', 'b7'],
                type: ChordOrScaleTypeConstant.SYMMETRICAL
            },
            {
                name: 'Fifth',
                steps:  ['1', '5'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Flat Fifth',
                steps:  ['1', 'b5'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Suspended Fourth',
                steps:  ['1', '4', '5'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Suspended Second',
                steps:  ['1', '2', '5', '(9)'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Suspended Seventh',
                steps:  ['1', '4', '5', 'b7'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            },
            {
                name: 'Sharp Eleven',
                steps:  ['1', '5', '#11'],
                type: ChordOrScaleTypeConstant.MISCELLANEOUS
            }
       ];
    }
}