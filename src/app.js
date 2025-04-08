// external imports
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

require('dotenv').config();

const app = express();

app.use(express.json({
    limit: '16kb'
}));

app.use(express.urlencoded({
    extended: true,
    limit: '16kb'
}))

app.use(express.static('public'));

// enable cors
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// enable cookie parser
app.use(cookieParser());


app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port : ${process.env.PORT}`);
});

