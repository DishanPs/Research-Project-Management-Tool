import React from "react";
import { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  LoadingIndicator,
  ChannelList,
  ChatContext,
} from "stream-chat-react";
import "stream-chat-react/dist/css/index.css";
import "@stream-io/stream-chat-css";
import ChatOption from "./ChatOption";
import SupervisorSideNavBar from "./SupervisorSideNavBar";
import StudentSideNavBar from "./StudentSideNavBar";

const RRChat = () => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const filters = { members: { $in: [token.iD] } };
  const sort = { last_message_at: -1 };
  const options = { limit: 10 };

  const apiKey = "6atn2yf229tr";

  const user = {
    id: token.iD,
    email: token,
  };
  console.log(token);
  console.log(user.id);
  const [client, setClient] = useState(null);
  const [option, setOption] = useState(false);

  useEffect(() => {
    const init = async () => {
      console.log(user.id);
      const chatClient = StreamChat.getInstance(apiKey);
      await chatClient.connectUser(user, chatClient.devToken(user.id));

      setClient(chatClient);
    };
    init();
    console.log(client);
    if (client) return () => client.disconnectUser();
  }, []);

  if (!client) return <LoadingIndicator />;

  return (
    <div>
      {token.type == "Staff" ? <SupervisorSideNavBar /> : <StudentSideNavBar />}
      <div
        style={{
          marginLeft: "200px",
          marginTop: "0px",
          marginRight: "0px",
          height: "400px",
        }}
      >
        <Chat client={client} theme="messaging light">
          {token.type == "Staff" ? <ChatOption /> : ""}
          <ChannelList filters={filters} sort={sort} options={options} />
          <Channel>
            <Window>
              <ChannelHeader />
              <MessageList hideDeletedMessages />
              <MessageInput />
            </Window>
            <Thread />
          </Channel>
        </Chat>
      </div>
    </div>
  );
};

export default RRChat;
