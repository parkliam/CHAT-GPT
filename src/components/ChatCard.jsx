const ChatCard = ({ answer, question }) => {
  return (
    <li className="flex flex-col gap-4 mb-6">
      <div className="bg-purple-200 self-start mx-4 p-2 rounded-md shadow-lg">
        {answer}
      </div>
      <div className="self-end bg-yellow-200 mx-4 p-2 rounded-md shadow-lg">
        {question}
      </div>
    </li>
  );
};

export default ChatCard;