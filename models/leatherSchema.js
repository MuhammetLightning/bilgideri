import mongoose from "mongoose";

const leatherSchema = new mongoose.Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
});

const Leathers = mongoose.model("Leathers", leatherSchema);

export default Leathers;
