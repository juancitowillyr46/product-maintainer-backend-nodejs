import { Application, Router } from "express";
import express from "express";
import ProductController from "./productController";

class ProductRoutes {

    public productController: ProductController;
    private router: Router = express.Router();

    constructor() {
        this.productController = new ProductController();
    }

    public routes(app: Application): void {
        // GET Read Products
        this.router.get('/', this.productController.getProducts);

        // GET Read Product
        this.router.get('/:id', this.productController.getProduct);

        // POST Product
        this.router.post('/', this.productController.postProduct);

        // PUT Product
        this.router.put('/:id', this.productController.putProduct);
        
        // DELETE Product
        this.router.delete('/:id', this.productController.deleteProduct);

        app.use('/products', this.router);
    }


}

export default ProductRoutes;