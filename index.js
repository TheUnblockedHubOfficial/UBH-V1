import express from "express";
import http from "node:http";
import createBareServer from "@tomphttp/bare-server-node";
import path from "node:path";
import * as dotenv from "dotenv";
dotenv.config();

const __dirname = process.cwd();
const server = http.createServer();
const app = express(server);
const bareServer = createBareServer("/bare/");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.get("/photography", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "photography.html"));
});

app.get("/nature", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "play.html"));
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

app.get("/beta/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "beta", "index.html"));
});

app.get("/beta/404", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "beta", "404.html"));
});

app.get("/beta/apps", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "beta", "apps.html"));
});

app.get("/beta/gs", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "beta", "gs.html"));
});

app.get("/beta/lgo", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "beta", "load.html"));
});

app.get("/beta/loading", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "beta", "fullscreen.html"));
});

app.get("/beta/search", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "beta", "search.html"));
});

app.get("/beta/settings", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "beta", "settings.html"));
});

app.get("/beta/utilities", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "beta", "utils.html"));
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
