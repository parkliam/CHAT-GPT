import { useState } from "react";
import ChatBar from "./components/ChatBar";

const App = () => {
  const [chatList, setChatList] = useState([]);

  return (
    <div className="min-h-screen max-w-screen-md mx-auto flex">
      <div className="bg-blue-100 w-52">Side</div>
      <div className="grow flex flex-col">
        <div className="bg-yellow-100 grow">Main</div>
        <ChatBar chatList={chatList} setChatList={setChatList} />
      </div>
    </div>
  );
};

export default App;