import asyncHandler from "../utils/asyncHandler.js";
import * as dashboardService from "../services/dashboardService.js";

export const getSummary = asyncHandler(async (req, res) => {
  const { startDate, endDate } = req.query;
  const summary = await dashboardService.getSummary(startDate, endDate);
  res.status(200).json(summary);
});

export const getCategoryTotals = asyncHandler(async (req, res) => {
  const { startDate, endDate } = req.query;
  const categories = await dashboardService.getCategoryTotals(
    startDate,
    endDate,
  );
  res.status(200).json(categories);
});

export const getMonthlyTrends = asyncHandler(async (req, res) => {
  const { startDate, endDate } = req.query;
  const trends = await dashboardService.getMonthlyTrends(startDate, endDate);
  res.status(200).json(trends);
});
