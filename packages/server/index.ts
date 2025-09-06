import express from "express";
import type { Request, Response } from "express";


const app = express();

const responseForRequestForHomePage = (req: Request, res: Response) => {
    res.send("Hello World");
  }

app.get("/", responseForRequestForHomePage);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});