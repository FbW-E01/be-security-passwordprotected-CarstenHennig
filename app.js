import express from "express";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

async function checkPassword(req) {
  const correctHash = await bcrypt.hash(process.env.PASSWORD, 10);

  return await bcrypt.compare(req.body.password, correctHash);
}

const messages = [];
const app = new express();
app.use(express.json());

app.use(async (req, res, next) => {
  if ((await checkPassword(req)) === false) {
    res.status(401).send("Password mismatch");
  }
  messages.push(req.body.message);
  res.json(messages);
});

app.listen(3003);
