import Leathers from "../models/leatherSchema.js";

export const getLeathers = async (req, res, next) => {
  try {
    const leathers = await Leathers.find(req.query);
    res.status(200).json(leathers);
  } catch (err) {
    next(err);
  }
};
