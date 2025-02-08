import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Collapse,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../constants/backEnd";

export default function Admin({ admin, user }) {
  const [messages, setMessages] = useState([]);
  const [openMessage, setOpenMessage] = useState(null);
  const [responses, setResponses] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/admin/uzenetek`, {
          headers: { "x-user-id": user.uid },
        });
        setMessages(response.data.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    getMessages();
  }, [user, admin]);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (admin === false) {
        navigate("/notfound");
      }
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [admin]);

  const handleSendResponse = async (id) => {
    try {
      const responseData = { valasz: responses[id] };
      await axios.post(`${BACKEND_URL}/admin/valaszok/${id}`, responseData, {
        headers: { "x-user-id": user.uid },
      });
      alert(`Response sent for message ${id}`);
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === id
            ? {
                ...msg,
                valasz: responses[id],
                isAnswered: true,
                answerDate: new Date().toISOString(),
              }
            : msg
        )
      );
    } catch (error) {
      console.error("Error sending response:", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4">
      <div className="w-full lg:w-1/2">
        <Card className="shadow-lg">
          <CardContent>
            <Typography variant="h6" className="text-xl font-semibold">
              Megvalaszolatlan
            </Typography>
            {messages.map((msg) =>
              !msg.isAnswered ? (
                <div key={msg.id} className="mt-4">
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() =>
                      setOpenMessage(openMessage === msg.id ? null : msg.id)
                    }
                    fullWidth
                    sx={{ textAlign: "left" }}
                  >
                    {msg.cim}
                  </Button>
                  <Collapse in={openMessage === msg.id}>
                    <Box
                      className="p-4 mt-2"
                      sx={{ backgroundColor: "#f0f0f0", borderRadius: 1 }}
                    >
                      <Typography variant="body1" className="mt-2">
                        Date: {new Date(msg.created_at).toLocaleString()}
                      </Typography>
                      <Typography variant="body1" className="mt-2">
                        {msg.uzenet}
                      </Typography>
                      <TextField
                        label="Write a response"
                        variant="outlined"
                        fullWidth
                        className="mt-4"
                        multiline
                        rows={4}
                        value={responses[msg.id] || ""}
                        onChange={(e) =>
                          setResponses({
                            ...responses,
                            [msg.id]: e.target.value,
                          })
                        }
                      />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "16px",
                        }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleSendResponse(msg.id)}
                          style={{ margin: "8px" }}
                        >
                          Valasz elkuldese
                        </Button>
                      </div>
                    </Box>
                  </Collapse>
                </div>
              ) : null
            )}
          </CardContent>
        </Card>
      </div>
      <div className="w-full lg:w-1/2">
        <Card className="shadow-lg">
          <CardContent>
            <Typography variant="h6" className="text-xl font-semibold">
              Megvalaszolt
            </Typography>
            {messages.map((msg) =>
              msg.isAnswered ? (
                <div key={msg.id} className="mt-4">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() =>
                      setOpenMessage(openMessage === msg.id ? null : msg.id)
                    }
                    fullWidth
                    sx={{ textAlign: "left" }}
                  >
                    {msg.cim}
                  </Button>
                  <Collapse in={openMessage === msg.id}>
                    <Box
                      className="p-4 mt-2"
                      sx={{ backgroundColor: "#e6ffe6", borderRadius: 1 }}
                    >
                      <Typography variant="body1" className="mt-2">
                        Date: {new Date(msg.created_at).toLocaleString()}
                      </Typography>
                      <Typography variant="body1" className="mt-2">
                        {msg.uzenet}
                      </Typography>
                      {msg.valasz && (
                        <Typography
                          variant="body1"
                          className="mt-2 font-bold text-green-700"
                        >
                          Answer: {msg.valasz}
                        </Typography>
                      )}
                      {msg.answerDate && (
                        <Typography variant="body1" className="mt-2">
                          Answered On:{" "}
                          {new Date(msg.answerDate).toLocaleString()}
                        </Typography>
                      )}
                    </Box>
                  </Collapse>
                </div>
              ) : null
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
