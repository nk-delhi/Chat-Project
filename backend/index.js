const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
const axios = require("axios");
app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
      const r = await axios.put(
          "https://api.chatengine.io/users/",
          { username: username, secret: username, first_name: username},
          { headers:{"private-key":"57afd966-ff72-4ff9-99c1-54e6db41947b"}}
      );
      return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
    
  });
  
  app.listen(3001);

  