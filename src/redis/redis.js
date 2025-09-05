import { createClient } from "redis";
const client = createClient({
  url: "redis://localhost:6379", // default Redis URL
});
client.on("connect", () => console.log("connected"));
client.on("error", (err) => console.error("Redis Client Error", err));

await client.connect();

export default client;