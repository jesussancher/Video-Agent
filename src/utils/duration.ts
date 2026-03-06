import type { Sequence } from "../types";

/**
 * Total duration for TransitionSeries:
 * Σ(seq.durationInFrames) − Σ(transition.durationInFrames) for non-last sequences
 */
export function calcTotalDuration(sequences: Sequence[]): number {
  if (sequences.length === 0) return 0;
  const sorted = [...sequences].sort((a, b) => a.order - b.order);
  return sorted.reduce((total, seq, i) => {
    const isLast = i === sorted.length - 1;
    const overlap = !isLast && seq.transition ? seq.transition.durationInFrames : 0;
    return total + seq.durationInFrames - overlap;
  }, 0);
}
