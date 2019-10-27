import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import MainRoutes from "./mainRoutes";


class App {

    public app: express.Application;
    private mainRoutes:MainRoutes = new MainRoutes(); 

    constructor() {
        this.app = express();
        this.config();
        this.router();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(cors());
    }

    private router(): void {
        this.mainRoutes.getMainRoutes(this.app);
    }

}

export default new App().app;