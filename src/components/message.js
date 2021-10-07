import React, { useEffect, useState } from "react";
import MessageComp from "./messageChunk";
const scroll = () => {
  setTimeout(() => {
    document.getElementById("messages").scrollTop = document.getElementById(
      "messages"
    ).scrollHeight;
  }, 50);
};
const Message = ({ peerId, peer }) => {
  const notify = () => {
    window.sound.currentTime = 0;
    window.sound.play();
  };
  const [messages, setMessages] = useState([]);
  window.messages = messages;
  console.log(messages);
  const [tmpMsg, setTmpMsg] = useState("");
  useEffect(() => {
    peer?.on("connection", function (conn) {
      window.conn = conn;
      notify();
      setMessages([...window.messages, { type: 3, msg: "Chat connected" }]);

      conn.on("data", function (data) {
        notify();
        setMessages([...window.messages, { type: 0, msg: data }]);
        scroll();
      });
    });
  }, [peer]);
  const handleSend = () => {
    setMessages([...messages, { type: 1, msg: tmpMsg }]);
    if (
      tmpMsg.length === 36 &&
      tmpMsg[8] === "-" &&
      tmpMsg[13] === "-" &&
      tmpMsg[18] === "-" &&
      tmpMsg[23] === "-"
    ) {
      let conn = peer.connect(tmpMsg);
      window.conn = conn;
      conn.on("open", function () {
        // idkwhattosay = [];
        setMessages([...window.messages, { type: 3, msg: "connected" }]);
        conn.on("data", function (data) {
          notify();
          setMessages([...window.messages, { type: 0, msg: data }]);
        });
      });
    } else {
      try {
        window.conn.send(tmpMsg);
      } catch (e) {}
    }
    scroll();
    setTmpMsg("");
  };
  useEffect(() => {
    if (peerId !== "")
      setMessages([
        ...messages,
        { type: 3, msg: `Your Id is` },
        { type: 3, msg: peerId }
      ]);
  }, [peerId, setMessages]);
  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col" style={{height: 'calc(var(--vh, 1vh) * 100)'}}>
      <div
        id="messages"
        className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
      >
        {messages.map((_) => {
          return (
            <MessageComp key={_.msg} me={_.type}>
              {_.msg}
            </MessageComp>
          );
        })}
        {/* return <MessageComp>${_.msg}</MessageComp>; */}
      </div>
      <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
        >
          <div className="relative flex">
            <input
              onChange={(e) => {
                setTmpMsg(e.target.value);
              }}
              value={tmpMsg}
              type="text"
              placeholder="Write Something"
              className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-full py-3"
            />
            <div className="absolute right-0 items-center inset-y-0 sm:flex">
              <button
                onClick={() => {
                  handleSend();
                }}
                type="button"
                className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6 transform rotate-90"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Message;
