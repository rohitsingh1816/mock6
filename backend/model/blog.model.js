const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: {
    type: String,
    enum: ["Lifestyle", "Entertainment","Business", "Tech" ],
    required: true,
  },
  date: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  likes: { type: Number, default: 0 },
  comments: [{ username: String, content: String }],
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;