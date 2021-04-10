import { useSpeechContext } from "@speechly/react-client";
import React from 'react'

export default function SpeechlyApp() {
    const { speechState, segment, toggleRecording } = useSpeechContext();

    return (
        <div>
            <div className="status">{speechState}</div>
            {segment &&
                <div className="segment">
                    {segment.words.map((w) => w.value).join(" ")}
                </div>
            }
            <div className="mic-button">
                <button onClick={toggleRecording}>Record</button>
            </div>
        </div>
    );
}