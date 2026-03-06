import { useState, useEffect } from "react";
import { Composition } from "remotion";
import { DynamicComposition } from "./Composition";
import type { CompositionDTO } from "./types";

const API_URL =
  (typeof process !== "undefined" &&
    process.env?.NEXT_PUBLIC_API_URL) ||
  "http://localhost:3000";

export const RemotionRoot: React.FC = () => {
  const [compositions, setCompositions] = useState<CompositionDTO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/compositions`, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        setCompositions(data.compositions ?? []);
      })
      .catch(() => setCompositions([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Composition
        id="Loading"
        component={DynamicComposition}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ sequences: [] }}
      />
    );
  }

  if (compositions.length === 0) {
    return (
      <Composition
        id="SinComposiciones"
        component={DynamicComposition}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ sequences: [] }}
      />
    );
  }

  return (
    <>
      {compositions.map((comp) => (
        <Composition
          key={comp.id}
          id={comp.id}
          component={DynamicComposition}
          durationInFrames={comp.totalDurationInFrames}
          fps={comp.fps}
          width={comp.width}
          height={comp.height}
          defaultProps={{ sequences: comp.sequences }}
        />
      ))}
    </>
  );
};
