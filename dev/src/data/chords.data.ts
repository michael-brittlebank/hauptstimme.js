import { ChordInterface } from '../../interfaces/chord.interface';

export class ChordsData {
    public static getAvailableChords(): Promise<ChordInterface[]> {
        return new Promise((resolve, reject) => {
            // do not directly modify. this data is compiled from the primitives array for ease of use/searching
            const availableChords: ChordInterface[] = [{"name":"A Major","notes":[0,4,7],"type":0},{"name":"A Major Sixth","notes":[0,4,7,9],"type":0},{"name":"A Six Nine","notes":[0,2,4,7,9],"type":0},{"name":"A Added Ninth","notes":[0,2,4,7],"type":0},{"name":"A Major Seventh","notes":[0,4,7,11],"type":0},{"name":"A Major Seventh Flat Five","notes":[0,4,5,11],"type":0},{"name":"A Major Seventh Sharp Five","notes":[0,4,9,11],"type":0},{"name":"A Major Ninth","notes":[0,2,4,7,11],"type":0},{"name":"A Major Eleventh","notes":[0,2,4,5,7,11],"type":0},{"name":"A Major Thirteenth","notes":[0,2,4,5,7,9,11],"type":0},{"name":"A Major Seven Sharp Eleventh","notes":[0,4,7,11],"type":0},{"name":"A Major Flat Five","notes":[0,4,5],"type":0},{"name":"A Minor","notes":[0,2,7],"type":1},{"name":"A Minor Sixth","notes":[0,2,7,8],"type":1},{"name":"A Minor Seventh","notes":[0,2,7,8],"type":1},{"name":"A Minor Added Ninth","notes":[0,2,7],"type":1},{"name":"A Minor Six Add Nine","notes":[0,2,7,8],"type":1},{"name":"A Minor Ninth","notes":[0,2,7,8],"type":1},{"name":"A Minor Eleventh","notes":[0,2,5,7,8],"type":1},{"name":"A Minor Thirteenth","notes":[0,2,5,7,8],"type":1},{"name":"A Minor Major Seventh","notes":[0,2,7,10],"type":1},{"name":"A Minor Major Ninth","notes":[0,2,7,10],"type":1},{"name":"A Minor Major Eleventh","notes":[0,2,5,7,10],"type":1},{"name":"A Minor Major Thirteenth","notes":[0,2,5,7,8,10],"type":1},{"name":"A Minor Seven Flat Fifth","notes":[0,2,5,8],"type":1},{"name":"A Seventh","notes":[0,4,7,9],"type":2},{"name":"A Ninth","notes":[0,2,4,7,9],"type":2},{"name":"A Eleventh","notes":[0,2,4,5,7,9],"type":2},{"name":"A Thirteenth","notes":[0,2,4,5,7,9],"type":2},{"name":"A Seven Sharp Five","notes":[0,4,9],"type":2},{"name":"A Seven Flat Five","notes":[0,4,5,9],"type":2},{"name":"A Seven Flat Ninth","notes":[0,4,7,9],"type":2},{"name":"A Seven Sharp Ninth","notes":[0,4,7,9],"type":2},{"name":"A Nine Sharp Five","notes":[0,2,4,9],"type":2},{"name":"A Nine Flat Five","notes":[0,2,4,5,9],"type":2},{"name":"A Seven Sharp Five Sharp Nine","notes":[0,4,9],"type":2},{"name":"A Seven Sharp Five Flat Nine","notes":[0,4,9],"type":2},{"name":"A Seven Flat Five Sharp Nine","notes":[0,4,5,9],"type":2},{"name":"A Seven Flat Five Flat Nine","notes":[0,4,5,9],"type":2},{"name":"A Seven Sharp Eleven","notes":[0,4,7,9],"type":2},{"name":"A Diminished","notes":[0,2,5],"type":3},{"name":"A Diminished Seventh","notes":[0,2,5,7],"type":3},{"name":"A Half Diminished","notes":[0,2,5,9],"type":3},{"name":"A Augmented","notes":[0,4,9],"type":3},{"name":"A Augmented Seventh","notes":[0,4,9],"type":3},{"name":"A Fifth","notes":[0,7],"type":4},{"name":"A Flat Fifth","notes":[0,5],"type":4},{"name":"A Suspended Fourth","notes":[0,5,7],"type":4},{"name":"A Suspended Second","notes":[0,2,7],"type":4},{"name":"A Suspended Seventh","notes":[0,5,7,9],"type":4},{"name":"A Sharp Eleven","notes":[0,7],"type":4},{"name":"B&#9837; Major","notes":[1,5,8],"type":0},{"name":"B&#9837; Major Sixth","notes":[1,5,8,10],"type":0},{"name":"B&#9837; Six Nine","notes":[1,3,5,8,10],"type":0},{"name":"B&#9837; Added Ninth","notes":[1,3,5,8],"type":0},{"name":"B&#9837; Major Seventh","notes":[0,1,5,8],"type":0},{"name":"B&#9837; Major Seventh Flat Five","notes":[0,1,5,6],"type":0},{"name":"B&#9837; Major Seventh Sharp Five","notes":[0,1,5,10],"type":0},{"name":"B&#9837; Major Ninth","notes":[0,1,3,5,8],"type":0},{"name":"B&#9837; Major Eleventh","notes":[0,1,3,5,6,8],"type":0},{"name":"B&#9837; Major Thirteenth","notes":[0,1,3,5,6,8,10],"type":0},{"name":"B&#9837; Major Seven Sharp Eleventh","notes":[0,1,5,8],"type":0},{"name":"B&#9837; Major Flat Five","notes":[1,5,6],"type":0},{"name":"B&#9837; Minor","notes":[1,3,8],"type":1},{"name":"B&#9837; Minor Sixth","notes":[1,3,8,9],"type":1},{"name":"B&#9837; Minor Seventh","notes":[1,3,8,9],"type":1},{"name":"B&#9837; Minor Added Ninth","notes":[1,3,8],"type":1},{"name":"B&#9837; Minor Six Add Nine","notes":[1,3,8,9],"type":1},{"name":"B&#9837; Minor Ninth","notes":[1,3,8,9],"type":1},{"name":"B&#9837; Minor Eleventh","notes":[1,3,6,8,9],"type":1},{"name":"B&#9837; Minor Thirteenth","notes":[1,3,6,8,9],"type":1},{"name":"B&#9837; Minor Major Seventh","notes":[1,3,8,11],"type":1},{"name":"B&#9837; Minor Major Ninth","notes":[1,3,8,11],"type":1},{"name":"B&#9837; Minor Major Eleventh","notes":[1,3,6,8,11],"type":1},{"name":"B&#9837; Minor Major Thirteenth","notes":[1,3,6,8,9,11],"type":1},{"name":"B&#9837; Minor Seven Flat Fifth","notes":[1,3,6,9],"type":1},{"name":"B&#9837; Seventh","notes":[1,5,8,10],"type":2},{"name":"B&#9837; Ninth","notes":[1,3,5,8,10],"type":2},{"name":"B&#9837; Eleventh","notes":[1,3,5,6,8,10],"type":2},{"name":"B&#9837; Thirteenth","notes":[1,3,5,6,8,10],"type":2},{"name":"B&#9837; Seven Sharp Five","notes":[1,5,10],"type":2},{"name":"B&#9837; Seven Flat Five","notes":[1,5,6,10],"type":2},{"name":"B&#9837; Seven Flat Ninth","notes":[1,5,8,10],"type":2},{"name":"B&#9837; Seven Sharp Ninth","notes":[1,5,8,10],"type":2},{"name":"B&#9837; Nine Sharp Five","notes":[1,3,5,10],"type":2},{"name":"B&#9837; Nine Flat Five","notes":[1,3,5,6,10],"type":2},{"name":"B&#9837; Seven Sharp Five Sharp Nine","notes":[1,5,10],"type":2},{"name":"B&#9837; Seven Sharp Five Flat Nine","notes":[1,5,10],"type":2},{"name":"B&#9837; Seven Flat Five Sharp Nine","notes":[1,5,6,10],"type":2},{"name":"B&#9837; Seven Flat Five Flat Nine","notes":[1,5,6,10],"type":2},{"name":"B&#9837; Seven Sharp Eleven","notes":[1,5,8,10],"type":2},{"name":"B&#9837; Diminished","notes":[1,3,6],"type":3},{"name":"B&#9837; Diminished Seventh","notes":[1,3,6,8],"type":3},{"name":"B&#9837; Half Diminished","notes":[1,3,6,10],"type":3},{"name":"B&#9837; Augmented","notes":[1,5,10],"type":3},{"name":"B&#9837; Augmented Seventh","notes":[1,5,10],"type":3},{"name":"B&#9837; Fifth","notes":[1,8],"type":4},{"name":"B&#9837; Flat Fifth","notes":[1,6],"type":4},{"name":"B&#9837; Suspended Fourth","notes":[1,6,8],"type":4},{"name":"B&#9837; Suspended Second","notes":[1,3,8],"type":4},{"name":"B&#9837; Suspended Seventh","notes":[1,6,8,10],"type":4},{"name":"B&#9837; Sharp Eleven","notes":[1,8],"type":4},{"name":"B Major","notes":[2,6,9],"type":0},{"name":"B Major Sixth","notes":[2,6,9,11],"type":0},{"name":"B Six Nine","notes":[2,4,6,9,11],"type":0},{"name":"B Added Ninth","notes":[2,4,6,9],"type":0},{"name":"B Major Seventh","notes":[1,2,6,9],"type":0},{"name":"B Major Seventh Flat Five","notes":[1,2,6,7],"type":0},{"name":"B Major Seventh Sharp Five","notes":[1,2,6,11],"type":0},{"name":"B Major Ninth","notes":[1,2,4,6,9],"type":0},{"name":"B Major Eleventh","notes":[1,2,4,6,7,9],"type":0},{"name":"B Major Thirteenth","notes":[1,2,4,6,7,9,11],"type":0},{"name":"B Major Seven Sharp Eleventh","notes":[1,2,6,9],"type":0},{"name":"B Major Flat Five","notes":[2,6,7],"type":0},{"name":"B Minor","notes":[2,4,9],"type":1},{"name":"B Minor Sixth","notes":[2,4,9,10],"type":1},{"name":"B Minor Seventh","notes":[2,4,9,10],"type":1},{"name":"B Minor Added Ninth","notes":[2,4,9],"type":1},{"name":"B Minor Six Add Nine","notes":[2,4,9,10],"type":1},{"name":"B Minor Ninth","notes":[2,4,9,10],"type":1},{"name":"B Minor Eleventh","notes":[2,4,7,9,10],"type":1},{"name":"B Minor Thirteenth","notes":[2,4,7,9,10],"type":1},{"name":"B Minor Major Seventh","notes":[0,2,4,9],"type":1},{"name":"B Minor Major Ninth","notes":[0,2,4,9],"type":1},{"name":"B Minor Major Eleventh","notes":[0,2,4,7,9],"type":1},{"name":"B Minor Major Thirteenth","notes":[0,2,4,7,9,10],"type":1},{"name":"B Minor Seven Flat Fifth","notes":[2,4,7,10],"type":1},{"name":"B Seventh","notes":[2,6,9,11],"type":2},{"name":"B Ninth","notes":[2,4,6,9,11],"type":2},{"name":"B Eleventh","notes":[2,4,6,7,9,11],"type":2},{"name":"B Thirteenth","notes":[2,4,6,7,9,11],"type":2},{"name":"B Seven Sharp Five","notes":[2,6,11],"type":2},{"name":"B Seven Flat Five","notes":[2,6,7,11],"type":2},{"name":"B Seven Flat Ninth","notes":[2,6,9,11],"type":2},{"name":"B Seven Sharp Ninth","notes":[2,6,9,11],"type":2},{"name":"B Nine Sharp Five","notes":[2,4,6,11],"type":2},{"name":"B Nine Flat Five","notes":[2,4,6,7,11],"type":2},{"name":"B Seven Sharp Five Sharp Nine","notes":[2,6,11],"type":2},{"name":"B Seven Sharp Five Flat Nine","notes":[2,6,11],"type":2},{"name":"B Seven Flat Five Sharp Nine","notes":[2,6,7,11],"type":2},{"name":"B Seven Flat Five Flat Nine","notes":[2,6,7,11],"type":2},{"name":"B Seven Sharp Eleven","notes":[2,6,9,11],"type":2},{"name":"B Diminished","notes":[2,4,7],"type":3},{"name":"B Diminished Seventh","notes":[2,4,7,9],"type":3},{"name":"B Half Diminished","notes":[2,4,7,11],"type":3},{"name":"B Augmented","notes":[2,6,11],"type":3},{"name":"B Augmented Seventh","notes":[2,6,11],"type":3},{"name":"B Fifth","notes":[2,9],"type":4},{"name":"B Flat Fifth","notes":[2,7],"type":4},{"name":"B Suspended Fourth","notes":[2,7,9],"type":4},{"name":"B Suspended Second","notes":[2,4,9],"type":4},{"name":"B Suspended Seventh","notes":[2,7,9,11],"type":4},{"name":"B Sharp Eleven","notes":[2,9],"type":4},{"name":"C Major","notes":[3,7,10],"type":0},{"name":"C Major Sixth","notes":[0,3,7,10],"type":0},{"name":"C Six Nine","notes":[0,3,5,7,10],"type":0},{"name":"C Added Ninth","notes":[3,5,7,10],"type":0},{"name":"C Major Seventh","notes":[2,3,7,10],"type":0},{"name":"C Major Seventh Flat Five","notes":[2,3,7,8],"type":0},{"name":"C Major Seventh Sharp Five","notes":[0,2,3,7],"type":0},{"name":"C Major Ninth","notes":[2,3,5,7,10],"type":0},{"name":"C Major Eleventh","notes":[2,3,5,7,8,10],"type":0},{"name":"C Major Thirteenth","notes":[0,2,3,5,7,8,10],"type":0},{"name":"C Major Seven Sharp Eleventh","notes":[2,3,7,10],"type":0},{"name":"C Major Flat Five","notes":[3,7,8],"type":0},{"name":"C Minor","notes":[3,5,10],"type":1},{"name":"C Minor Sixth","notes":[3,5,10,11],"type":1},{"name":"C Minor Seventh","notes":[3,5,10,11],"type":1},{"name":"C Minor Added Ninth","notes":[3,5,10],"type":1},{"name":"C Minor Six Add Nine","notes":[3,5,10,11],"type":1},{"name":"C Minor Ninth","notes":[3,5,10,11],"type":1},{"name":"C Minor Eleventh","notes":[3,5,8,10,11],"type":1},{"name":"C Minor Thirteenth","notes":[3,5,8,10,11],"type":1},{"name":"C Minor Major Seventh","notes":[1,3,5,10],"type":1},{"name":"C Minor Major Ninth","notes":[1,3,5,10],"type":1},{"name":"C Minor Major Eleventh","notes":[1,3,5,8,10],"type":1},{"name":"C Minor Major Thirteenth","notes":[1,3,5,8,10,11],"type":1},{"name":"C Minor Seven Flat Fifth","notes":[3,5,8,11],"type":1},{"name":"C Seventh","notes":[0,3,7,10],"type":2},{"name":"C Ninth","notes":[0,3,5,7,10],"type":2},{"name":"C Eleventh","notes":[0,3,5,7,8,10],"type":2},{"name":"C Thirteenth","notes":[0,3,5,7,8,10],"type":2},{"name":"C Seven Sharp Five","notes":[0,3,7],"type":2},{"name":"C Seven Flat Five","notes":[0,3,7,8],"type":2},{"name":"C Seven Flat Ninth","notes":[0,3,7,10],"type":2},{"name":"C Seven Sharp Ninth","notes":[0,3,7,10],"type":2},{"name":"C Nine Sharp Five","notes":[0,3,5,7],"type":2},{"name":"C Nine Flat Five","notes":[0,3,5,7,8],"type":2},{"name":"C Seven Sharp Five Sharp Nine","notes":[0,3,7],"type":2},{"name":"C Seven Sharp Five Flat Nine","notes":[0,3,7],"type":2},{"name":"C Seven Flat Five Sharp Nine","notes":[0,3,7,8],"type":2},{"name":"C Seven Flat Five Flat Nine","notes":[0,3,7,8],"type":2},{"name":"C Seven Sharp Eleven","notes":[0,3,7,10],"type":2},{"name":"C Diminished","notes":[3,5,8],"type":3},{"name":"C Diminished Seventh","notes":[3,5,8,10],"type":3},{"name":"C Half Diminished","notes":[0,3,5,8],"type":3},{"name":"C Augmented","notes":[0,3,7],"type":3},{"name":"C Augmented Seventh","notes":[0,3,7],"type":3},{"name":"C Fifth","notes":[3,10],"type":4},{"name":"C Flat Fifth","notes":[3,8],"type":4},{"name":"C Suspended Fourth","notes":[3,8,10],"type":4},{"name":"C Suspended Second","notes":[3,5,10],"type":4},{"name":"C Suspended Seventh","notes":[0,3,8,10],"type":4},{"name":"C Sharp Eleven","notes":[3,10],"type":4},{"name":"C&#9839; Major","notes":[4,8,11],"type":0},{"name":"C&#9839; Major Sixth","notes":[1,4,8,11],"type":0},{"name":"C&#9839; Six Nine","notes":[1,4,6,8,11],"type":0},{"name":"C&#9839; Added Ninth","notes":[4,6,8,11],"type":0},{"name":"C&#9839; Major Seventh","notes":[3,4,8,11],"type":0},{"name":"C&#9839; Major Seventh Flat Five","notes":[3,4,8,9],"type":0},{"name":"C&#9839; Major Seventh Sharp Five","notes":[1,3,4,8],"type":0},{"name":"C&#9839; Major Ninth","notes":[3,4,6,8,11],"type":0},{"name":"C&#9839; Major Eleventh","notes":[3,4,6,8,9,11],"type":0},{"name":"C&#9839; Major Thirteenth","notes":[1,3,4,6,8,9,11],"type":0},{"name":"C&#9839; Major Seven Sharp Eleventh","notes":[3,4,8,11],"type":0},{"name":"C&#9839; Major Flat Five","notes":[4,8,9],"type":0},{"name":"C&#9839; Minor","notes":[4,6,11],"type":1},{"name":"C&#9839; Minor Sixth","notes":[0,4,6,11],"type":1},{"name":"C&#9839; Minor Seventh","notes":[0,4,6,11],"type":1},{"name":"C&#9839; Minor Added Ninth","notes":[4,6,11],"type":1},{"name":"C&#9839; Minor Six Add Nine","notes":[0,4,6,11],"type":1},{"name":"C&#9839; Minor Ninth","notes":[0,4,6,11],"type":1},{"name":"C&#9839; Minor Eleventh","notes":[0,4,6,9,11],"type":1},{"name":"C&#9839; Minor Thirteenth","notes":[0,4,6,9,11],"type":1},{"name":"C&#9839; Minor Major Seventh","notes":[2,4,6,11],"type":1},{"name":"C&#9839; Minor Major Ninth","notes":[2,4,6,11],"type":1},{"name":"C&#9839; Minor Major Eleventh","notes":[2,4,6,9,11],"type":1},{"name":"C&#9839; Minor Major Thirteenth","notes":[0,2,4,6,9,11],"type":1},{"name":"C&#9839; Minor Seven Flat Fifth","notes":[0,4,6,9],"type":1},{"name":"C&#9839; Seventh","notes":[1,4,8,11],"type":2},{"name":"C&#9839; Ninth","notes":[1,4,6,8,11],"type":2},{"name":"C&#9839; Eleventh","notes":[1,4,6,8,9,11],"type":2},{"name":"C&#9839; Thirteenth","notes":[1,4,6,8,9,11],"type":2},{"name":"C&#9839; Seven Sharp Five","notes":[1,4,8],"type":2},{"name":"C&#9839; Seven Flat Five","notes":[1,4,8,9],"type":2},{"name":"C&#9839; Seven Flat Ninth","notes":[1,4,8,11],"type":2},{"name":"C&#9839; Seven Sharp Ninth","notes":[1,4,8,11],"type":2},{"name":"C&#9839; Nine Sharp Five","notes":[1,4,6,8],"type":2},{"name":"C&#9839; Nine Flat Five","notes":[1,4,6,8,9],"type":2},{"name":"C&#9839; Seven Sharp Five Sharp Nine","notes":[1,4,8],"type":2},{"name":"C&#9839; Seven Sharp Five Flat Nine","notes":[1,4,8],"type":2},{"name":"C&#9839; Seven Flat Five Sharp Nine","notes":[1,4,8,9],"type":2},{"name":"C&#9839; Seven Flat Five Flat Nine","notes":[1,4,8,9],"type":2},{"name":"C&#9839; Seven Sharp Eleven","notes":[1,4,8,11],"type":2},{"name":"C&#9839; Diminished","notes":[4,6,9],"type":3},{"name":"C&#9839; Diminished Seventh","notes":[4,6,9,11],"type":3},{"name":"C&#9839; Half Diminished","notes":[1,4,6,9],"type":3},{"name":"C&#9839; Augmented","notes":[1,4,8],"type":3},{"name":"C&#9839; Augmented Seventh","notes":[1,4,8],"type":3},{"name":"C&#9839; Fifth","notes":[4,11],"type":4},{"name":"C&#9839; Flat Fifth","notes":[4,9],"type":4},{"name":"C&#9839; Suspended Fourth","notes":[4,9,11],"type":4},{"name":"C&#9839; Suspended Second","notes":[4,6,11],"type":4},{"name":"C&#9839; Suspended Seventh","notes":[1,4,9,11],"type":4},{"name":"C&#9839; Sharp Eleven","notes":[4,11],"type":4},{"name":"D Major","notes":[0,5,9],"type":0},{"name":"D Major Sixth","notes":[0,2,5,9],"type":0},{"name":"D Six Nine","notes":[0,2,5,7,9],"type":0},{"name":"D Added Ninth","notes":[0,5,7,9],"type":0},{"name":"D Major Seventh","notes":[0,4,5,9],"type":0},{"name":"D Major Seventh Flat Five","notes":[4,5,9,10],"type":0},{"name":"D Major Seventh Sharp Five","notes":[2,4,5,9],"type":0},{"name":"D Major Ninth","notes":[0,4,5,7,9],"type":0},{"name":"D Major Eleventh","notes":[0,4,5,7,9,10],"type":0},{"name":"D Major Thirteenth","notes":[0,2,4,5,7,9,10],"type":0},{"name":"D Major Seven Sharp Eleventh","notes":[0,4,5,9],"type":0},{"name":"D Major Flat Five","notes":[5,9,10],"type":0},{"name":"D Minor","notes":[0,5,7],"type":1},{"name":"D Minor Sixth","notes":[0,1,5,7],"type":1},{"name":"D Minor Seventh","notes":[0,1,5,7],"type":1},{"name":"D Minor Added Ninth","notes":[0,5,7],"type":1},{"name":"D Minor Six Add Nine","notes":[0,1,5,7],"type":1},{"name":"D Minor Ninth","notes":[0,1,5,7],"type":1},{"name":"D Minor Eleventh","notes":[0,1,5,7,10],"type":1},{"name":"D Minor Thirteenth","notes":[0,1,5,7,10],"type":1},{"name":"D Minor Major Seventh","notes":[0,3,5,7],"type":1},{"name":"D Minor Major Ninth","notes":[0,3,5,7],"type":1},{"name":"D Minor Major Eleventh","notes":[0,3,5,7,10],"type":1},{"name":"D Minor Major Thirteenth","notes":[0,1,3,5,7,10],"type":1},{"name":"D Minor Seven Flat Fifth","notes":[1,5,7,10],"type":1},{"name":"D Seventh","notes":[0,2,5,9],"type":2},{"name":"D Ninth","notes":[0,2,5,7,9],"type":2},{"name":"D Eleventh","notes":[0,2,5,7,9,10],"type":2},{"name":"D Thirteenth","notes":[0,2,5,7,9,10],"type":2},{"name":"D Seven Sharp Five","notes":[2,5,9],"type":2},{"name":"D Seven Flat Five","notes":[2,5,9,10],"type":2},{"name":"D Seven Flat Ninth","notes":[0,2,5,9],"type":2},{"name":"D Seven Sharp Ninth","notes":[0,2,5,9],"type":2},{"name":"D Nine Sharp Five","notes":[2,5,7,9],"type":2},{"name":"D Nine Flat Five","notes":[2,5,7,9,10],"type":2},{"name":"D Seven Sharp Five Sharp Nine","notes":[2,5,9],"type":2},{"name":"D Seven Sharp Five Flat Nine","notes":[2,5,9],"type":2},{"name":"D Seven Flat Five Sharp Nine","notes":[2,5,9,10],"type":2},{"name":"D Seven Flat Five Flat Nine","notes":[2,5,9,10],"type":2},{"name":"D Seven Sharp Eleven","notes":[0,2,5,9],"type":2},{"name":"D Diminished","notes":[5,7,10],"type":3},{"name":"D Diminished Seventh","notes":[0,5,7,10],"type":3},{"name":"D Half Diminished","notes":[2,5,7,10],"type":3},{"name":"D Augmented","notes":[2,5,9],"type":3},{"name":"D Augmented Seventh","notes":[2,5,9],"type":3},{"name":"D Fifth","notes":[0,5],"type":4},{"name":"D Flat Fifth","notes":[5,10],"type":4},{"name":"D Suspended Fourth","notes":[0,5,10],"type":4},{"name":"D Suspended Second","notes":[0,5,7],"type":4},{"name":"D Suspended Seventh","notes":[0,2,5,10],"type":4},{"name":"D Sharp Eleven","notes":[0,5],"type":4},{"name":"E&#9837; Major","notes":[1,6,10],"type":0},{"name":"E&#9837; Major Sixth","notes":[1,3,6,10],"type":0},{"name":"E&#9837; Six Nine","notes":[1,3,6,8,10],"type":0},{"name":"E&#9837; Added Ninth","notes":[1,6,8,10],"type":0},{"name":"E&#9837; Major Seventh","notes":[1,5,6,10],"type":0},{"name":"E&#9837; Major Seventh Flat Five","notes":[5,6,10,11],"type":0},{"name":"E&#9837; Major Seventh Sharp Five","notes":[3,5,6,10],"type":0},{"name":"E&#9837; Major Ninth","notes":[1,5,6,8,10],"type":0},{"name":"E&#9837; Major Eleventh","notes":[1,5,6,8,10,11],"type":0},{"name":"E&#9837; Major Thirteenth","notes":[1,3,5,6,8,10,11],"type":0},{"name":"E&#9837; Major Seven Sharp Eleventh","notes":[1,5,6,10],"type":0},{"name":"E&#9837; Major Flat Five","notes":[6,10,11],"type":0},{"name":"E&#9837; Minor","notes":[1,6,8],"type":1},{"name":"E&#9837; Minor Sixth","notes":[1,2,6,8],"type":1},{"name":"E&#9837; Minor Seventh","notes":[1,2,6,8],"type":1},{"name":"E&#9837; Minor Added Ninth","notes":[1,6,8],"type":1},{"name":"E&#9837; Minor Six Add Nine","notes":[1,2,6,8],"type":1},{"name":"E&#9837; Minor Ninth","notes":[1,2,6,8],"type":1},{"name":"E&#9837; Minor Eleventh","notes":[1,2,6,8,11],"type":1},{"name":"E&#9837; Minor Thirteenth","notes":[1,2,6,8,11],"type":1},{"name":"E&#9837; Minor Major Seventh","notes":[1,4,6,8],"type":1},{"name":"E&#9837; Minor Major Ninth","notes":[1,4,6,8],"type":1},{"name":"E&#9837; Minor Major Eleventh","notes":[1,4,6,8,11],"type":1},{"name":"E&#9837; Minor Major Thirteenth","notes":[1,2,4,6,8,11],"type":1},{"name":"E&#9837; Minor Seven Flat Fifth","notes":[2,6,8,11],"type":1},{"name":"E&#9837; Seventh","notes":[1,3,6,10],"type":2},{"name":"E&#9837; Ninth","notes":[1,3,6,8,10],"type":2},{"name":"E&#9837; Eleventh","notes":[1,3,6,8,10,11],"type":2},{"name":"E&#9837; Thirteenth","notes":[1,3,6,8,10,11],"type":2},{"name":"E&#9837; Seven Sharp Five","notes":[3,6,10],"type":2},{"name":"E&#9837; Seven Flat Five","notes":[3,6,10,11],"type":2},{"name":"E&#9837; Seven Flat Ninth","notes":[1,3,6,10],"type":2},{"name":"E&#9837; Seven Sharp Ninth","notes":[1,3,6,10],"type":2},{"name":"E&#9837; Nine Sharp Five","notes":[3,6,8,10],"type":2},{"name":"E&#9837; Nine Flat Five","notes":[3,6,8,10,11],"type":2},{"name":"E&#9837; Seven Sharp Five Sharp Nine","notes":[3,6,10],"type":2},{"name":"E&#9837; Seven Sharp Five Flat Nine","notes":[3,6,10],"type":2},{"name":"E&#9837; Seven Flat Five Sharp Nine","notes":[3,6,10,11],"type":2},{"name":"E&#9837; Seven Flat Five Flat Nine","notes":[3,6,10,11],"type":2},{"name":"E&#9837; Seven Sharp Eleven","notes":[1,3,6,10],"type":2},{"name":"E&#9837; Diminished","notes":[6,8,11],"type":3},{"name":"E&#9837; Diminished Seventh","notes":[1,6,8,11],"type":3},{"name":"E&#9837; Half Diminished","notes":[3,6,8,11],"type":3},{"name":"E&#9837; Augmented","notes":[3,6,10],"type":3},{"name":"E&#9837; Augmented Seventh","notes":[3,6,10],"type":3},{"name":"E&#9837; Fifth","notes":[1,6],"type":4},{"name":"E&#9837; Flat Fifth","notes":[6,11],"type":4},{"name":"E&#9837; Suspended Fourth","notes":[1,6,11],"type":4},{"name":"E&#9837; Suspended Second","notes":[1,6,8],"type":4},{"name":"E&#9837; Suspended Seventh","notes":[1,3,6,11],"type":4},{"name":"E&#9837; Sharp Eleven","notes":[1,6],"type":4},{"name":"E Major","notes":[2,7,11],"type":0},{"name":"E Major Sixth","notes":[2,4,7,11],"type":0},{"name":"E Six Nine","notes":[2,4,7,9,11],"type":0},{"name":"E Added Ninth","notes":[2,7,9,11],"type":0},{"name":"E Major Seventh","notes":[2,6,7,11],"type":0},{"name":"E Major Seventh Flat Five","notes":[0,6,7,11],"type":0},{"name":"E Major Seventh Sharp Five","notes":[4,6,7,11],"type":0},{"name":"E Major Ninth","notes":[2,6,7,9,11],"type":0},{"name":"E Major Eleventh","notes":[0,2,6,7,9,11],"type":0},{"name":"E Major Thirteenth","notes":[0,2,4,6,7,9,11],"type":0},{"name":"E Major Seven Sharp Eleventh","notes":[2,6,7,11],"type":0},{"name":"E Major Flat Five","notes":[0,7,11],"type":0},{"name":"E Minor","notes":[2,7,9],"type":1},{"name":"E Minor Sixth","notes":[2,3,7,9],"type":1},{"name":"E Minor Seventh","notes":[2,3,7,9],"type":1},{"name":"E Minor Added Ninth","notes":[2,7,9],"type":1},{"name":"E Minor Six Add Nine","notes":[2,3,7,9],"type":1},{"name":"E Minor Ninth","notes":[2,3,7,9],"type":1},{"name":"E Minor Eleventh","notes":[0,2,3,7,9],"type":1},{"name":"E Minor Thirteenth","notes":[0,2,3,7,9],"type":1},{"name":"E Minor Major Seventh","notes":[2,5,7,9],"type":1},{"name":"E Minor Major Ninth","notes":[2,5,7,9],"type":1},{"name":"E Minor Major Eleventh","notes":[0,2,5,7,9],"type":1},{"name":"E Minor Major Thirteenth","notes":[0,2,3,5,7,9],"type":1},{"name":"E Minor Seven Flat Fifth","notes":[0,3,7,9],"type":1},{"name":"E Seventh","notes":[2,4,7,11],"type":2},{"name":"E Ninth","notes":[2,4,7,9,11],"type":2},{"name":"E Eleventh","notes":[0,2,4,7,9,11],"type":2},{"name":"E Thirteenth","notes":[0,2,4,7,9,11],"type":2},{"name":"E Seven Sharp Five","notes":[4,7,11],"type":2},{"name":"E Seven Flat Five","notes":[0,4,7,11],"type":2},{"name":"E Seven Flat Ninth","notes":[2,4,7,11],"type":2},{"name":"E Seven Sharp Ninth","notes":[2,4,7,11],"type":2},{"name":"E Nine Sharp Five","notes":[4,7,9,11],"type":2},{"name":"E Nine Flat Five","notes":[0,4,7,9,11],"type":2},{"name":"E Seven Sharp Five Sharp Nine","notes":[4,7,11],"type":2},{"name":"E Seven Sharp Five Flat Nine","notes":[4,7,11],"type":2},{"name":"E Seven Flat Five Sharp Nine","notes":[0,4,7,11],"type":2},{"name":"E Seven Flat Five Flat Nine","notes":[0,4,7,11],"type":2},{"name":"E Seven Sharp Eleven","notes":[2,4,7,11],"type":2},{"name":"E Diminished","notes":[0,7,9],"type":3},{"name":"E Diminished Seventh","notes":[0,2,7,9],"type":3},{"name":"E Half Diminished","notes":[0,4,7,9],"type":3},{"name":"E Augmented","notes":[4,7,11],"type":3},{"name":"E Augmented Seventh","notes":[4,7,11],"type":3},{"name":"E Fifth","notes":[2,7],"type":4},{"name":"E Flat Fifth","notes":[0,7],"type":4},{"name":"E Suspended Fourth","notes":[0,2,7],"type":4},{"name":"E Suspended Second","notes":[2,7,9],"type":4},{"name":"E Suspended Seventh","notes":[0,2,4,7],"type":4},{"name":"E Sharp Eleven","notes":[2,7],"type":4},{"name":"F Major","notes":[0,3,8],"type":0},{"name":"F Major Sixth","notes":[0,3,5,8],"type":0},{"name":"F Six Nine","notes":[0,3,5,8,10],"type":0},{"name":"F Added Ninth","notes":[0,3,8,10],"type":0},{"name":"F Major Seventh","notes":[0,3,7,8],"type":0},{"name":"F Major Seventh Flat Five","notes":[0,1,7,8],"type":0},{"name":"F Major Seventh Sharp Five","notes":[0,5,7,8],"type":0},{"name":"F Major Ninth","notes":[0,3,7,8,10],"type":0},{"name":"F Major Eleventh","notes":[0,1,3,7,8,10],"type":0},{"name":"F Major Thirteenth","notes":[0,1,3,5,7,8,10],"type":0},{"name":"F Major Seven Sharp Eleventh","notes":[0,3,7,8],"type":0},{"name":"F Major Flat Five","notes":[0,1,8],"type":0},{"name":"F Minor","notes":[3,8,10],"type":1},{"name":"F Minor Sixth","notes":[3,4,8,10],"type":1},{"name":"F Minor Seventh","notes":[3,4,8,10],"type":1},{"name":"F Minor Added Ninth","notes":[3,8,10],"type":1},{"name":"F Minor Six Add Nine","notes":[3,4,8,10],"type":1},{"name":"F Minor Ninth","notes":[3,4,8,10],"type":1},{"name":"F Minor Eleventh","notes":[1,3,4,8,10],"type":1},{"name":"F Minor Thirteenth","notes":[1,3,4,8,10],"type":1},{"name":"F Minor Major Seventh","notes":[3,6,8,10],"type":1},{"name":"F Minor Major Ninth","notes":[3,6,8,10],"type":1},{"name":"F Minor Major Eleventh","notes":[1,3,6,8,10],"type":1},{"name":"F Minor Major Thirteenth","notes":[1,3,4,6,8,10],"type":1},{"name":"F Minor Seven Flat Fifth","notes":[1,4,8,10],"type":1},{"name":"F Seventh","notes":[0,3,5,8],"type":2},{"name":"F Ninth","notes":[0,3,5,8,10],"type":2},{"name":"F Eleventh","notes":[0,1,3,5,8,10],"type":2},{"name":"F Thirteenth","notes":[0,1,3,5,8,10],"type":2},{"name":"F Seven Sharp Five","notes":[0,5,8],"type":2},{"name":"F Seven Flat Five","notes":[0,1,5,8],"type":2},{"name":"F Seven Flat Ninth","notes":[0,3,5,8],"type":2},{"name":"F Seven Sharp Ninth","notes":[0,3,5,8],"type":2},{"name":"F Nine Sharp Five","notes":[0,5,8,10],"type":2},{"name":"F Nine Flat Five","notes":[0,1,5,8,10],"type":2},{"name":"F Seven Sharp Five Sharp Nine","notes":[0,5,8],"type":2},{"name":"F Seven Sharp Five Flat Nine","notes":[0,5,8],"type":2},{"name":"F Seven Flat Five Sharp Nine","notes":[0,1,5,8],"type":2},{"name":"F Seven Flat Five Flat Nine","notes":[0,1,5,8],"type":2},{"name":"F Seven Sharp Eleven","notes":[0,3,5,8],"type":2},{"name":"F Diminished","notes":[1,8,10],"type":3},{"name":"F Diminished Seventh","notes":[1,3,8,10],"type":3},{"name":"F Half Diminished","notes":[1,5,8,10],"type":3},{"name":"F Augmented","notes":[0,5,8],"type":3},{"name":"F Augmented Seventh","notes":[0,5,8],"type":3},{"name":"F Fifth","notes":[3,8],"type":4},{"name":"F Flat Fifth","notes":[1,8],"type":4},{"name":"F Suspended Fourth","notes":[1,3,8],"type":4},{"name":"F Suspended Second","notes":[3,8,10],"type":4},{"name":"F Suspended Seventh","notes":[1,3,5,8],"type":4},{"name":"F Sharp Eleven","notes":[3,8],"type":4},{"name":"F&#9839; Major","notes":[1,4,9],"type":0},{"name":"F&#9839; Major Sixth","notes":[1,4,6,9],"type":0},{"name":"F&#9839; Six Nine","notes":[1,4,6,9,11],"type":0},{"name":"F&#9839; Added Ninth","notes":[1,4,9,11],"type":0},{"name":"F&#9839; Major Seventh","notes":[1,4,8,9],"type":0},{"name":"F&#9839; Major Seventh Flat Five","notes":[1,2,8,9],"type":0},{"name":"F&#9839; Major Seventh Sharp Five","notes":[1,6,8,9],"type":0},{"name":"F&#9839; Major Ninth","notes":[1,4,8,9,11],"type":0},{"name":"F&#9839; Major Eleventh","notes":[1,2,4,8,9,11],"type":0},{"name":"F&#9839; Major Thirteenth","notes":[1,2,4,6,8,9,11],"type":0},{"name":"F&#9839; Major Seven Sharp Eleventh","notes":[1,4,8,9],"type":0},{"name":"F&#9839; Major Flat Five","notes":[1,2,9],"type":0},{"name":"F&#9839; Minor","notes":[4,9,11],"type":1},{"name":"F&#9839; Minor Sixth","notes":[4,5,9,11],"type":1},{"name":"F&#9839; Minor Seventh","notes":[4,5,9,11],"type":1},{"name":"F&#9839; Minor Added Ninth","notes":[4,9,11],"type":1},{"name":"F&#9839; Minor Six Add Nine","notes":[4,5,9,11],"type":1},{"name":"F&#9839; Minor Ninth","notes":[4,5,9,11],"type":1},{"name":"F&#9839; Minor Eleventh","notes":[2,4,5,9,11],"type":1},{"name":"F&#9839; Minor Thirteenth","notes":[2,4,5,9,11],"type":1},{"name":"F&#9839; Minor Major Seventh","notes":[4,7,9,11],"type":1},{"name":"F&#9839; Minor Major Ninth","notes":[4,7,9,11],"type":1},{"name":"F&#9839; Minor Major Eleventh","notes":[2,4,7,9,11],"type":1},{"name":"F&#9839; Minor Major Thirteenth","notes":[2,4,5,7,9,11],"type":1},{"name":"F&#9839; Minor Seven Flat Fifth","notes":[2,5,9,11],"type":1},{"name":"F&#9839; Seventh","notes":[1,4,6,9],"type":2},{"name":"F&#9839; Ninth","notes":[1,4,6,9,11],"type":2},{"name":"F&#9839; Eleventh","notes":[1,2,4,6,9,11],"type":2},{"name":"F&#9839; Thirteenth","notes":[1,2,4,6,9,11],"type":2},{"name":"F&#9839; Seven Sharp Five","notes":[1,6,9],"type":2},{"name":"F&#9839; Seven Flat Five","notes":[1,2,6,9],"type":2},{"name":"F&#9839; Seven Flat Ninth","notes":[1,4,6,9],"type":2},{"name":"F&#9839; Seven Sharp Ninth","notes":[1,4,6,9],"type":2},{"name":"F&#9839; Nine Sharp Five","notes":[1,6,9,11],"type":2},{"name":"F&#9839; Nine Flat Five","notes":[1,2,6,9,11],"type":2},{"name":"F&#9839; Seven Sharp Five Sharp Nine","notes":[1,6,9],"type":2},{"name":"F&#9839; Seven Sharp Five Flat Nine","notes":[1,6,9],"type":2},{"name":"F&#9839; Seven Flat Five Sharp Nine","notes":[1,2,6,9],"type":2},{"name":"F&#9839; Seven Flat Five Flat Nine","notes":[1,2,6,9],"type":2},{"name":"F&#9839; Seven Sharp Eleven","notes":[1,4,6,9],"type":2},{"name":"F&#9839; Diminished","notes":[2,9,11],"type":3},{"name":"F&#9839; Diminished Seventh","notes":[2,4,9,11],"type":3},{"name":"F&#9839; Half Diminished","notes":[2,6,9,11],"type":3},{"name":"F&#9839; Augmented","notes":[1,6,9],"type":3},{"name":"F&#9839; Augmented Seventh","notes":[1,6,9],"type":3},{"name":"F&#9839; Fifth","notes":[4,9],"type":4},{"name":"F&#9839; Flat Fifth","notes":[2,9],"type":4},{"name":"F&#9839; Suspended Fourth","notes":[2,4,9],"type":4},{"name":"F&#9839; Suspended Second","notes":[4,9,11],"type":4},{"name":"F&#9839; Suspended Seventh","notes":[2,4,6,9],"type":4},{"name":"F&#9839; Sharp Eleven","notes":[4,9],"type":4},{"name":"G Major","notes":[2,5,10],"type":0},{"name":"G Major Sixth","notes":[2,5,7,10],"type":0},{"name":"G Six Nine","notes":[0,2,5,7,10],"type":0},{"name":"G Added Ninth","notes":[0,2,5,10],"type":0},{"name":"G Major Seventh","notes":[2,5,9,10],"type":0},{"name":"G Major Seventh Flat Five","notes":[2,3,9,10],"type":0},{"name":"G Major Seventh Sharp Five","notes":[2,7,9,10],"type":0},{"name":"G Major Ninth","notes":[0,2,5,9,10],"type":0},{"name":"G Major Eleventh","notes":[0,2,3,5,9,10],"type":0},{"name":"G Major Thirteenth","notes":[0,2,3,5,7,9,10],"type":0},{"name":"G Major Seven Sharp Eleventh","notes":[2,5,9,10],"type":0},{"name":"G Major Flat Five","notes":[2,3,10],"type":0},{"name":"G Minor","notes":[0,5,10],"type":1},{"name":"G Minor Sixth","notes":[0,5,6,10],"type":1},{"name":"G Minor Seventh","notes":[0,5,6,10],"type":1},{"name":"G Minor Added Ninth","notes":[0,5,10],"type":1},{"name":"G Minor Six Add Nine","notes":[0,5,6,10],"type":1},{"name":"G Minor Ninth","notes":[0,5,6,10],"type":1},{"name":"G Minor Eleventh","notes":[0,3,5,6,10],"type":1},{"name":"G Minor Thirteenth","notes":[0,3,5,6,10],"type":1},{"name":"G Minor Major Seventh","notes":[0,5,8,10],"type":1},{"name":"G Minor Major Ninth","notes":[0,5,8,10],"type":1},{"name":"G Minor Major Eleventh","notes":[0,3,5,8,10],"type":1},{"name":"G Minor Major Thirteenth","notes":[0,3,5,6,8,10],"type":1},{"name":"G Minor Seven Flat Fifth","notes":[0,3,6,10],"type":1},{"name":"G Seventh","notes":[2,5,7,10],"type":2},{"name":"G Ninth","notes":[0,2,5,7,10],"type":2},{"name":"G Eleventh","notes":[0,2,3,5,7,10],"type":2},{"name":"G Thirteenth","notes":[0,2,3,5,7,10],"type":2},{"name":"G Seven Sharp Five","notes":[2,7,10],"type":2},{"name":"G Seven Flat Five","notes":[2,3,7,10],"type":2},{"name":"G Seven Flat Ninth","notes":[2,5,7,10],"type":2},{"name":"G Seven Sharp Ninth","notes":[2,5,7,10],"type":2},{"name":"G Nine Sharp Five","notes":[0,2,7,10],"type":2},{"name":"G Nine Flat Five","notes":[0,2,3,7,10],"type":2},{"name":"G Seven Sharp Five Sharp Nine","notes":[2,7,10],"type":2},{"name":"G Seven Sharp Five Flat Nine","notes":[2,7,10],"type":2},{"name":"G Seven Flat Five Sharp Nine","notes":[2,3,7,10],"type":2},{"name":"G Seven Flat Five Flat Nine","notes":[2,3,7,10],"type":2},{"name":"G Seven Sharp Eleven","notes":[2,5,7,10],"type":2},{"name":"G Diminished","notes":[0,3,10],"type":3},{"name":"G Diminished Seventh","notes":[0,3,5,10],"type":3},{"name":"G Half Diminished","notes":[0,3,7,10],"type":3},{"name":"G Augmented","notes":[2,7,10],"type":3},{"name":"G Augmented Seventh","notes":[2,7,10],"type":3},{"name":"G Fifth","notes":[5,10],"type":4},{"name":"G Flat Fifth","notes":[3,10],"type":4},{"name":"G Suspended Fourth","notes":[3,5,10],"type":4},{"name":"G Suspended Second","notes":[0,5,10],"type":4},{"name":"G Suspended Seventh","notes":[3,5,7,10],"type":4},{"name":"G Sharp Eleven","notes":[5,10],"type":4},{"name":"A&#9837; Major","notes":[3,6,11],"type":0},{"name":"A&#9837; Major Sixth","notes":[3,6,8,11],"type":0},{"name":"A&#9837; Six Nine","notes":[1,3,6,8,11],"type":0},{"name":"A&#9837; Added Ninth","notes":[1,3,6,11],"type":0},{"name":"A&#9837; Major Seventh","notes":[3,6,10,11],"type":0},{"name":"A&#9837; Major Seventh Flat Five","notes":[3,4,10,11],"type":0},{"name":"A&#9837; Major Seventh Sharp Five","notes":[3,8,10,11],"type":0},{"name":"A&#9837; Major Ninth","notes":[1,3,6,10,11],"type":0},{"name":"A&#9837; Major Eleventh","notes":[1,3,4,6,10,11],"type":0},{"name":"A&#9837; Major Thirteenth","notes":[1,3,4,6,8,10,11],"type":0},{"name":"A&#9837; Major Seven Sharp Eleventh","notes":[3,6,10,11],"type":0},{"name":"A&#9837; Major Flat Five","notes":[3,4,11],"type":0},{"name":"A&#9837; Minor","notes":[1,6,11],"type":1},{"name":"A&#9837; Minor Sixth","notes":[1,6,7,11],"type":1},{"name":"A&#9837; Minor Seventh","notes":[1,6,7,11],"type":1},{"name":"A&#9837; Minor Added Ninth","notes":[1,6,11],"type":1},{"name":"A&#9837; Minor Six Add Nine","notes":[1,6,7,11],"type":1},{"name":"A&#9837; Minor Ninth","notes":[1,6,7,11],"type":1},{"name":"A&#9837; Minor Eleventh","notes":[1,4,6,7,11],"type":1},{"name":"A&#9837; Minor Thirteenth","notes":[1,4,6,7,11],"type":1},{"name":"A&#9837; Minor Major Seventh","notes":[1,6,9,11],"type":1},{"name":"A&#9837; Minor Major Ninth","notes":[1,6,9,11],"type":1},{"name":"A&#9837; Minor Major Eleventh","notes":[1,4,6,9,11],"type":1},{"name":"A&#9837; Minor Major Thirteenth","notes":[1,4,6,7,9,11],"type":1},{"name":"A&#9837; Minor Seven Flat Fifth","notes":[1,4,7,11],"type":1},{"name":"A&#9837; Seventh","notes":[3,6,8,11],"type":2},{"name":"A&#9837; Ninth","notes":[1,3,6,8,11],"type":2},{"name":"A&#9837; Eleventh","notes":[1,3,4,6,8,11],"type":2},{"name":"A&#9837; Thirteenth","notes":[1,3,4,6,8,11],"type":2},{"name":"A&#9837; Seven Sharp Five","notes":[3,8,11],"type":2},{"name":"A&#9837; Seven Flat Five","notes":[3,4,8,11],"type":2},{"name":"A&#9837; Seven Flat Ninth","notes":[3,6,8,11],"type":2},{"name":"A&#9837; Seven Sharp Ninth","notes":[3,6,8,11],"type":2},{"name":"A&#9837; Nine Sharp Five","notes":[1,3,8,11],"type":2},{"name":"A&#9837; Nine Flat Five","notes":[1,3,4,8,11],"type":2},{"name":"A&#9837; Seven Sharp Five Sharp Nine","notes":[3,8,11],"type":2},{"name":"A&#9837; Seven Sharp Five Flat Nine","notes":[3,8,11],"type":2},{"name":"A&#9837; Seven Flat Five Sharp Nine","notes":[3,4,8,11],"type":2},{"name":"A&#9837; Seven Flat Five Flat Nine","notes":[3,4,8,11],"type":2},{"name":"A&#9837; Seven Sharp Eleven","notes":[3,6,8,11],"type":2},{"name":"A&#9837; Diminished","notes":[1,4,11],"type":3},{"name":"A&#9837; Diminished Seventh","notes":[1,4,6,11],"type":3},{"name":"A&#9837; Half Diminished","notes":[1,4,8,11],"type":3},{"name":"A&#9837; Augmented","notes":[3,8,11],"type":3},{"name":"A&#9837; Augmented Seventh","notes":[3,8,11],"type":3},{"name":"A&#9837; Fifth","notes":[6,11],"type":4},{"name":"A&#9837; Flat Fifth","notes":[4,11],"type":4},{"name":"A&#9837; Suspended Fourth","notes":[4,6,11],"type":4},{"name":"A&#9837; Suspended Second","notes":[1,6,11],"type":4},{"name":"A&#9837; Suspended Seventh","notes":[4,6,8,11],"type":4},{"name":"A&#9837; Sharp Eleven","notes":[6,11],"type":4}];
            resolve(availableChords);
        });
    }
}