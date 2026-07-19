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

    },
    "thread-006": {
      boardName: "ANYBODY KNOW WHAT'S HAPPENING WITH THE HOLD HOUSE?",
      threadTitle: "OLD HOUSE ON 9TH",
      posts: [
      {
        id: "p1",
        author: "ridge_runner",
        date: "08/14/1998 19:43:32",
        content:
          <div>
            <p className="mb-4">
              Saw somebody had the weeds cut over at the Wright house this week. Thought that place had been empty forever. Anybody finally buy it?
            </p>
          </div>

      },
      {
        id: "p2",
        author: "blue_spruce",
        date: "08/14/1998 20:01:12",
        content:
        <div>
              <p className="mb-4">
                Don't think so.
              </p>
              <p className ="mb-4">
                County mows it every few years because people complain. That's all I've ever heard.
              </p>
            </div>

      },
      {
        id: "p3",
        author: "old_timer",
        date: "08/14/1998 20:27:19",
        content:
        <div>
              <p className="mb-4">The preivous owner died before I graduated.</p>
              <p className="mb-4">Can't remember anybody living there after that.</p>
            </div>

      },
      {
        id: "p4",
        author: "ky_surveyor",
        date: "08/14/1998 21:12:59",
        content:
        <div>
              <p className="mb-4">Went inside once around '91 when I was helping mark property lines.</p>
              <p className="mb-4">Nothing worth stealing.</p>
              <p className="mb-4">House felt smaller on the inside than it looked from the road. Hard to explain.</p>
            </div>

      },
      {
        id: "p5",
        author: "pine_cone",
        date: "08/14/1998 21:35:33",
        content:
        <div>
              <p className="mb-4 font-bold">&gt; House felt smaller on the inside</p>
              <p className="mb-4">Funny. My wife says the opposite.</p>
              <p className="mb-4">Says every room looked deeper than it should've.</p>
            </div>

      },
      {
        id: "p6",
        author: "old_timer",
        date: "08/14/1998 22:04:45",
        content:
        <div>
              <p className="mb-4">You boys spend too much time telling ghost stories.</p>
              <p className="mb-4">It's an old house.</p>
              <p className="mb-4">That's all.</p>
            </div>

      },
      {
        id: "p7",
        author: "ky_surveyor",
        date: "08/14/1998 22:41:12",
        content:
        <div>
              <p className="mb-4">Not saying it's haunted.</p>
              <p className="mb-4">Just saying I kept thinking I'd already walked down the hallway.</p>
            </div>

      },
      {
        id: "p8",
        author: "maple_leaf",
        date: "08/15/1998 00:08:12",
        content:
        <div>
              <p className="mb-4">Anybody remember why they filled in the old well?</p>
              <p className="mb-4">My grandfather wouldn't let us play back there.</p>
            </div>

      },
      {
        id: "p9",
        author: "blue_spruce",
        date: "08/15/1998 00:42:23",
        content:
        <div>
              <p className="mb-4">Pretty sure that wasn't a well.</p>
            </div>

      },
      {
        id: "p10",
        author: "maple_leaf",
        date: "08/15/1998 01:03:23",
        content:
        <div>
              <p className="mb-4">Then what was it?</p>
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