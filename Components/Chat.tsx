import { DocumentData } from "firebase/firestore";

type Props = {
  messasges: DocumentData;
};

function Chat({ messasges }: Props) {
  const isAi = messasges.user.name === "ChatGpt";

  return (
    <div className={`  py-3 text-white  ${isAi && "bg-[#434654]"} `}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto ">
        <img
          src={messasges.user.avatar}
          alt="avatar"
          className="h-10 w-10 rounded-full "
        />
        <p className="pt-1 text-sm">{messasges.text}</p>
      </div>
    </div>
  );
}

export default Chat;
