import { ScaleInterface } from './scale.interface';
import { ChordInterface } from './chord.interface';

/**
 * Interface for search responses
 */
export interface SearchResponseInterface {
    scales: ScaleInterface[];
    chords: ChordInterface[];
}