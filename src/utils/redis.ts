// import { Redis } from "@upstash/redis/nodejs";

// export const redis = new Redis({
//   url: 'https://apn1-whole-pup-33034.upstash.io',
//   token: 'AYEKACQgMjI1ZjUzNjgtMjYxNS00ODVmLWI0NjItNWFhMDU0YTUyZDc0YjQzMjRlYjNmN2E1NDFlNTg5MDg4YmVlMmI4NTc3ZGY=',
// });

import * as redis from "redis";

const redisClient = redis.createClient({
  url: "redis://localhost:6379"
});
export default redisClient;



