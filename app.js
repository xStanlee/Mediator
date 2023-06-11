import express from 'express';
import cors from 'cors';

import { endpoints } from './endpoints.js';

const app = express();

app.set(express.static("./public"));

app.use("/", endpoints);
app.use(cors());

export default app;