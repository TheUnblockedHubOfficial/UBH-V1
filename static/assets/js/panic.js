import express from "express";
import path from "path";
import * as dotenv from "dotenv";
import rateLimit from "express-rate-limit";

dotenv.config();

const __dirname = process.cwd();
const app = express();
const port = process.env.PORT || 3000;

// Define the rate limit settings
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use(limiter); // Apply rate limiting to all routes

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.join(__dirname, "static"));

// Define your routes after the rate limiter
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

// Define other routes...

app.get("/*", (req, res) => {
  res.redirect("/404");
});

app.listen(port, () => {
  console.log(`The Unblocked Hub running at http://localhost:${port}`);
});
