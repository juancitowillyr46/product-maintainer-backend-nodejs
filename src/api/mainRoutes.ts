import ProductRoutes from "../components/products/productRoutes";
import { Application } from "express";
class MainRoutes {
    
    constructor(){
        
    }

    public getMainRoutes(app: Application): void {
        new ProductRoutes().routes(app);
    }

}
export default MainRoutes;