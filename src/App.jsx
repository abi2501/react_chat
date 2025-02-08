import { useEffect, useState } from "react";
import "./App.css";
import ChatMainArea from "./Layouts/ChatMainArea";
import SideBar from "./Layouts/SideBar";
import Modal from "./Widgets/Modal";

import io from "socket.io-client";

const roomsList = ["Entertainment", "Sports", "Food", "Movie"];

// const socket = io.connect("http://localhost:3001");
const socket = io.connect("https://chat-server-6gni.onrender.com/");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);

  const initChat = (text) => {
    setUsername(text);
    setRoom(roomsList[0]);
    socket.emit("joinRoom", room);
  };

  const handleRoomChange = (room) => {
    setRoom(room);
    setMessages([]);
    socket.emit("changeRoom", room);
  };

  const handleSendMessage = (text) => {
    if (text != "") {
      const messageData = {
        room: room,
        author: username,
        message: text,
        time:
          new Date(Date.now()).getHours() +
          " : " +
          new Date(Date.now()).getMinutes(),
      };
      socket.emit("send_message", messageData);
      setMessages([...messages, { ...messageData, isSender: true }]);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages([...messages, { ...data, isSender: false }]);
    });

    socket.on("user_joined", (data) => {
      console.log("room notify ", data);
    });
  }, [socket, messages]);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* <!-------------------------- SideBar  --------------------------> */}
        <div className="w-1/4 bg-white border-r border-gray-300">
          <SideBar roomsList={roomsList} changeRoom={handleRoomChange} />
        </div>

        {/* <!-------------------------- Main Chat Box  --------------------------> */}
        <div className="flex-1">
          <ChatMainArea
            name={username}
            room={room}
            messages={messages}
            handleSendMessage={handleSendMessage}
          />
        </div>
      </div>
      {!username && <Modal initChat={initChat}></Modal>}
    </>
  );
}

export default App;
