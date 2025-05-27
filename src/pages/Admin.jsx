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
    }, 1000);
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
              Megválaszolatlan
            </Typography>
            {messages.map((msg) =>
              !msg.isAnswered ? (
                <div key={msg.id} className="mt-4">
                  <Button
                    sx={{ "text-transform": "none" }}
                    variant="outlined"
                    color="secondary"
                    onClick={() =>
                      setOpenMessage(openMessage === msg.id ? null : msg.id)
                    }
                    fullWidth
                  >
                    {msg.cim}
                  </Button>
                  <Collapse in={openMessage === msg.id}>
                    <Box
                      className="p-4 mt-2"
                      sx={{ backgroundColor: "#f0f0f0", borderRadius: 1 }}
                    >
                      <span className="border-b border-gray-400 block mb-3">
                        Dátum: {new Date(msg.created_at).toLocaleString()}
                      </span>
                      <h1 className="block text-2xl mb-2">
                        {msg.cim}
                      </h1>
                      <span className="block ml-2 mb-2">
                        {msg.uzenet}
                      </span>
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
                          style={{ margin: "8px", "testTransform" : "none"}}
                        >
                          Válasz Küldése
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
              Megválaszolt
            </Typography>
            {messages.map((msg) =>
              msg.isAnswered ? (
                <div key={msg.id} className="mt-4">
                  <Button
                    sx={{ "text-transform": "none" }}
                    variant="outlined"
                    color="primary"
                    onClick={() =>
                      setOpenMessage(openMessage === msg.id ? null : msg.id)
                    }
                    fullWidth
                  >
                    {msg.cim}
                  </Button>
                  <Collapse in={openMessage === msg.id}>
                    <Box
                      className="p-4 mt-2"
                      sx={{ backgroundColor: "#e6ffe6", borderRadius: 1 }}
                    >
                      <span className="border-b border-gray-400 block mb-3">
                        Dátum: {new Date(msg.created_at).toLocaleString()}
                      </span>
                      <h1 className="block text-2xl mb-2">
                        {msg.cim}
                      </h1>
                      <span className="block ml-2 mb-2">
                        {msg.uzenet}
                      </span>
                      {msg.valasz && (
                        <span className="pt-2 font-bold text-green-700 block border-t border-gray-400">
                          Válasz: {msg.valasz}
                        </span>
                      )}
                      {msg.answerDate && ( //ez etlűnik random
                        <span className="mt-2 block">
                          Megválaszolva ekkor:
                          {new Date(msg.answerDate).toLocaleString()}
                        </span>
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
