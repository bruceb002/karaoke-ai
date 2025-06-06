import React from "react";

export default function LyricsHighlighter() {
  const dummyLyrics = ["This", "is", "a", "sample", "lyric", "line"];

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold mb-2">Lyrics</h2>
      <p className="text-xl">
        {dummyLyrics.map((word, i) => (
          <span key={i} className="mr-2 text-gray-700">
            {word}
          </span>
        ))}
      </p>
    </div>
  );
}
