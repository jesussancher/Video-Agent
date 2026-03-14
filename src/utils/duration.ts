import type { Sequence } from "../types";

/**
 * Total duration: max(seq.from + seq.durationInFrames) cuando hay from explícito,
 * o Σ(seq.durationInFrames) − overlaps para TransitionSeries secuencial.
 */
export function calcTotalDuration(sequences: Sequence[]): number {
  if (sequences.length === 0) return 0;
  const hasExplicitFrom = sequences.some((s) => s.from !== undefined);
  if (hasExplicitFrom) {
    return Math.max(
      0,
      ...sequences.map((s) => (s.from ?? 0) + s.durationInFrames)
    );
  }
  const sorted = [...sequences].sort((a, b) => a.order - b.order);
  return sorted.reduce((total, seq, i) => {
    const isLast = i === sorted.length - 1;
    const overlap = !isLast && seq.transition ? seq.transition.durationInFrames : 0;
    return total + seq.durationInFrames - overlap;
  }, 0);
}
