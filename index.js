import express from "express";
import http from "http";
import path from "path";
import * as dotenv from "dotenv";
import rateLimit from "express-rate-limit";

dotenv.config();

const __dirname = process.cwd();
const app = express();
const server = http.createServer(app);
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

app.get("/forest", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "forest.html"));
});

// Define other routes...

app.get("/forest", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "forest.html"));
});

app.get("/photography", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "photography.html"));
});

app.get("/nature", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "play.html"));
});

app.get("/v2", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "v2transition.html"));
});

app.get("/go", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "go.html"));
});

app.get("/settings", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "settings.html"));
});

app.get("/ocean", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "ocean.html"));
});

app.get("/404", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "404.html"));
});

app.get("/*", (req, res) => {
  res.redirect("/404");
});

server.listen(port, () => {
  console.log(`The Unblocked Hub running at http://localhost:${port}`);
});
