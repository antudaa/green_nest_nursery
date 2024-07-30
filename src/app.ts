import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFoundRoute from "./app/middlewares/notFoundRoute";
import router from "./app/routes";
import cookieParser from "cookie-parser";

const app: Application = express();

app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://green-nest-nursery-client.vercel.app",
    "https://green-nest-nursery-backend.vercel.app",
  ]
}));
app.use(cookieParser());

app.use(`/api`, router);

app.get("/", (req: Request, res: Response) => {
  res.send(`Wellcome to GreenNest_Nursery 🌴😎`);
});

// Global Error Handler.
app.use(globalErrorHandler);

// Not Found Router.
app.use(notFoundRoute);

export default app;
