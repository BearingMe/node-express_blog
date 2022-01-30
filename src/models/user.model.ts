import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 20,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 100,
  },

  password: {
    type: String,
    required: true,
    maxlength: 60,
  },

  Image: {
    type: String,
    default:
      "https://res.cloudinary.com/dzqbzqgqy/image/upload/v1589788981/default_avatar_jxqzqz.png",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

export default mongoose.model("User", userSchema);