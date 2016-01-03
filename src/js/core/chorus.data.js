(function(){
    /**
     * modules
     */
    this.scales = {};
    this.chords = {};
    /**
     * holds note data and reverse lookups for notes (chars) and tones (ints)
     */
    this.notes = {
        count: {
            tones: 12,
            letters: 7
        },
        tone: {
            0: 'A',
            2: 'B',
            3: 'C',
            5: 'D',
            7: 'E',
            8: 'F',
            10: 'G'
        },
        letter: {
            A:0,
            B:2,
            C:3,
            D:5,
            E:7,
            F:8,
            G:10
        }
    };

    /**
     * holds common classnames and messages
     */
    this.dictionary = {
        class_selected:'chorus-fret-selected',//todo, change to camel case
        class_root:'chorus-fret-root',
        class_string:'chorus-string',
        class_fret:'chorus-fret',
        class_instrument: 'chorus-instrument',
        class_container: 'chorus-container',
        class_tone: 'chorus-tone-',
        error_type:'[Error] Invalid type: ',
        error_undefined:'[Error] Undefined: ',
        error_notFound: '[Error] Not Found: ',
        error_value: '[Error] Invalid Value Passed: ',
        warning_multipleRootNotes: '[Warning] Multiple root notes detected'
    };

    /**
     * holds instrument data including tunings and counts
     */
    this.instruments = {
        count: {
            all: 89,
            main: 2,
            other: 41,
            alternateGuitar: 46
        },
        main: {
            guitar: [7, 0, 5, 10, 2, 7],
            bass: [7, 0, 5, 10]
        },
        other: {
            violin: [10, 5, 0, 7],
            violin_tenor: [10, 5, 0, 7],
            mandolin: [10, 5, 0, 7],
            ukulele_baritone: [5, 10, 2, 7],
            ukulele_concert: [10, 3, 7, 0],
            ukulele_soprano: [0, 5, 9, 2],
            ukulele_tenor: [10, 3, 7, 0],
            cello: [3, 10, 5, 0],
            viola: [3, 10, 5, 0],
            banjo_plectrum: [3, 10, 2, 5],
            banjo_tenor_jazz: [3, 10, 5, 0],
            banjo_tenor_irish: [10, 5, 0, 7],
            lyre: [0, 3, 7, 10, 2, 6, 9, 0],
            bajo_sexto: [7, 0, 5, 10, 2, 8],
            balalaika_alto: [0, 0, 5],
            balalaika_soprano: [7, 7, 0],
            cuatro: [2, 7, 0, 5, 10],
            cuatro_cubano: [10, 3, 7, 0],
            dulcimer: [10, 3, 3, 3],
            dulcimer_alt: [5, 5, 0, 5],
            mandola: [3, 10, 5, 0],
            sitar: [3, 3, 10, 3, 10, 3, 8],
            solo_bass: [9, 2, 7, 0],
            dobro: [10, 2, 5, 10, 2, 5],
            guitarron: [0, 5, 10, 3, 7, 0],
            bouzouki: [3, 3, 8, 8, 0, 0, 5, 5],
            bouzouki_alt: [5, 5, 0, 0, 5, 5],
            irish_bouzouki: [3, 8, 0, 5],
            irish_bouzouki_alt: [10, 5, 0, 5],
            fiddle: [10, 5, 0, 7],
            vihuela: [0, 5, 10, 2, 7],
            banduria: [11, 4, 9, 2, 7, 0],
            charango: [10, 3, 7, 0, 7],
            oud: [10, 0, 2, 7, 0, 5],
            oud_alt: [2, 9, 2, 7, 0, 5],
            requinto: [0, 5, 10, 3, 7, 0],
            lute: [10, 10, 3, 3, 8, 8, 0, 0, 5, 5, 10, 10],
            zither: [0, 0, 5, 10, 3],
            russian_guitar: [5, 10, 2, 5, 10, 2, 5],
            pedal_steel_guitar: [2, 5, 7, 9, 11, 2, 7, 11, 6, 9],
            pedal_steel_guitar_alt: [3, 8, 0, 3, 7, 10, 0, 3, 7, 5]
        },
        alternateGuitar: {
            major_seconds: [3, 5, 7, 9, 10, 1],
            minor_thirds: [3, 6, 9, 0, 3, 6],
            major_thirds: [7, 11, 3, 7, 11, 3],
            all_fourths: [7, 0, 5, 10, 3, 8],
            augmented_fourths: [3, 9, 3, 9, 3, 9],
            all_fifths: [3, 10, 5, 0, 7, 2],
            baritone: [2, 7, 0, 5, 9, 2],
            baritone_alt: [0, 5, 10, 3, 7, 0],
            hawaiian: [7, 0, 7, 0, 4, 7],
            new_standard: [3, 10, 5, 0, 7, 10],
            resophonic: [10, 2, 5, 10, 2, 5],
            tenor: [3, 10, 5, 0],
            open_a: [7, 0, 4, 7, 0, 7],
            open_b: [2, 9, 2, 9, 2, 6],
            open_c: [3, 10, 3, 10, 3, 7],
            open_d: [5, 0, 5, 9, 0, 5],
            modal_d: [5, 0, 5, 10, 0, 5],
            open_d_minor: [5, 0, 5, 8, 0, 5],
            open_e: [7, 2, 7, 11, 2, 7],
            open_f: [8, 0, 3, 8, 0, 3],
            open_g: [5, 10, 5, 10, 2, 5],
            modal_g: [5, 10, 5, 10, 2, 5],
            open_g_minor: [7, 0, 4, 7, 0, 7],
            admiral: [3, 10, 5, 10, 2, 3],
            buzzard: [3, 8, 3, 10, 1, 8],
            face: [3, 10, 5, 10, 0, 5],
            four_and_twenty: [5, 0, 5, 5, 0, 5],
            hot_type: [0, 2, 7, 9, 0, 5],
            layover: [5, 0, 3, 10, 3, 7],
            magic_farmer: [3, 8, 3, 10, 0, 7],
            pelican: [5, 0, 5, 7, 0, 5],
            processional: [5, 10, 5, 8, 0, 1],
            slow_motion: [5, 10, 5, 8, 3, 5],
            spirit: [4, 0, 4, 11, 0, 7],
            tarboulton: [3, 1, 3, 8, 1, 8],
            toulouse: [7, 3, 5, 8, 0, 5],
            triqueen: [5, 10, 5, 9, 0, 2],
            minor_sixths: [3, 11, 7, 3, 11, 7],
            major_sixths: [3, 0, 9, 6, 3, 0],
            mandoguitar: [3, 10, 5, 0, 7, 2],
            pentatonic: [0, 3, 5, 7, 10, 0],
            overtone: [3, 7, 10, 1, 3, 5],
            lefty: [7, 2, 10, 5, 0, 7],
            cittern: [3, 8, 3, 10, 3, 5],
            cittern_alt: [3, 10, 3, 10, 3, 10],
            balalaika: [7, 0, 5, 7, 7, 0]
        }
    };
}).apply(_chorus.data);