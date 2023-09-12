import { Schema, model } from "mongoose";
import { sign } from "jsonwebtoken";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    role: {
        type: String,
        default: "user",
    },
});

userSchema.methods.getToken = function () {
    return sign(
        {
            email: this.email,
        },
        process.env.ACCESS_TOKEN,
        { expiresIn: "1h" }
    );
};

const UserModel = new model("users", userSchema);

export default UserModel;