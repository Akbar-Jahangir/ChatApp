import Pusher from "pusher-js";

const pusher = new Pusher("773cd58dddc3887acf19", {
  cluster: "ap2",
});

export default pusher;
 