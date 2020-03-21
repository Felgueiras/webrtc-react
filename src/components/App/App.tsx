import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SetupScene from "../../scenes/setup/SetupScene";
import ChatScene from "../../scenes/chat/ChatScene";

function App() {
  // const [peers, setPeers] = useState([]);
  // const [joined, setJoined] = useState(false);
  // const [conn, setConn] = useState(null);
  //
  // // TODO add routing
  //
  // const saySomething = event => {
  //   event.preventDefault();
  //   conn.send(event.target.value);
  // };
  //
  // useEffect(() => {
  //   if (!peer) return;
  //   console.log(peer);
  //   setPeers([
  //     {
  //       id: "rafael-pinto"
  //     }
  //   ]);
  //   setJoined(true);
  //
  //   // receive text
  //   peer.on("connection", conn => {
  //     conn.on("data", data => {
  //       // Will print 'hi!'
  //       console.log(data);
  //     });
  //     conn.on("open", () => {
  //       conn.send("hello!");
  //     });
  //   });
  //
  //   // media call
  //   peer.on("call", call => {
  //     navigator.mediaDevices.getUserMedia(
  //       { video: true, audio: true },
  //       stream => {
  //         call.answer(stream); // Answer the call with an A/V stream.
  //         call.on("stream", remoteStream => {
  //           // Show stream in some <video> element.
  //         });
  //       },
  //       err => {
  //         console.error("Failed to get local stream", err);
  //       }
  //     );
  //   });
  // }, [peer]);
  //
  // const establishConnection = (id, type) => {
  //   // connect
  //   const conn = peer.connect(id);
  //   setConn(conn);
  //   conn.on("open", () => {
  //     conn.send("hi!");
  //   });
  //
  //   // TODO: make a call
  //   navigator.mediaDevices.getUserMedia(
  //     { video: true, audio: true },
  //     stream => {
  //       const call = peer.call(id, stream);
  //       call.on("stream", remoteStream => {
  //         // TODO: Show stream in some <video> element.
  //         console.log(remoteStream);
  //       });
  //     },
  //     err => {
  //       console.error("Failed to get local stream", err);
  //     }
  //   );
  // };

  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <SetupScene />
          </Route>
          <Route path="/chat">
            <ChatScene />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
