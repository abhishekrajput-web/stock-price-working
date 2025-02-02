import express from 'express';
import {scrapeAndStoreETFData, getETFData } from '../controllers/stockController.js';

const router = express.Router();

// Route to scrape and store ETF data
router.get('/scrape-etf', scrapeAndStoreETFData);

// get stock data
router.get('/stocks', getETFData);

export default router;



