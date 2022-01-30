import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 100,
    required: true,
  },

  content: {
    type: String,
    required: true,
  },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Post", postSchema);