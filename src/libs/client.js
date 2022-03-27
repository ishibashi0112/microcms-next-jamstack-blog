import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "yuki-blog0112",
  apiKey: process.env.API_KEY,
});
