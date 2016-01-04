/**
 * holds chord data including steps within a chord, counts,
 * and a compiled list of searchable chords
 */
(function(){
    this.count = {
        major: 12,
        minor: 13,
        dominant: 15,
        symmetrical: 3,
        miscellaneous: 5,
        searchable: {
            main:0,
            minor:0,
            dominant: 0,
            symmetrical: 0,
            miscellaneous: 0
        }
    };

    this.major = {
        major: [1,3,5],
        major_sixth: [1,3,5,6],
        six_nine: [1,3,5,6,9],
        added_ninth: [1,3,5,9],
        major_seventh: [1,3,5,7],
        major_seventh_flat_five: [1,3,'b5',7],
        major_seventh_sharp_five: [1,3,'#5',7],
        major_ninth: [1,3,5,7,9],
        major_eleventh: [1,3,5,7,'(9)',11],
        major_thirteenth: [1,3,5,7,'(9)','(11)',13],
        major_seven_sharp_eleventh: [1,3,5,7,'#11'],
        major_flat_five: [1,3,'b5']
    };

    this.minor = {
        minor: [1,'b3',5],
        minor_sixth: [1,'b3',5,6],
        minor_seventh: [1,'b3',5,'b7'],
        minor_added_ninth: [1,'b3',5,9],
        minor_six_add_nine: [1,'b3',5,6,9],
        minor_ninth: [1,'b3',5,'b7',9],
        minor_eleventh: [1,'b3',5,'b7','(9)',11],
        minor_thirteenth: [1,'b3',5,'b7','(9)','(11)',13],
        minor_major_seventh: [1,'b3',5,7],
        minor_major_ninth: [1,'b3',5,7,9],
        minor_major_eleventh: [1,'b3',5,7,'(9)',11],
        minor_major_thirteenth: [1,'b3',5,7,'(9)','(11)',13],
        minor_seven_flat_fifth: [1,'b3','b5','b7']
    };

    this.dominant = {
        seventh: [1,3,5,'b7'],
        ninth: [1,3,5,'b7',9],
        eleventh: [1,'(3)',5,'b7','(9)',11],
        thirteenth: [1,3,5,'b7','(9)','(11)',13],
        seven_sharp_five: [1,3,'#5','b7'],
        seven_flat_five: [1,3,'b5','b7'],
        seven_flat_ninth: [1,3,5,'b7','b9'],
        seven_sharp_ninth: [1,3,5,'b7','#9'],
        nine_sharp_five: [1,3,'#5','b7',9],
        nine_flat_five: [1,3,'b5','b7',9],
        seven_sharp_five_sharp_nine: [1,3,'#5','b7','#9'],
        seven_sharp_five_flat_nine: [1,3,'#5','b7','b9'],
        seven_flat_five_sharp_nine: [1,3,'b5','b7','#9'],
        seven_flat_five_flat_nine: [1,3,'b5','b7','b9'],
        seven_sharp_eleven: [1,3,5,'b7','#11']
    };

    this.symmetrical = {
        diminished: [1,'b3','b5'],
        diminished_seventh: [1,'b3','b5','bb7'],
        half_diminished: [1,'b3','b5','b7'],
        augmented: [1,3,'#5'],
        augmented_seventh: [1,3,'#5','b7']
    };

    this.miscellaneous = {
        fifth: [1,5],
        flat_fifth: [1,'b5'],
        suspended_fourth: [1,4,5],
        suspended_second: [1,2,5,'(9)'],
        suspended_seventh: [1,4,5,'b7'],
        sharp_eleven: [1,5,'#11']
    };

    this.searchable = {};

}).apply(_chorus.data.chords);