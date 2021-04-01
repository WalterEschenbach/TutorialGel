import feathers from '@feathersjs/client';
import io from "socket.io-client";

const ms_target = "http://localhost:3030/";

export const socket = io(ms_target, {
    transports: ["websocket"]
  });
  

const app = feathers();

app.configure(feathers.socketio(socket, {
    timeout: 42000
  }))

  

export const feathersApp = app;