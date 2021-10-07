import React, { useState, useEffect } from "react";
import "./style.css";
import "./styles/tailwind-pre-build.css";
import Message from "./components/message";
import Peer from "peerjs";
export default function App() {
  const [peer, setPeer] = useState(null);
  const [peerId, setpeerId] = useState("");
  useEffect(() => {
    var peer = new Peer({
      config: {
        iceServers: [
          { url: "stun:stun.xten.com" },
          {
            url: "turn:numb.viagenie.ca",
            credential: "muazkh",
            username: "webrtc@live.com"
          }
        ]
      } /* Sample servers, please use appropriate ones */
    });
    setPeer(peer);
    window.peer = peer;
    peer.on("open", async function (id) {
      window.peerId = id;
      setpeerId(id);
      
    });
  }, [setpeerId, setPeer]);
  return (
    <div>
      <Message peerId={peerId} peer={peer} />
    </div>
  );
}
