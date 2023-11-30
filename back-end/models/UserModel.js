import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: {
      type: String,
      maxLength: 50,
      required: true
  },
  last_name: {
      type: String,
      maxLength: 50,
      required: true
  },
  phone_number: {
      type: Number,
      maxLength: 10
  },
  date_of_birth: Date,
  gender: {
      type: String,
      maxLength: 10
  },
  email: String,
  password: {
      type: String,
      maxLength: 255,
      required: true
  },
  registration_date: Date,
  role: {
    type: String,
    enum: ["candidate", "hirer"],
  },
  // user_image: Blob, 
},
{ timestamps: false });

userSchema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model("user_account", userSchema);
