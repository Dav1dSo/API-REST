import express from "express";
import * as dotenv from 'dotenv';
dotenv.config()
import Router from "./src/Routes/Routes"

import { urlencoded } from "body-parser";

const App = express();
App.use(urlencoded({extended: true}));
App.use(express.json());

App.use(Router);

App.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}!`)
}) 
