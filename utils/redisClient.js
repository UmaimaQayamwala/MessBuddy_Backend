// const redis = require("redis");
// const redisClient = redis.createClient();

// async function initRedis() {
// //     redisClient.on("error", (err) => console.log("❌ Redis Client Error:", err));
// //     redisClient.on("ready", () => console.log("✅ Redis client started"));

// //     try {
// //         await redisClient.connect();
// //         console.log("🎯 Redis Connected Successfully!");
// //     } catch (error) {
// //         console.log("❌ Redis Connection Failed:", error);
// //     }

// //     await redisClient.ping();

// const client = redis.createClient({
//     username: 'default',
//     password: 'XDN4PxvuMRnLICTnB0yFq7IWc75VwyvS',
//     socket: {
//         host: 'redis-14777.c14.us-east-1-2.ec2.redns.redis-cloud.com',
//         port: 14777
//     }
// });

// console.log(client);




// client.on('error', err => console.log('Redis Client Error', err));




// await client.connect();

// await client.set('too', 'car');
// const result = await client.get('too');
// console.log(result)  // >>> bar


// }


// module.exports = { initRedis, redisClient };









// backend/utils/redisClient.js

const redis = require("redis");

// ✅ Create Redis Client (move this outside function to avoid redefinition)
const redisClient = redis.createClient({
  username: 'default',
  password: 'XDN4PxvuMRnLICTnB0yFq7IWc75VwyvS',
  socket: {
    host: 'redis-14777.c14.us-east-1-2.ec2.redns.redis-cloud.com',
    port: 14777
  }
});

// ✅ Handle connection errors
redisClient.on('error', err => {
  console.error('❌ Redis Client Error:', err);
});

// ✅ Connection state
let isConnected = false;

// ✅ Initialize connection (only once)
async function initRedis() {
  if (!isConnected) {
    try {
      await redisClient.connect();
      isConnected = true;
      console.log('✅ Redis Connected Successfully');
      
      // Optional: test set/get
    //   await redisClient.set('too', 'car');
    //   const result = await redisClient.get('too');
    //   console.log('🚗 Redis GET result:', result);  // should log: car
    } catch (err) {
      console.error('❌ Redis Connection Failed:', err);
    }
  }
}

module.exports = { initRedis, redisClient };

