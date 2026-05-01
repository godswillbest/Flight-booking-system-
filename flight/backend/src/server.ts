
import "dotenv"
import cors from "cors"
import express from "express"
import { createServer } from "http";
 
import cookieParser from "cookie-parser"

import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 3000;

const app = express(); 
const httpServer = createServer(app)

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors(
  { 
    origin: process.env.CLIENT_URL,
    credentials: true
  }
));

httpServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
