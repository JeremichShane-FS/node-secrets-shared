import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Using environment variables from shared file
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const API_KEY = process.env.API_KEY;
const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Application running with shared secrets file",
    database_status: `Connected to ${process.env.DB_NAME}`,
    api_status: "API configured with key",
    secrets_source: "secrets.env file",
  });
});

app.get("/debug", (req, res) => {
  res.json({
    database_password: DATABASE_PASSWORD,
    api_key: API_KEY,
    jwt_secret: JWT_SECRET,
    host: process.env.DB_HOST,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Loading secrets from: ${path.resolve("./secrets.env")}`);
});
