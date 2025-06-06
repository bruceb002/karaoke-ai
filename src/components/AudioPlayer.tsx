import React from "react";

export default function AudioPlayer() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold mb-2">Instrumental Player</h2>
      <audio controls className="w-full">
        <source src="/assets/instrumental.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
