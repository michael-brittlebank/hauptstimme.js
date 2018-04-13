import { ChordOrScaleTypeConstant } from '../constants/chordOrScaleType.constant';

/**
 * Shared interface for chord and scale primitives
 */
export interface ChordOrScalePrimitiveInterface {
    name: string;
    steps: string[];
    type: ChordOrScaleTypeConstant;
}