const Pusher = require("pusher");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const pusher = new Pusher({
  appId: "1945470",
  key: "410a3788ffa96266bb7d",
  secret: "7f6c8b873155195732ef",
  cluster: "ap2",
  useTLS: true 
});
app.set("PORT", process.env.PORT || 5000);

app.post("/message", (req, res) => {
  const payload = req.body;
  pusher.trigger("ChatApp", "message", payload);
  res.send(payload);
});

app.listen(app.get("PORT"), () =>
  console.log("Listening at " + app.get("PORT"))
);