import React from 'react';
export function RetroBio() {
  const pixelatedArray = [7,8,9,10,15,20];
  const currentimage = Math.random() * pixelatedArray.length;
  return (
    <div className="w-full min-h-screen flex justify-center py-8">
      {/* Main Container Table */}
      <table
        width="760"
        cellPadding="0"
        cellSpacing="0"
        border={0}
        className="bg-white border border-[#808080] shadow-lg"
        style={{
          borderCollapse: 'collapse'
        }}>

        <tbody>
          {/* Header Row */}
          <tr>
            <td
              colSpan={2}
              className="bg-[#000080] text-white p-2 font-bold border-b border-[#808080]">

              <div className="flex justify-between items-center">
                <span>Welcome to My Homepage</span>
                <span className="text-xs font-normal">
                  [ Last Updated: 02/25/2026 ]
                </span>
              </div>
            </td>
          </tr>

          {/* Navigation / Sidebar & Main Content */}
          <tr valign="top">
            {/* Left Sidebar (Profile) */}
            <td
              width="200"
              className="bg-[#f0f0f0] p-4 border-r border-[#808080]">

              <div className="flex flex-col items-center space-y-4">
                {/* Dithered Portrait Placeholder */}
                <div className="border-2 border-inset border-[#808080] bg-white p-1">
                  <img
                    src={`/pixelated-image-${pixelatedArray[currentimage]}.jpg`}
                    alt="Author Portrait"
                    width="140"
                    height="140"
                    className="grayscale contrast-125 brightness-90"
                    style={{
                      imageRendering: 'pixelated'
                    }} />

                </div>

                <div className="text-center w-full">
                  <p className="font-bold text-sm mb-2">Status:</p>
                  <div className="bg-white border border-[#808080] p-1 text-xs italic">
                    <marquee scrollamount="3">
                      Writing... The Box...
                    </marquee>
                  </div>
                </div>

                <div className="w-full border-t border-[#808080] pt-4 mt-2">
                  <p className="font-bold text-sm mb-2">Links:</p>
                  <ul className="list-disc pl-4 text-xs space-y-1">
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#bio">Bio</a>
                    </li>
                    <li>
                      <a href="#works">Works</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                    <li>
                      <a href="#guestbook">Guestbook</a>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 text-center">
                  <img
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3R4eXJ6eXJ6eXJ6eXJ6eXJ6eXJ6eXJ6eXJ6eXJ6eXJ6eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/l0HlHFRbmaX9obq5a/giphy.gif"
                    alt="Under Construction"
                    width="80"
                    className="mx-auto" />

                </div>
              </div>
            </td>

            {/* Main Content Area */}
            <td className="p-6">
              {/* Name Header */}
              <div className="mb-6 border-b-2 border-[#808080] pb-2">
                <h1 className="text-2xl font-bold font-serif mb-1">
                  Paul M. Trueba
                </h1>
                <p className="text-sm italic text-gray-600">
                  "..."
                </p>
              </div>

              {/* Bio Section */}
              <div className="mb-8">
                <h2 className="bg-[#c0c0c0] px-2 py-1 font-bold text-sm border border-[#808080] mb-3">
                  :: ABOUT THE AUTHOR ::
                </h2>
                <p className="mb-4 text-justify leading-relaxed">
                  Paul M. Trueba is a writer of dark, character driven fiction and transgressive narrative. His work spans transgressive dark comedy and epistemic horror. Roger and the Baby is a complete novelette focusing on psychological collapse and unexpected responsibility through a satirical lens.
                </p>
                <p className="text-justify leading-relaxed">
                  My work explores the intersection of technology, and humanity,
                  and humor, and technology.
                </p>
              </div>

              {/* Publications Section */}
              <div className="mb-8">
                <h2 className="bg-[#c0c0c0] px-2 py-1 font-bold text-sm border border-[#808080] mb-3">
                  :: PUBLICATIONS & SUBMISSIONS ::
                </h2>

                <table
                  width="100%"
                  cellPadding="4"
                  cellSpacing="0"
                  border={1}
                  className="border-collapse border border-[#808080] text-sm">

                  <thead>
                    <tr className="bg-[#e0e0e0]">
                      <th align="left" className="border border-[#808080] p-2">
                        Title
                      </th>
                      <th align="left" className="border border-[#808080] p-2">
                        Publication
                      </th>
                      <th
                        align="center"
                        className="border border-[#808080] p-2">

                        Year
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-[#808080] p-2">
                        "N/a"
                      </td>
                      <td className="border border-[#808080] p-2">
                        <i>N/a</i>
                      </td>
                      <td
                        align="center"
                        className="border border-[#808080] p-2">

                        --
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Representation Section */}
              <div className="mb-8">
                <h2 className="bg-[#c0c0c0] px-2 py-1 font-bold text-sm border border-[#808080] mb-3">
                  :: REPRESENTATION ::
                </h2>
                <div className="border border-[#808080] p-4 bg-[#ffffe0]">
                  <p className="font-bold">Literary Agent:</p>
                  <p>none</p>
                {/*
                
                  <p>Sarah Miller @ The Miller Agency</p>
                  <p className="text-xs mt-1">For rights inquiries only.</p>
                */}
                </div>
              </div>
              {/* Contact Section */}
              <div className="mb-4">
                <h2 className="bg-[#c0c0c0] px-2 py-1 font-bold text-sm border border-[#808080] mb-3">
                  :: CONTACT ::
                </h2>
                <p>
                  For general inquiries, please email me at:
                  <br />
                  <a
                    href="mailto:alexander.wright@example.com"
                    className="font-bold">

                    pault.tripewireart@gmail.com
                  </a>
                </p>
                <p className="mt-2 text-xs text-gray-500">
                  (Please allow 3-5 business days for a response. No spam
                  please!)
                </p>
              </div>
            </td>
          </tr>

          {/* Footer */}
          <tr>
            <td
              colSpan={2}
              align="center"
              className="bg-[#e0e0e0] p-4 border-t border-[#808080] text-xs">

              <p>&copy; 1999-2026 Paul M. Trueba. All rights reserved.</p>
              <p className="mt-1">
                Best viewed with Netscape Navigator 4.0 or Internet Explorer 5.0
              </p>
              <p className="mt-1">Resolution 800x600 recommended.</p>
              <div className="mt-2 flex justify-center space-x-2 text-[10px]">
                <span className="border border-gray-500 px-1">
                  [ HTML 4.0 ]
                </span>
                <span className="border border-gray-500 px-1">
                  [ CSS Valid ]
                </span>
                <span className="border border-gray-500 px-1">
                  [ NO FRAMES ]
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>);

}