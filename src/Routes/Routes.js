import Express  from "express";
import HomeController from "../Controllers/HomeController";
const Router = Express.Router();

Router.get('/', HomeController);

export default Router;
