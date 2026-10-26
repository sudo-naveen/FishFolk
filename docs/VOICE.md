# FishFolk — Voice and Transcription

## 1. Scope

Voice input is a progressive enhancement. Text entry must work even when microphone access or speech transcription is unavailable.

The initial product language is English. Additional languages may be added after the full English workflow has been tested.

## 2. Important distinction

- **Audio recording:** captures sound, for example with the browser `MediaRecorder` API.
- **Speech recognition:** converts audio into text using a supported browser capability or external transcription service.
- **Text-to-speech:** reads text aloud; it is separate from transcription.

Do not describe MediaRecorder as a transcription engine.

## 3. User flow

1. User selects Record.
2. The browser requests microphone permission if needed.
3. The UI shows recording status and elapsed duration.
4. User stops the recording.
5. The application submits audio to the configured transcription implementation, if available.
6. The user reviews and edits the transcript.
7. The confirmed text follows the normal observation creation flow.
8. The UI reports success or gives a recoverable error.

Never save an unreviewed transcript as confirmed observation text without clearly informing the user and obtaining the intended confirmation.

## 4. Browser support and fallback

- Check API availability before rendering or enabling recording controls.
- Handle denied permissions, missing microphones, unsupported MIME types, empty recordings, network errors, and provider failures.
- Do not assume browser speech recognition is available in every browser.
- Do not assume recognition quality or language support without testing.
- Keep manual text entry available in every case.
- Avoid recording before the user explicitly starts it.

## 5. Provider selection

Before choosing a transcription provider, verify:
- Supported audio formats and size limits.
- Supported languages and dialects.
- Maximum duration and request limits.
- Pricing and rate limits.
- Data retention and privacy terms.
- Server-side authentication requirements.
- Whether audio can be processed without retaining it.

Do not invent API endpoints, environment variable names, or model capabilities. Use the provider's official documentation and record the final choice here.

## 6. Secrets and audio handling

- Send provider requests through a server-side Route Handler or Server Action.
- Keep provider API keys out of client bundles.
- Validate audio size and content type.
- Avoid logging raw audio or sensitive transcripts.
- Store audio only when required, using private storage and a defined retention policy.
- Delete temporary audio when processing and retention rules require it.

## 7. Transcript review

The review interface should:
- Display the transcript in an editable field.
- Let the user replay audio when it is still available.
- Clearly distinguish transcription output from user-confirmed text.
- Require explicit confirmation before saving.
- Preserve the submitted or corrected text according to the database design.
- Show a recoverable error if transcription fails, allowing manual entry.

## 8. Testing checklist

- Microphone permission granted.
- Microphone permission denied.
- No microphone device.
- Recording started and stopped.
- Empty or very short recording.
- Unsupported browser or audio format.
- Network interruption.
- Transcription provider error or timeout.
- Incorrect transcript corrected by the user.
- Transcript submitted and retrieved successfully.
- Audio does not become publicly accessible unintentionally.
- Manual text submission works without voice features.

## 9. Future multilingual support

Before adding a language, test real recordings from speakers using relevant accents and terminology. Evaluate transcription quality on a representative sample. Keep source-language transcripts and translations separate. Do not translate away local terminology or represent translated content as the speaker's exact words.
