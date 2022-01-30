import mongoose from "mongoose";

const options = {timestamps: true};

const postSchema = new mongoose.Schema(
  {
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
  },
  options
);

export default mongoose.model("Post", postSchema);
