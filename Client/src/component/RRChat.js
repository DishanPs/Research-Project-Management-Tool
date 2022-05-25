import React from 'react'
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
} from "stream-chat-react";
import "stream-chat-react/dist/css/index.css";
import SupervisorSideNavBar from './SupervisorSideNavBar';

const apiKey = "6atn2yf229tr";

const user = {
  id: "risina",
  name: "Risina",
  image:
    "https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-6/277763655_1126259231493574_9025479624563656838_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-wpfDl67SpsAX84heVp&_nc_ht=scontent.fcmb2-2.fna&oh=00_AT--hM50bLv2JbDrzC70qngzZTQ6XFoolZe8OO35IcPYMg&oe=62908B87",
};

const filters = { type: 'messaging', members: { $in: [user.id] } }
const sort = {last_message_at: -1}

const RRChat = () => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    const init = async () => {
      const chatClient = StreamChat.getInstance(apiKey);
      await chatClient.connectUser(user, chatClient.devToken(user.id));

      const channel = chatClient.channel("messaging", "react-talk", {
        image:
          "https://static-01.hindawi.com/styles/hindawi_wide/s3/2021-12/Research-Spotlight-Highlights_blog.jpg?itok=i5AKQMuC",
        name: "Talk About Research Project",
        members: [user.id],
      });

      const channel1 = chatClient.channel("messaging", "react-talk", {
        image:
          "https://static-01.hindawi.com/styles/hindawi_wide/s3/2021-12/Research-Spotlight-Highlights_blog.jpg?itok=i5AKQMuC",
        name: "Talk About Project",
        members: [user.id],
      });

      await channel.watch();
      await channel1.watch();

      setClient(chatClient);
    };
    init();

    if (client) return () => client.disconnectUser();
  }, []);

  if (!client) return <LoadingIndicator/>;

  return (
    <div>
      <SupervisorSideNavBar />
      <div
        style={{ marginLeft: "200px",marginTop:"0px", marginRight: "0px", height:"400px" }}
      >
        <Chat client={client} theme="messaging dark">
          <ChannelList filters={filters} sort={sort} />
          <Channel>
            <Window>
              <ChannelHeader />
              <MessageList />
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
