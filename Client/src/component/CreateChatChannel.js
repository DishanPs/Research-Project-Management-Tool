import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CardContent, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { StreamChat } from "stream-chat";
import { Box } from "@mui/material";
import { useChatContext } from "stream-chat-react";
import { Card } from "@mui/material";
import { Typography } from "@mui/material";
import ChatOption from "./ChatOption";
import SupervisorSideNavBar from "./SupervisorSideNavBar";
import StudentSideNavBar from "./StudentSideNavBar";
import { FaUserPlus } from "react-icons/fa";

const CreateChatChannel = () => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const apiKey = "6atn2yf229tr";

  const ChatUser = {
    id: token.iD,
    email: token.email,
  };

  const cMembers = [ChatUser.id];
  const chatClient = StreamChat.getInstance(apiKey);
  chatClient.connectUser(ChatUser, chatClient.devToken(ChatUser.id));
  const [chanelName, setChanenelName] = useState("");

  const createChanel = async () => {
    const channel = chatClient.channel("team", chanelName, {
      name: chanelName,
      members: cMembers,
    });
    await channel.create();
    navigate("/chat");
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await chatClient.queryUsers(
          { id: { $ne: ChatUser.id } },
          { id: 1 }
        );
        if (response.users.length) {
          setUsers(response.users);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url("https://media.istockphoto.com/photos/neon-glowing-speech-bubble-symbol-over-the-reflective-floor-and-in-picture-id1250735860?b=1&k=20&m=1250735860&s=170667a&w=0&h=ycxtyB1nwn6m4sKoPpU-AqTuBMkEmF2LIIXoURdp9y8=")`,
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      {token.type == "Staff" ? <SupervisorSideNavBar /> : <StudentSideNavBar />}
      <div
        style={{
          marginLeft: "200px",
        }}
      >
        <ChatOption />
        <div
          style={{
            marginLeft: "50px",
            width: "400px",
            backgroundColor: "whitesmoke",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { width: "90ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Typography svariant="h5">Group Name</Typography>
            <TextField
              style={{ width: "370px" }}
              id="filled-basic"
              required
              label="Group Name"
              variant="filled"
              type="text"
              value={chanelName}
              onChange={(e) => setChanenelName(e.target.value)}
            />
            <Typography svariant="h5">Select Members</Typography>
            <div style={{ overflow:"auto", height:"300px" }}>
            {users.map((user) => (
              <>
                <Card
                  variant="outlined"
                  onClick={() => {
                    cMembers.push(user.id);
                    alert(user.id + " Added to Group");
                    console.log(cMembers);
                  }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <FaUserPlus /> &nbsp;
                      {user.id}
                      {console.log(user)}
                    </Typography>
                  </CardContent>
                </Card>
              </>
            ))}
            </div>
            <br />
            <Button variant="contained" color="success" onClick={createChanel}>
              Create Group
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default CreateChatChannel;
