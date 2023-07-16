import express from "express";
import Leathers from "../models/leatherSchema.js";
import expressAsyncHandler from "express-async-handler";
import { getLeathers } from "../controllers/leather.js";

const router = express.Router();

// router.get(
//   "/seed",
//   expressAsyncHandler(async (req, res) => {
//     // await Leathers.remove({})
//     const createLeathers = await Leathers.insertMany(babyCalf);
//     res.send({ createLeathers });
//   })
// );
router.get("/", getLeathers);

export default router;
