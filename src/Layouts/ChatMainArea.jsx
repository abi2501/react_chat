import { useEffect, useState } from "react";
import OutgoingMsgItem from "./../Widgets/OutgoingMsgItem";
import IncomingMsgItem from "../Widgets/IncomingMsgItem";

function ChatMainArea({ name, room, messages, handleSendMessage }) {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleMessage = (e) => {
    e.preventDefault();
    handleSendMessage(text);
    setText("");
  };

  return (
    <div className="bg-gray-300">
      <header className="bg-white p-4 text-gray-700 flex justify-between">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <h1 className="text-2xl font-semibold">{room}</h1>
      </header>

      {/* <!-------------------------- Chat Message Box  --------------------------> */}
      <div className="h-screen overflow-y-auto p-4 pb-36 ">
        {messages.map((message, idx) => {
          if (message.isSender) {
            return (
              <IncomingMsgItem
                key={idx}
                msg={message.message}
                time={message.time}
              />
            );
          } else {
            return (
              <OutgoingMsgItem
                key={idx}
                msg={message.message}
                time={message.time}
                author={message.author}
              />
            );
          }
        })}
      </div>
      {/* <!-------------------------- Chat Input  --------------------------> */}
      <footer className="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4">
        <form onSubmit={(e) => handleMessage(e)}>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
              value={text}
              onChange={(e) => handleOnChange(e)}
            />
            <button
              className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </footer>
    </div>
  );
}

export default ChatMainArea;
