import * as React from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

export default function MicComponent({
  audioBase64,
  setAudioBase64,
  setIsRecording,
}) {
  const recorderControls = useAudioRecorder(
    {
      noiseSuppression: true,
      echoCancellation: true,
    },
    (err) => console.table(err)
  );
  const addAudioElement = (blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64Audio = reader.result;
      console.log("🚀 ~ Base64 Audio:", base64Audio);

      const audioFormatted = base64Audio.split(
        "data:audio/webm;codecs=opus;base64,"
      );

      setAudioBase64(audioFormatted[1]);
    };
  };

  React.useEffect(() => {
    setIsRecording(recorderControls.isRecording);
  }, [recorderControls.isRecording]);

  return (
    <div className="mic-container">
      <AudioRecorder
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
        downloadFileExtension="mp3"
        showVisualizer={false}
      />
      <br />
    </div>
  );
}
