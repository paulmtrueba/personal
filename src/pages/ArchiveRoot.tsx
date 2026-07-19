import React from 'react';
import { Link } from 'react-router-dom';
export function ArchiveRoot() {
  const threads = [
  {
    id: 'thread-001',
    title: 'INCIDENT REPORT #4492 - Sector 4 Audio Logs',
    author: 'sysadmin',
    replies: 3,
    date: '10/24/1998'
  },
  {
    id: 'thread-002',
    title: 'Recovered Documentation: Project CHIMERA',
    author: 'dr_vance',
    replies: 12,
    date: '11/02/1998'
  },
  {
    id: 'thread-003',
    title: 'Has anyone seen the new terminal updates?',
    author: 'guest_99',
    replies: 0,
    date: '11/05/1998'
  },
  {
    id: 'thread-004',
    title: 'CORRUPTED DATA - DO NOT OPEN',
    author: 'UNKNOWN',
    replies: 1,
    date: '??/??/????'
  },
  {
    id: 'thread-005',
    title: 'STANFORD COMPUTER LAB - DEMO DATE',
    author: 'arman_ragnar',
    replies: 1,
    date: '??/??/????'
  },
  {
    id: 'thread-006',
    title: 'OLD HOUSE ON 9TH',
    author: 'ridge_runner',
    replies: 9,
    date: '08/14/1998'
  }];

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
        </div>

        {/* Main Table */}
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
                  <span>:: ARCHIVE_LOGS.DIR :: INDEX</span>
                  <span className="text-xs font-normal">
                    [ SECURE CONNECTION ]
                  </span>
                </div>
              </td>
            </tr>

            {/* Content */}
            <tr>
              <td className="p-4">
                <div className="bg-white border-inset border-2 border-[#808080] p-2 mb-4 text-xs">
                  <p>
                    Welcome to the secure archive directory. Unauthorized access
                    is strictly prohibited and logged.
                  </p>
                  <p>Select a thread below to view recovered data fragments.</p>
                </div>

                <table
                  width="100%"
                  cellPadding="4"
                  cellSpacing="0"
                  border={1}
                  className="border-collapse border border-[#808080] bg-white">
                  
                  <thead>
                    <tr className="bg-[#e0e0e0]">
                      <th
                        align="left"
                        className="border border-[#808080] p-2 w-1/2">
                        
                        Topic Title
                      </th>
                      <th align="left" className="border border-[#808080] p-2">
                        Author
                      </th>
                      <th
                        align="center"
                        className="border border-[#808080] p-2">
                        
                        Replies
                      </th>
                      <th
                        align="center"
                        className="border border-[#808080] p-2">
                        
                        Last Post
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {threads.map((thread) =>
                    <tr key={thread.id} className="hover:bg-[#ffffcc]">
                        <td className="border border-[#808080] p-2">
                          <Link
                          to={`/archive/${thread.id}`}
                          className="text-[#0000EE] hover:text-[#FF0000] underline font-bold">
                          
                            {thread.title}
                          </Link>
                        </td>
                        <td className="border border-[#808080] p-2">
                          {thread.author}
                        </td>
                        <td
                        align="center"
                        className="border border-[#808080] p-2">
                        
                          {thread.replies}
                        </td>
                        <td
                        align="center"
                        className="border border-[#808080] p-2 text-xs">
                        
                          {thread.date}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>);

}