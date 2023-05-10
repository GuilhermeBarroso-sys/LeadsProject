import "dotenv/config";
import express from "express";
import { Server } from "socket.io";
import { routes } from "./routes";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

if(process.env.NODE_ENV !== "test" ) {
	app.listen(3000, () =>  {
		console.log("Server started at port 3000 🚀");
	});
  
}

export const io = new Server(3001);
io.on("connection", async (socket) => {
	console.log("Socket started at port 3001!");
  
});
