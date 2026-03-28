import React from "react";
import { Composition, registerRoot } from "remotion";
import { DynamicComposition } from "./Composition";
import { compositionInputPropsSchema } from "./schemas/compositionSchema";

const RenderRoot: React.FC = () => (
  <Composition
    id="video"
    component={DynamicComposition}
    durationInFrames={900}
    fps={30}
    width={1080}
    height={1920}
    schema={compositionInputPropsSchema}
    defaultProps={{ sequences: [] }}
  />
);

registerRoot(RenderRoot);
