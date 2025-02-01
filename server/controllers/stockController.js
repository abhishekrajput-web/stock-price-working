// import axios from 'axios';
// import NiftyETFData from '../models/Stock.js';
// import dotenv from 'dotenv';
// dotenv.config();

// // Scrape ETF data and store in the database
// export const scrapeAndStoreETFData = async (req, res) => {
//     try {
//         // Initial request to get cookies and tokens
//         let initialResponse = await axios.get(process.env.ETF_HOME_PAGE, {
//             headers: {
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
//                 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
//                 'Accept-Language': 'en-US,en;q=0.9',
//             },
//         });

//         let cookies = initialResponse.headers['set-cookie'];

//         // Fetch data from the NSE India ETF API
//         const response = await axios.get(process.env.ETF_STOCK_DETAIL_API, {
//             headers: {
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
//                 'Accept': 'application/json',
//                 'Referer': 'https://www.nseindia.com/market-data/exchange-traded-funds-etf',
//                 'Cookie': cookies.join('; '),
//             },
//         });

//         const etfData = response.data;

//         // Get today's date in 'YYYY-MM-DD' format
//         const today = new Date().toISOString().split('T')[0];

//         // Check if the data for today's date already exists in the database
//         const existingData = await NiftyETFData.findOne({
//             fetchTime: {
//                 $gte: new Date(today + 'T00:00:00.000Z'), // Start of the day
//                 $lt: new Date(today + 'T23:59:59.999Z'), // End of the day
//             },
//         });

//         if (existingData) {
//             console.log('ETF data for today already exists in the database.');
//             return res.status(200).send('ETF data for today already exists in the database.');
//         }

//         // Map the ETF data to match the schema fields
//         console.log(etfData);
        
//         const stocks = etfData.data.map((data) => ({
//             symbol: data.symbol,
//             open: parseFloat(data.open), // Convert string to number
//             dayHigh: parseFloat(data.high),
//             dayLow: parseFloat(data.low),
//             lastPrice: parseFloat(data.ltP),
//             previousClose: parseFloat(data.prevClose),
//             change: parseFloat(data.chn),
//             pChange: parseFloat(data.per),
//             totalTradedVolume: parseInt(data.qty), // Convert string to integer
//             totalTradedValue: parseInt(data.trdVal), // Convert string to integer
//             lastUpdateTime: data.meta.quotepreopenstatus.equityTime,
//             yearHigh: parseFloat(data.wkhi),
//             yearLow: parseFloat(data.wklo),
//             perChange365d: data.yPC,
//             date365dAgo: data.date365dAgo,
//             date30dAgo: data.date30dAgo,
//             perChange30d: data.perChange30d,
//             timestamp: new Date().toISOString(),
//         }));

//         // If no data for today, store new data in the database
//         const newData = new NiftyETFData({
//             fetchTime: new Date(),
//             stocks,
//         });

//         await newData.save();
//         console.log('ETF data saved to the database successfully');
//         res.status(200).send('ETF data scraped and saved successfully');
//     } catch (error) {
//         console.error('Error scraping and storing ETF data:', error);
//         res.status(500).send('Error scraping and storing ETF data');
//     }
// };

import axios from 'axios';
import NiftyETFData from '../models/Stock.js';
import dotenv from 'dotenv';
dotenv.config();

export const scrapeAndStoreETFData = async (req, res) => {
    try {
        // Initial request to get cookies and tokens
        let initialResponse = await axios.get(process.env.ETF_HOME_PAGE, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.9',
            },
        });

        let cookies = initialResponse.headers['set-cookie'];

        // Fetch data from the NSE India ETF API
        const response = await axios.get(process.env.ETF_STOCK_DETAIL_API, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
                'Accept': 'application/json',
                'Referer': 'https://www.nseindia.com/market-data/exchange-traded-funds-etf',
                'Cookie': cookies ? cookies.join('; ') : '',
            },
        });

        // Log response for debugging
        console.log('ETF API Response:', response.data);

        if (!response.data || !response.data.data) {
            console.error('Invalid API response format:', response.data);
            return res.status(500).send('Invalid ETF API response format');
        }

        const etfData = response.data.data;

        const today = new Date().toISOString().split('T')[0];

        const existingData = await NiftyETFData.findOne({
            fetchTime: {
                $gte: new Date(today + 'T00:00:00.000Z'),
                $lt: new Date(today + 'T23:59:59.999Z'),
            },
        });

        if (existingData) {
            console.log('ETF data for today already exists.');
            return res.status(200).send('ETF data for today already exists.');
        }  

        // Utility function to safely convert values
        const safeParseFloat = (value, defaultValue = 0) =>
            value === '-' || value === '' || value === undefined ? defaultValue : parseFloat(value);

        const safeParseInt = (value, defaultValue = 0) =>
            value === '-' || value === '' || value === undefined ? defaultValue : parseInt(value);

        // Map the ETF data to match the schema fields
        const stocks = etfData.map((data) => ({
            symbol: data?.symbol || 'N/A',
            open: safeParseFloat(data?.open),
            dayHigh: safeParseFloat(data?.high),
            dayLow: safeParseFloat(data?.low),
            lastPrice: safeParseFloat(data?.ltP),
            previousClose: safeParseFloat(data?.prevClose),
            change: safeParseFloat(data?.chn),
            pChange: safeParseFloat(data?.per),
            totalTradedVolume: safeParseInt(data?.qty),
            totalTradedValue: safeParseInt(data?.trdVal),
            lastUpdateTime: data?.meta?.quotepreopenstatus?.equityTime || '',
            yearHigh: safeParseFloat(data?.wkhi),
            yearLow: safeParseFloat(data?.wklo),
            perChange365d: safeParseFloat(data?.yPC, null), // Use `null` if not available
            date365dAgo: data?.date365dAgo || '',
            date30dAgo: data?.date30dAgo || '',
            perChange30d: safeParseFloat(data?.perChange30d, null), // Avoid conversion errors
            timestamp: new Date().toISOString(),
        }));

        // Save data to the database
        const newData = new NiftyETFData({
            fetchTime: new Date(),
            stocks,
        });

        await newData.save();
        console.log('ETF data saved successfully');
        res.status(200).send('ETF data scraped and saved successfully');
    } catch (error) {
        console.error('Error scraping ETF data:', error.message);
        res.status(500).send('Error scraping and storing ETF data');
    }
};


// Get latest stock data
export const getETFData = async (req, res) => {
    try {
        // Fetch the latest stock entry
        const latestData = await NiftyETFData.findOne().sort({ fetchTime: -1 });

        if (!latestData) {
            return res.status(404).json({ message: "No stock data found" });
        }

        res.status(200).json(latestData.stocks);
    } catch (error) {
        console.error("Error fetching stock data:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};