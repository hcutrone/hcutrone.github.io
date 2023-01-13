const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");
const PORT = process.env.PORT || 3001;

const app = express();
dotenv.config({ path: "./.env" });
const config = {
  headers: { Authorization: `Bearer ${process.env.GIT_API_KEY}` },
};
const url = "https://api.github.com/search/repositories?q=user:hcutrone";

app.get("/projects", async (req, res) => {
  let projects = [];
  await axios
    .get(url, config)
    .then((res) => {
      projects = res.data.items.map((repo) => {
        return {
          name: repo.name.replace(/-/g, " "),
          content: repo.description,
          gitlink: repo.html_url,
          schoolProject: repo.private,
        };
      });
    })
    .then(() => res.json({ projects: projects }));
});

app.get("/projects/school", async (req, res) => {
  let projects = [];
  await axios
    .get(url, config)
    .then((res) => {
      projects = res.data.items
        .filter((repo) => repo.private)
        .map((repo) => {
          return {
            name: repo.name.replace(/-/g, " "),
            content: repo.description,
            gitlink: repo.html_url,
            schoolProject: repo.private,
          };
        });
    })
    .then(() => res.json({ projects: projects }));
});

app.get("/projects/personal", async (req, res) => {
  let projects = [];
  await axios
    .get(url, config)
    .then((res) => {
      projects = res.data.items
        .filter((repo) => !repo.private)
        .map((repo) => {
          return {
            name: repo.name.replace(/-/g, " "),
            content: repo.description,
            gitlink: repo.html_url,
            schoolProject: repo.private,
          };
        });
    })
    .then(() => res.json({ projects: projects }));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
