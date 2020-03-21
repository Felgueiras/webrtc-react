import React, { useState } from "react";
import "./App.css";
import Peer from "peerjs";
import { useEffect } from "react";

function App() {
  const [peers, setPeers] = useState([]);
  const [joined, setJoined] = useState(false);
  const [id, setID] = useState("123");
  const [peer, setPeer] = useState(null);
  const [conn, setConn] = useState(null);

  const startConnection = event => {
    event.preventDefault();
    setPeer(new Peer(id));
  };

  const saySomething = event => {
    event.preventDefault();
    conn.send(event.target.value);
  };

  useEffect(() => {
    if (!peer) return;
    console.log(peer);
    setPeers([
      {
        id: "rafael-pinto"
      }
    ]);
    setJoined(true);

    // receive text
    peer.on("connection", conn => {
      conn.on("data", data => {
        // Will print 'hi!'
        console.log(data);
      });
      conn.on("open", () => {
        conn.send("hello!");
      });
    });

    // media call
    peer.on("call", call => {
      navigator.mediaDevices.getUserMedia(
        { video: true, audio: true },
        stream => {
          call.answer(stream); // Answer the call with an A/V stream.
          call.on("stream", remoteStream => {
            // Show stream in some <video> element.
          });
        },
        err => {
          console.error("Failed to get local stream", err);
        }
      );
    });
  }, [peer]);

  const establishConnection = id => {
    // connect
    const conn = peer.connect(id);
    setConn(conn);
    conn.on("open", () => {
      conn.send("hi!");
    });

    // TODO: make a call
    navigator.mediaDevices.getUserMedia(
      { video: true, audio: true },
      stream => {
        const call = peer.call(id, stream);
        call.on("stream", remoteStream => {
          // TODO: Show stream in some <video> element.
          console.log(remoteStream);
        });
      },
      err => {
        console.error("Failed to get local stream", err);
      }
    );
  };

  return (
    <div className="App">
      <form onSubmit={startConnection}>
        <label>
          <h1>Select your iD!</h1>
          <input type="text" onChange={event => setID(event.target.value)} />
        </label>
        <input type="submit" value="Join chat" />
      </form>
      {joined &&
        peers.map(({ id }) => (
          <h2 key={id} onClick={() => establishConnection(id)}>
            {id}
          </h2>
        ))}
      <form onSubmit={saySomething}>
        <label>
          <input type="text" />
        </label>
        <input type="submit" value="Send message" />
      </form>
    </div>
  );
}

export default App;
