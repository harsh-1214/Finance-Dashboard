import asyncHandler from "../utils/asyncHandler.js";
import * as authService from "../services/authService.js";

export const login = asyncHandler(async (req, res) => {
  const result = await authService.login(req.body.email, req.body.password);
  res.status(200).json(result);
});
