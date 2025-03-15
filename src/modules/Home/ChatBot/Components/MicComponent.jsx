import * as React from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import { FaRegTrashAlt } from "react-icons/fa";
export default function MicComponent({
  audioBase64,
  setAudioBase64,
  setIsRecording,
}) {
  const [isCancelled, setIsCancelled] = React.useState(false);

  const recorderControls = useAudioRecorder(
    {
      noiseSuppression: true,
      echoCancellation: true,
    },
    (err) => console.table(err)
  );

  const addAudioElement = (blob) => {
    if (isCancelled) return;

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

  const handleCancel = () => {
    setIsCancelled(true);
    recorderControls.stopRecording();
  };

  React.useEffect(() => {
    if (recorderControls.isRecording) {
      setIsCancelled(false);
    }
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
      {recorderControls.isRecording && (
        <FaRegTrashAlt onClick={handleCancel} className="cancel-button-mic" />
      )}
    </div>
  );
}
