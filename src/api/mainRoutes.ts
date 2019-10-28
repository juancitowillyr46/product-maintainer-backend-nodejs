import { ProductRoutes } from "../components/products/productRoutes";
import { Application } from "express";
export class MainRoutes {
    
    public constructor(app: Application){
        new ProductRoutes(app);
    }

    // public getMainRoutes(app: Application): void {
        
    // }

}
// export default MainRoutes;