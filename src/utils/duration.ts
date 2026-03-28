import type { Sequence } from "../types";

/**
 * Total duration of the visual timeline.
 *
 * Audio sequences (sceneType === "audio") are excluded from the sequential sum
 * because they are positioned as overlapping tracks via an explicit `from` in
 * DynamicComposition — they do NOT occupy their own slot in TransitionSeries.
 * Including them in the sum would inflate totalDurationInFrames by 2-3×,
 * causing abrupt music cuts and silent tail frames.
 *
 * If any sequence carries an explicit `from`, we fall back to
 * max(from + durationInFrames) across all sequences.
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

  // Only visual sequences determine the composition length.
  const visualSeqs = sequences
    .filter((s) => s.sceneType !== "audio")
    .sort((a, b) => a.order - b.order);

  if (visualSeqs.length === 0) return 0;

  return visualSeqs.reduce((total, seq, i) => {
    const isLast = i === visualSeqs.length - 1;
    const overlap = !isLast && seq.transition ? seq.transition.durationInFrames : 0;
    return total + seq.durationInFrames - overlap;
  }, 0);
}
