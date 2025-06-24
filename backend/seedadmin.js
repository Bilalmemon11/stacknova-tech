const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Admin = require("./models/Admin");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Admin.deleteMany(); // remove old ones if needed
    await Admin.create({
      email: "admin@example.com",
      password: "admin123", // plain password for now
    });
    console.log("✅ Admin created");
    process.exit();
  })
  .catch((err) => {
    console.error("❌ Error seeding admin:", err);
    process.exit();
  });
