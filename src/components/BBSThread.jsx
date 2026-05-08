import React, { useState } from "react";
import { Link } from "react-router-dom";
export interface Post {
  id: string;
  author: string;
  date: string;
  content: React.ReactNode;
}
interface BBSThreadProps {
  boardName: string;
  threadTitle: string;
  posts: Post[];
}
export function BBSThread({ boardName, threadTitle, posts }: BBSThreadProps) {
  const [replyText, setReplyText] = useState("");
  const [showError, setShowError] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    setShowError(false);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://archive.stanford.edu/bbs/v1/thread/reply/listen");
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log(JSON.parse(xhr.responseText));
      } else {
        console.error("Request failed with status:", xhr.status);
        setShowError(true);
      }
    };
    xhr.onerror = function() {
      console.error("Network error occurred");
      setShowError(true);
    };
    xhr.send();
  };
  return (
    <div className="w-full min-h-screen flex justify-center py-8 bg-[#e0e0e0] font-mono text-sm text-black">
      <div
        style={{
          width: 760
        }}>
        
        {/* Navigation Bar */}
        <div className="mb-4 text-xs">
          <Link
            to="/"
            className="text-[#0000EE] hover:text-[#FF0000] underline">
            
            [ Return to Homepage ]
          </Link>
          {" | "}
          <Link
            to="/archive"
            className="text-[#0000EE] hover:text-[#FF0000] underline">
            
            [ Archive Logs Root ]
          </Link>
        </div>

        {/* Main Thread Table */}
        <table
          width="100%"
          cellPadding="0"
          cellSpacing="0"
          border={0}
          className="bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#808080] shadow-lg">
          
          <tbody>
            {/* Header */}
            <tr>
              <td className="bg-[#000080] text-white p-2 font-bold border-b-2 border-[#808080]">
                <div className="flex justify-between items-center">
                  <span>
                    :: {boardName} :: {threadTitle}
                  </span>
                  <span className="text-xs font-normal">[ READ ONLY ]</span>
                </div>
              </td>
            </tr>

            {/* Posts */}
            <tr>
              <td className="p-4">
                <div className="space-y-6">
                  {posts.map((post, index) =>
                  <table
                    key={post.id}
                    width="100%"
                    cellPadding="4"
                    cellSpacing="0"
                    className="border border-[#808080] bg-white">
                    
                      <tbody>
                        <tr className="bg-[#e0e0e0] border-b border-[#808080] text-xs">
                          <td
                          width="150"
                          className="border-r border-[#808080] font-bold">
                          
                            User: {post.author}
                          </td>
                          <td className="flex justify-between">
                            <span>Posted: {post.date}</span>
                            <span>Msg: #{index + 1}</span>
                          </td>
                        </tr>
                        <tr valign="top">
                          <td className="border-r border-[#808080] bg-[#f0f0f0] p-2 text-xs">
                            <div className="w-16 h-16 bg-[#c0c0c0] border-inset border-2 border-[#808080] mb-2 flex items-center justify-center text-[#808080]">
                              NO AVATAR
                            </div>
                            Status: Offline
                            <br />
                            Posts: {Math.floor(Math.random() * 500) + 1}
                          </td>
                          <td className="p-4 leading-relaxed">
                            {post.content}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                </div>

                <hr className="my-6 border-t-2 border-b-0 border-l-0 border-r-0 border-[#808080] border-inset" />

                {/* Reply Form */}
                <div className="bg-[#e0e0e0] border border-[#808080] p-4">
                  <h3 className="font-bold mb-2 text-sm">:: POST REPLY ::</h3>
                  <form onSubmit={handleSubmit}>
                    <textarea
                      className="w-full h-32 p-2 border-inset border-2 border-[#808080] font-mono text-sm mb-2"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Type your reply here..." />
                    
                    <button
                      type="submit"
                      className="px-4 py-1 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#808080] active:border-inset font-bold text-sm">
                      
                      Submit Reply
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Fake Error Modal */}
      {showError &&
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-20">
          <div className="bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#808080] w-96 shadow-xl">
            <div className="bg-[#000080] text-white px-2 py-1 font-bold flex justify-between items-center text-sm">
              <span>System Error</span>
              <button
              onClick={() => setShowError(false)}
              className="bg-[#c0c0c0] text-black border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#808080] active:border-inset w-5 h-5 flex items-center justify-center font-bold">
              
                ×
              </button>
            </div>
            <div className="p-6 flex items-start space-x-4">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl border-2 border-white shadow-sm flex-shrink-0">
                X
              </div>
              <div className="text-sm">
                <p className="mb-4">FATAL ERROR: ERR_CONNECTION_REFUSED.</p>
                <p className="mb-4">
                  POST FAILED: IT IS NO LONGER LISTENING.
                </p>
                <div className="flex justify-center">
                  <button
                  onClick={() => setShowError(false)}
                  className="px-6 py-1 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#808080] active:border-inset focus:outline-black">
                  
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>);

}