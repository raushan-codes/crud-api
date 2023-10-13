"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redis = void 0;
const nodejs_1 = require("@upstash/redis/nodejs");
exports.redis = new nodejs_1.Redis({
    url: 'https://apn1-whole-pup-33034.upstash.io',
    token: 'AYEKACQgMjI1ZjUzNjgtMjYxNS00ODVmLWI0NjItNWFhMDU0YTUyZDc0YjQzMjRlYjNmN2E1NDFlNTg5MDg4YmVlMmI4NTc3ZGY=',
});
