---
title: "EchoVault"
summary: "A real-time transcription service that captures audio, transcribes it via Whisper, and displays the text live on a web interface."
date: "2025-11-21"
draft: false
tags:
- Real-time Transcription
- Python
- Next.js
- Whisper AI
- SSE
demoUrl: https://echovault.malabarmatrix.site
images:
  - src: /project/echovault/flowchart.png
    alt: EchoVault Backend Interface
  - src: /project/echovault/ui.png
    alt: EchoVault web interface
---

EchoVault is a real-time transcription service that captures audio from a user's microphone, transcribes it using OpenAI's Whisper model, and displays the text live on a web interface. The system features a decoupled Python backend and a Next.js frontend that communicate via a REST API and Server-Sent Events (SSE) for live updates.

### Backend

The backend is a standalone, multi-threaded Python script. It uses three concurrent queues for a non-blocking pipeline: one for raw audio data (`audioq`), one for 3-second chunks ready for transcription (`processingq`), and one for transcribed text ready to be sent to the frontend (`apiq`). It captures audio using `sounddevice`, transcribes it with the Whisper AI model, and sends the resulting text to the Next.js API.

![EchoVault Architecture](/project/echovault/backend.png)

### Frontend

The frontend is a Next.js application that provides the user interface for viewing transcriptions. It uses a dedicated API route (`/api/message`) to receive new transcriptions from the Python backend, store them in MongoDB, and broadcast them using an event emitter. Another API route (`/api/stream/[roomId]`) uses Server-Sent Events (SSE) to stream live transcriptions to the connected clients, providing a real-time view of the captured audio.

![EchoVault UI](/project/echovault/ui2.png)

### End-to-End Workflow

1.  The user runs the Python script, configuring it to point to the Next.js API with a specific room ID.
2.  The script captures audio, transcribes it, and sends the text to the `/api/message` endpoint.
3.  The Next.js server saves the message to MongoDB and emits a server-sent event.
4.  A user on the web app, connected to the `/api/stream/[roomId]` endpoint, receives the event and sees the new transcription appear instantly.
