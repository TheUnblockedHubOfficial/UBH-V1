import express from "express";
import http from "node:http";
import createBareServer from "@tomphttp/bare-server-node";
import path from "node:path";
import * as dotenv from "dotenv";
import rateLimit from "express-rate-limit"; // Import express-rate-limit
dotenv.config();

const __dirname = process.cwd();
const server = http.createServer();
const app = express(server);
const bareServer = createBareServer("/bare/");

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

// Bare Server
server.on("request", (req, res) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

server.on("upgrade", (req, socket, head) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

server.on("listening", () => {
  console.log(`The Unblocked Hub running at http://localhost:${process.env.PORT}`);
});

server.listen({
  port: process.env.PORT,
});
