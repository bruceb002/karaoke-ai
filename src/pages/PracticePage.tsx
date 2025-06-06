import React from "react";
import LyricsHighlighter from "../components/LyricsHighlighter";
import AudioPlayer from "../components/AudioPlayer";
import PitchVisualizer from "../components/PitchVisualizer";

export default function PracticePage() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <AudioPlayer />
      <LyricsHighlighter />
      <PitchVisualizer />
    </div>
  );
}
