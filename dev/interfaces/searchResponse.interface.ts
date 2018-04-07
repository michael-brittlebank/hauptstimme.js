import { ScaleInterface } from './scale.interface';
import { ChordInterface } from './chord.interface';

export interface SearchResponseInterface {
    scales: ScaleInterface[];
    chords: ChordInterface[];
}