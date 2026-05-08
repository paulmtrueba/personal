import React from "react";
import { useParams } from "react-router-dom";
import { BBSThread, Post } from "../components/BBSThread";
export function ThreadView() {
  const { threadId } = useParams<{
    threadId: string;
  }>();
  // Mock data for different threads
  const threadsData: Record<
    string,
    {
      boardName: string;
      threadTitle: string;
      posts: Post[];
    }> =
  {
    "thread-001": {
      boardName: "INCIDENT_LOGS",
      threadTitle: "INCIDENT REPORT #4492 - Sector 4 Audio Logs",
      posts: [
      {
        id: "p1",
        author: "sysadmin",
        date: "10/24/1998 14:32:01",
        content:
        <div>
              <p className="mb-4">
                Attached is the recovered audio log from the Sector 4 breach.
                The quality is degraded but you can hear the primary alarm
                trigger at 0:12.
              </p>
              <div className="bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#808080] p-2 inline-block">
                <p className="text-xs font-bold mb-1">
                  ATTACHMENT: sector4_breach.wav
                </p>
                <audio controls className="h-8 w-64">
                  <source src="#dummy.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>

      },
      {
        id: "p2",
        author: "security_chief",
        date: "10/24/1998 15:05:44",
        content:
        <div>
              <p className="mb-4">
                I"ve reviewed the audio. I"m also attaching the only surviving
                frame from Camera 04 before it went offline. It"s heavily
                pixelated due to the electromagnetic interference.
              </p>
              <div className="border-2 border-inset border-[#808080] inline-block p-1 bg-black">
                <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop"
              alt="Corrupted Security Footage"
              width="300"
              className="grayscale contrast-150 brightness-75"
              style={{
                imageRendering: "pixelated",
                filter: "url(#dither) grayscale(100%) contrast(200%)"
              }} />
            
              </div>
            </div>

      },
      {
        id: "p3",
        author: "UNKNOWN_USER",
        date: "10/24/1998 23:59:59",
        content:
        <div className="text-red-600 font-bold">
              <p>THEY ARE ALREADY INSIDE.</p>
              <p>THEY ARE ALREADY INSIDE.</p>
              <p>THEY ARE ALREADY INSIDE.</p>
            </div>

      }]

    },
    "thread-004": {
      boardName: "QUARANTINE",
      threadTitle: "CORRUPTED DATA - DO NOT OPEN",
      posts: [
      {
        id: "p1",
        author: "SYSTEM",
        date: "??/??/????",
        content:
        <div className="font-mono">
              <p>
                0x00000000: 45 52 52 4F 52 20 44 41 54 41 20 43 4F 52 52 55
                ERROR DATA CORRU
              </p>
              <p>
                0x00000010: 50 54 45 44 20 50 4C 45 41 53 45 20 52 45 42 4F PTED
                PLEASE REBO
              </p>
              <p>
                0x00000020: 4F 54 20 53 59 53 54 45 4D 20 49 4D 4D 45 44 49 OT
                SYSTEM IMMEDI
              </p>
            </div>

      }]

    }
  };
  const threadData = threadsData[threadId || ""] || {
    boardName: "GENERAL",
    threadTitle: "Thread Not Found",
    posts: [
    {
      id: "error",
      author: "SYSTEM",
      date: "N/A",
      content:
      <p>Error 404: The requested archive fragment could not be located.</p>

    }]

  };
  return (
    <BBSThread
      boardName={threadData.boardName}
      threadTitle={threadData.threadTitle}
      posts={threadData.posts} />);


}