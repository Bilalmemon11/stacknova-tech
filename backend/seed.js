const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Blog = require("./models/Blog");

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Blog.create({
    title: "Test Blog from Script",
    content: "This is sample content.",
    image: "https://via.placeholder.com/300",
  });
  console.log("✅ Blog inserted");
  mongoose.disconnect();
});
