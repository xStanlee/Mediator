import express from "express";

import { locationService } from "./services/LocationService.js";

const endpoints = express.Router();

endpoints.get("/", (req, res) => {
    res.json({
        "message": "Hello World!"
    });
});

endpoints.get("/coordinates", (req, res) => {
    locationService.manageStream(req.query.lng, req.query.lat);

    res.json({
        "locations": locationService.currentLocations
    });
});

endpoints.get("/data-stream", (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');

    const sendLocation = () => {
        res.write(`data: ${JSON.stringify(locationService.currentLocation)}\n\n`);
    }

    // Improve by reactivity
    setInterval(sendLocation, 5000);
});

export { endpoints };