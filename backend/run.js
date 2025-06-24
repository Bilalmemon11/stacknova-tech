// run.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

dotenv.config();

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const existing = await Admin.findOne({ email: "admin@gmail.com" });
    if (existing) {
      console.log("⚠️ Admin already exists");
      return process.exit();
    }

    const hashedPassword = await bcrypt.hash("admin123", 10); // Matches frontend password

    const admin = new Admin({
      email: "admin@gmail.com",
      password: hashedPassword,
    });

    await admin.save();
    console.log("✅ Admin user created successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Error creating admin:", err);
    process.exit(1);
  }
}

createAdmin();
