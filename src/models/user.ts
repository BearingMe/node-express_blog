import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const options = { timestamps: true };

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
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

    image: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
    },
  },
  options
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

userSchema.post("save", function (error: any, _: any, next: any) {
  if (error.name === "MongoServerError" && error.code === 11000) {
    next(new Error("Email already exists!"));
  } else {
    next();
  }
});

userSchema.methods.tokenize = function () {
  const payload = { id: this._id };
  const secret = process.env.JWT_SECRET as string;
  const options = { expiresIn: "30d" };

  return jwt.sign(payload, secret, options);
};

userSchema.methods.validatePassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

export default mongoose.model("User", userSchema);
